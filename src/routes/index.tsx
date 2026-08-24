import { createFileRoute, Link } from "@tanstack/react-router";
import { home, images, person } from "../content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${person.fullName} — Geoscience PhD Candidate` },
      {
        name: "description",
        content:
          "PhD candidate in geosciences studying deep-Earth mineral physics, critical mineral exploration, and planetary interiors. Research, publications, and CV.",
      },
      {
        property: "og:title",
        content: `${person.fullName} — Geoscience PhD Candidate`,
      },
      {
        property: "og:description",
        content:
          "Deep-Earth mineral physics, critical minerals, and planetary interiors. Research, publications, and CV.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      <section className="grid items-start gap-12 py-16 md:grid-cols-[320px_1fr] md:py-24">
        <div>
          <img
            src={images.portrait}
            alt={person.portraitAlt}
            width={1024}
            height={1280}
            className="w-full rounded-lg border object-cover shadow-sm"
          />
          <div className="mt-5 space-y-1 text-sm text-muted-foreground">
            <p>{person.role}</p>
            <p>
              <a
                href="https://myweb.fsu.edu/emstewart/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                Stewart lab
              </a>
            </p>
            <p>
              <a
                href="https://www.eoas.fsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-2 hover:underline"
              >
                Dept of Earth, Ocean and Atmospheric Sciences
              </a>
            </p>
            <p>{person.institution}</p>
            <p>{person.location}</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-primary">
            {person.fields}
          </p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{person.fullName}</h1>
          <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-secondary-foreground">
            {home.bio.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/research"
              className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore research
            </Link>
            <Link
              to="/cv"
              className="rounded-md border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
            >
              View CV
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="rule-heading text-2xl">Research interests</h2>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {home.interests.map((i) => (
            <li key={i.t} className="p-6">
              <h3 className="text-lg">{i.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.d}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
