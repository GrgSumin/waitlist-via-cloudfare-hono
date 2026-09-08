# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

(`CLAUDE.md` is a symlink to `AGENTS.md` — edit `AGENTS.md`.)

## Commands

Package manager is **bun** (`bun.lock`; no `package-lock.json`). Node >= 22.12.0.

```sh
bun install
bun dev           # dev server at localhost:4321
bun build         # production build to ./dist/
bun preview       # preview the production build
bun astro check   # type-check .astro/.ts (extends astro/tsconfigs/strict)
```

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

No test runner or linter is configured; `bun astro check` is the only verification step available.

## State of the repo

This is currently the unmodified Astro "basics" starter (`src/pages/index.astro` → `src/layouts/Layout.astro` → `src/components/Welcome.astro`), with an empty `defineConfig({})` in `astro.config.mjs` — no adapter, no integrations, static output by default. The repo name implies a Hono-backed waitlist, but none of that exists yet: adding API routes or a server runtime means first choosing an output mode and adapter.

`README.md` is the stock starter readme and carries no project-specific information.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
