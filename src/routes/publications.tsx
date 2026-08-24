import { createFileRoute } from "@tanstack/react-router";
import { person, publications } from "../content/site";

export const Route = createFileRoute("/publications")({
  head: () => ({
    meta: [
      { title: `Publications — ${person.fullName}` },
      {
        name: "description",
        content:
          "Peer-reviewed journal articles, conference abstracts, and proceedings in metamorphic petrology, geochemistry, and fluid-rock interaction.",
      },
      { property: "og:title", content: `Publications — ${person.fullName}` },
      {
        property: "og:description",
        content:
          "Peer-reviewed journal articles, conference abstracts, and proceedings.",
      },
    ],
  }),
  component: PublicationsPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-14">
      <h2 className="rule-heading text-xl">{title}</h2>
      <div className="mt-8 space-y-6">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h3>
      <div className="mt-5 space-y-6">{children}</div>
    </div>
  );
}

function PublicationsPage() {
  const submitted = publications.journal.filter((p) => p.status === "Submitted");
  const inPrep = publications.journal.filter((p) => p.status === "In preparation");

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="rule-heading text-3xl">Publications</h1>
      <p className="mt-6 max-w-2xl text-secondary-foreground">{publications.intro}</p>

      <Section title="Journal articles">
        <SubSection title="Submitted">
          {submitted.map((p) => (
            <article
              key={p.title}
              className="grid gap-2 border-b pb-6 last:border-0 sm:grid-cols-[4.5rem_1fr]"
            >
              <p className="font-display text-sm text-primary">{p.year}</p>
              <div>
                <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-sm text-secondary-foreground">{p.authors}</p>
                <p className="text-sm italic text-muted-foreground">{p.venue}</p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    className="mt-2 inline-block text-sm text-accent underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    doi:{p.doi}
                  </a>
                )}
              </div>
            </article>
          ))}
        </SubSection>

        <SubSection title="In preparation">
          {inPrep.map((p) => (
            <article
              key={p.title}
              className="grid gap-2 border-b pb-6 last:border-0 sm:grid-cols-[4.5rem_1fr]"
            >
              <p className="font-display text-sm text-primary">{p.year}</p>
              <div>
                <h3 className="font-display text-lg leading-snug">{p.title}</h3>
                <p className="mt-1.5 text-sm text-secondary-foreground">{p.authors}</p>
                <p className="text-sm italic text-muted-foreground">{p.venue}</p>
              </div>
            </article>
          ))}
        </SubSection>
      </Section>

      <Section title="Conference proceedings and abstracts">
        {publications.conference.map((c) => (
          <div key={c.text} className="grid gap-2 border-b pb-5 last:border-0 sm:grid-cols-[4.5rem_1fr]">
            <p className="font-display text-sm text-primary">{c.year}</p>
            <div>
              <p className="text-sm leading-relaxed text-secondary-foreground">{c.text}</p>
              {c.url && (
                <a
                  href={c.url}
                  className="mt-1.5 inline-block text-sm text-accent underline underline-offset-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  View abstract
                </a>
              )}
            </div>
          </div>
        ))}
      </Section>

    </div>
  );
}
