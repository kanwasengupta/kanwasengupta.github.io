import { person } from "../content/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 text-xs text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()}&nbsp;KS
        </p>
        <p>
          {person.role.replace(/^.*?,\s*/, "")} · {person.department} ·{" "}
          {person.institution}
        </p>
      </div>
    </footer>
  );
}
