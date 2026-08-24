/**
 * Static export for GitHub Pages.
 *
 * Runs the production server locally, fetches every page, and writes the
 * rendered HTML into `_site/` next to the built client assets. The result is a
 * plain static folder that GitHub Pages can serve.
 *
 * Usage: bun run export  (after `bun run build`)
 */
import { spawn } from "node:child_process";
import { cp, mkdir, writeFile, rm } from "node:fs/promises";
import path from "node:path";

const ROUTES = ["/", "/research", "/publications", "/cv", "/contact"];
const OUT = "_site";
const PORT = 4173;
const base = (process.env.BASE_PATH ?? "/").replace(/\/+$/, "/") || "/";

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--host"], {
  stdio: ["ignore", "inherit", "inherit"],
  env: process.env,
});

const origin = `http://localhost:${PORT}`;

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(origin + base);
      if (res.ok) return;
    } catch {
      /* not up yet */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("preview server did not start");
}

try {
  await waitForServer();

  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });
  await cp("dist/client", OUT, { recursive: true });

  for (const route of ROUTES) {
    const url = origin + path.posix.join(base, route);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${route} -> HTTP ${res.status}`);
    const html = await res.text();
    const file =
      route === "/" ? path.join(OUT, "index.html") : path.join(OUT, route, "index.html");
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html);
    console.log(`exported ${route}`);
  }

  // GitHub Pages fallback so deep links and refreshes work.
  const home = await (await fetch(origin + base)).text();
  await writeFile(path.join(OUT, "404.html"), home);
  // Prevent Jekyll from stripping files that start with an underscore.
  await writeFile(path.join(OUT, ".nojekyll"), "");
  console.log(`static site written to ${OUT}/`);
} finally {
  server.kill("SIGTERM");
}
