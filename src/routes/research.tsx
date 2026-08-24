import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { person, research } from "../content/site";

export const Route = createFileRoute("/research")({
  head: () => ({
    meta: [
      { title: `Research — ${person.fullName}` },
      {
        name: "description",
        content:
          "Research projects in high-pressure mineral physics, critical mineral exploration, geologic material science, and planetary interiors.",
      },
      { property: "og:title", content: `Research — ${person.fullName}` },
      {
        property: "og:description",
        content:
          "High-pressure mineral physics, critical minerals, geologic material science, and planetary interiors.",
      },
    ],
  }),
  component: ResearchPage,
});

function ResearchPage() {
  const projects = research.projects;
  const [active, setActive] = useState(projects[0].id);
  const project = projects.find((p) => p.id === active)!;

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="rule-heading text-3xl">Research</h1>
      <p className="mt-6 max-w-2xl text-secondary-foreground">{research.intro}</p>

      <div
        role="tablist"
        aria-label="Research areas"
        className="mt-10 flex flex-wrap gap-2 border-b pb-px"
      >
        {projects.map((p) => (
          <button
            key={p.id}
            role="tab"
            aria-selected={active === p.id}
            onClick={() => setActive(p.id)}
            className={
              active === p.id
                ? "-mb-px border-b-2 border-primary px-4 py-2.5 text-sm font-medium text-primary"
                : "-mb-px border-b-2 border-transparent px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {p.label}
          </button>
        ))}
      </div>

      <article className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-2xl">{project.label}</h2>
          <p className="mt-3 font-display text-lg text-primary">{project.lede}</p>
          <div className="mt-5 space-y-4 leading-relaxed text-secondary-foreground">
            {project.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h3 className="mt-8 text-sm uppercase tracking-[0.18em] text-muted-foreground">
            Methods
          </h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.methods.map((m) => (
              <li
                key={m}
                className="rounded-full border bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>

        <figure>
          <img
            src={project.image}
            alt={
              ("imageAlt" in project && project.imageAlt) ||
              `Imagery representing ${project.label} research`
            }
            loading="lazy"
            width={1280}
            height={860}
            className="w-full rounded-lg border object-cover"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            {("caption" in project && project.caption) ||
              `${project.label} — representative laboratory and field imagery.`}
          </figcaption>
        </figure>
      </article>
    </div>
  );
}
