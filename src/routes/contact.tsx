import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { contact, person } from "../content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${person.fullName}` },
      {
        name: "description",
        content:
          "Get in touch about research collaborations, positions, seminar invitations, or reprint requests.",
      },
      { property: "og:title", content: `Contact — ${person.fullName}` },
      {
        property: "og:description",
        content:
          "Reach out about collaborations, positions, seminars, or reprint requests.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.formRecipient}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="rule-heading text-3xl">Contact</h1>
      <p className="mt-6 max-w-2xl text-secondary-foreground">{contact.intro}</p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="text-sm uppercase tracking-[0.18em] text-primary">Reach me</h2>
          <ul className="mt-5 divide-y border-y">
            {contact.channels.map((c) => (
              <li key={c.label} className="flex items-baseline justify-between gap-4 py-3">
                <span className="text-sm text-muted-foreground">{c.label}</span>
                <a
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-right text-sm text-accent underline underline-offset-4"
                >
                  {c.value}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm uppercase tracking-[0.18em] text-primary">
            Send a message
          </h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input type="hidden" name="_subject" value="New message from your website" />
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} />

            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground">
                Your email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                maxLength={255}
                className="mt-1 w-full border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="text-sm text-muted-foreground">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                maxLength={150}
                className="mt-1 w-full border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={4000}
                className="mt-1 w-full border bg-transparent px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="border border-primary px-5 py-2 text-sm uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>

            {status === "sent" && (
              <p className="text-sm text-accent">Thanks — your message has been sent.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please email me directly instead.
              </p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
}
