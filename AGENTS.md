# Repository Guidelines

## Project Structure & Module Organization
- App Router at `src/app` (pages, layouts, API). Example: contact API at `src/app/api/contact/route.ts`.
- UI and layout components in `src/components/` (e.g., `ui/`, `layout/`, `project/`).
- Constants and content in `src/constants/` (project data, config).
- Utilities in `src/lib/`, types in `src/types/`, styles in `src/styles/globals.css`.
- Static assets in `public/` (images, icons). Path aliases: `@/*`, `@public/*`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server at http://localhost:3000.
- `npm run build`: Production build (Next.js + TypeScript).
- `npm start`: Serve the built app.
- `npm run lint`: Run ESLint (`next lint`).
- `npm run format` / `npm run format:fix`: Check/auto-format with Prettier.

## Coding Style & Naming Conventions
- TypeScript strict mode enabled. Prefer `import` paths via aliases (`@/…`).
- Prettier: 2 spaces, semicolons, double quotes, trailing commas (ES5). Tailwind classes are ordered via `prettier-plugin-tailwindcss`.
- Components: PascalCase files in `src/components/` (e.g., `ProjectCarousel.tsx`).
- Utilities: camelCase in `src/lib/`. Types: PascalCase in `src/types/`.
- Styling: Tailwind CSS in JSX; shared/global styles in `src/styles/globals.css`.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Name tests `*.test.ts(x)` colocated with source or under `tests/`.
- Aim for clear unit tests of utils and component behavior (props, rendering, interactions).

## Commit & Pull Request Guidelines
- Use Conventional Commits (e.g., `feat: …`, `fix: …`) as in current history.
- PRs: include a concise summary, linked issue(s), and screenshots for UI changes.
- Ensure `npm run lint` and `npm run format` pass; mention any migrations or env changes.

## Security & Configuration Tips
- Configure secrets in `.env.local`. Required: `DISCORD_WEBHOOK` for the contact API.
- Never commit secrets; update `.env.example` when adding new variables.
- Validate API changes locally and avoid logging sensitive data.

