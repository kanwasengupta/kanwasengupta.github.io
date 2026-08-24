import { createFileRoute } from "@tanstack/react-router";
import { cv, person } from "../content/site";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: `CV — ${person.fullName}` },
      {
        name: "description",
        content:
          "Curriculum vitae: education, research and teaching experience, awards, technical skills, and service in geosciences.",
      },
      { property: "og:title", content: `CV — ${person.fullName}` },
      {
        property: "og:description",
        content:
          "Education, research and teaching experience, awards, skills, and service.",
      },
    ],
  }),
  component: CvPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="rule-heading text-xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Timeline({
  entries,
}: {
  entries: readonly { when: string; what: string; detail: string }[];
}) {
  return (
    <ul className="space-y-7">
      {entries.map((e) => (
        <li key={e.what} className="grid gap-1.5 sm:grid-cols-[11rem_1fr] sm:gap-6">
          <p className="text-sm text-muted-foreground">{e.when}</p>
          <div>
            <h3 className="text-base font-medium">{e.what}</h3>
            <p className="mt-1 text-sm leading-relaxed text-secondary-foreground">
              {e.detail}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function CvPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="rule-heading text-3xl">Curriculum Vitae</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {person.role} · {person.department}, {person.institution}
          </p>
        </div>
        <a
          href={cv.pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Open full PDF
        </a>
      </div>

      <Block title="Education">
        <Timeline entries={cv.education} />
      </Block>

      <Block title="Research experience">
        <Timeline entries={cv.experience} />
      </Block>

      <Block title="Teaching experience">
        <Timeline entries={cv.teaching} />
      </Block>

      <Block title="Grants & funding">
        <ul className="space-y-2 text-sm leading-relaxed text-secondary-foreground">
          {cv.grants.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Block>

      <Block title="Awards & honors">
        <ul className="space-y-2 text-sm leading-relaxed text-secondary-foreground">
          {cv.awards.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </Block>

      <Block title="Technical skills">
        <div className="grid gap-6 sm:grid-cols-3">
          {cv.skills.map((s) => (
            <div key={s.group}>
              <h3 className="text-sm uppercase tracking-[0.16em] text-primary">
                {s.group}
              </h3>
              <ul className="mt-3 space-y-1.5 text-sm text-secondary-foreground">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title="Distinctions">
        <ul className="space-y-2 text-sm leading-relaxed text-secondary-foreground">
          {cv.distinctions.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </Block>

      <Block title="Professional memberships & service">
        <ul className="space-y-2 text-sm text-secondary-foreground">
          {cv.service.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Block>
    </div>
  );
}

