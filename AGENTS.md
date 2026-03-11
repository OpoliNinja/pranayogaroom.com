# Repository Guidelines

## Project Structure & Module Organization
- This is a multi-page static site (not an SPA). The sitemap is defined in `prd.md`.
- Implement one HTML file per page under `src/` (example names: `index.html`, `sobre-mi.html`, `yoga.html`, `masajes.html`, `ayurveda.html`, `cuencos.html`, `redes.html`, `contacto.html`).
- `src/input.css` is the Tailwind CSS input file; `src/output.css` is the generated build output.
- Static assets live under `src/assets/` with images in `src/assets/pictures/` and logos in `src/assets/logo/`.
- `node_modules/` is vendored dependencies and should not be edited manually.

## Build, Test, and Development Commands
- `npm install` installs Node.js dependencies defined in `package.json`.
- `npm run tailwindcss:watch` runs the Tailwind CLI in watch mode to rebuild `src/output.css` whenever files in `src/` change.
- No dev server is configured; open the HTML files in a browser for local preview (for example, open `src/index.html`).

There is no separate production build script; `src/output.css` is the compiled CSS that should be deployed with the HTML pages in `src/`.

## Coding Style & Naming Conventions
- HTML and CSS use 2-space indentation; keep formatting consistent with `src/index.html`.
- Use Tailwind utility classes in the HTML pages; keep custom CSS in `src/input.css` minimal.
- Site content is authored in Spanish; keep copy and headings in Spanish across all pages.
- Use UTF-8 encoding for all text files to avoid accent/emoji corruption (for example: ñ, á, é).
- Keep navigation links consistent across pages using relative paths (for example, `href="yoga.html"`).
- Keep asset filenames consistent with existing patterns (for example, `IMG_YYYYMMDD_HHMMSS.jpg`) and store new media in `src/assets/pictures/`.

## Testing Guidelines
- No automated test framework is configured in this repository.
- If you add tests in the future, document the command in `package.json` and place tests in a dedicated `tests/` or `__tests__/` folder.

## Commit & Pull Request Guidelines
- This folder is not a Git repository, so there is no commit history to infer conventions from.
- If you initialize Git, use short, imperative commit messages (for example, “Add yoga service page”) and keep each commit focused.
- Pull requests should include: a brief summary, screenshots of UI changes, and any manual verification steps.

## Configuration & Assets Tips
- Treat `src/output.css` as generated; edit `src/input.css` and run the watch command instead of hand-editing the output.
- Large media files can bloat the repo; optimize images before adding them to `src/assets/pictures/`.



codex resume 019c18bd-90c3-7eb3-aa0b-72d94200cb3f