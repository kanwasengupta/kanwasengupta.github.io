# Personal academic website

Five pages — Home, Research (tabbed), Publications, CV, Contact — deployable as a
static site to GitHub Pages.

## Editing your content

**Everything you'll want to change lives in one file: `src/content/site.ts`.**

| What | Where in `src/content/site.ts` |
| --- | --- |
| Name, title, institution, location | `person` |
| Home page bio, stat tiles, research interests | `home` |
| Research tabs (add/remove a tab = add/remove an entry) | `research.projects` |
| Papers, abstracts, reports | `publications` |
| Education, experience, awards, skills, service | `cv` |
| Email and profile links, mailing address, office hours | `contact` |
| Nav menu labels | `navLinks` |

Photos: replace the files in `src/assets/` (`portrait.jpg`,
`research-lab.jpg`, `research-minerals.jpg`, `research-field.jpg`) keeping the
same file names. CV PDF: drop `cv.pdf` into `public/` (path set by `cv.pdfHref`).

The placeholder name is currently `XYZ` — search and replace it in
`src/content/site.ts` when you're ready.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds the site,
   exports static HTML for every page, and publishes it.

The site is served at `https://<user>.github.io/<repo>/`. If you use a
user/organisation page (`<user>.github.io`) or a custom domain, set
`BASE_PATH: /` in the workflow.

## Local development

```bash
bun install
bun run dev          # http://localhost:8080

# Static export, exactly as GitHub Pages gets it:
STATIC_EXPORT=1 BASE_PATH=/ bun run build
STATIC_EXPORT=1 BASE_PATH=/ bun run export   # output in _site/
```
