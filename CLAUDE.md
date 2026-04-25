# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

`ks-docs` is the public documentation site for **Knowledge Stack** (the API/platform whose code lives in `../ks-backend` and `../ks-frontend`). It is a **Mintlify** site — pure content (`.mdx` + `docs.json` + `openapi.yaml`), no build step or package manager in this repo.

The repo was recently migrated from Nextra to Mintlify (see commit `2a4dba3`). Stray `node_modules/`, `.next/`, and `out/` directories are leftovers from the old Nextra setup and are gitignored — do not treat them as live infrastructure.

## Local preview

Mintlify renders content directly from `.mdx` files. To preview locally:

```bash
npx mintlify dev          # serves the site, hot-reloads on .mdx changes
npx mintlify broken-links # validate internal links before pushing
```

There is no `package.json`, no lint, no test, and no build command in this repo. Hosting is "zero-infra" — Mintlify pulls from GitHub on push.

## Authoring model

- **`docs.json`** is the single source of truth for navigation, theme, and the OpenAPI tab. Every page referenced in `navigation.tabs[].groups[].pages` must exist as a matching `.mdx` file at that path (no extension). Adding a new page = create the `.mdx` file **and** register it in `docs.json`, otherwise it won't appear in the sidebar.
- **`openapi.yaml`** powers the auto-generated "API Reference" tab. It is the spec for the backend API — keep it in sync when backend endpoints change.
- Pages are organized by top-level concept folder: `ingestion/`, `agent/`, `infrastructure/`, `design/`, `cli/`, `deployment/`, `testing/`. Top-level concept docs (`introduction`, `quickstart`, `architecture`, `path-system`, `pdo-traversal`, `authentication`, `authorization`, `threads`, `semantic-search`) live at the root.
- MDX frontmatter uses `title` and `description`. Cross-page links use absolute paths without the `.mdx` extension (e.g. `/quickstart`, `/ingestion/chunk-handling`) — these resolve through Mintlify's router, not the filesystem.

## Relationship to the rest of the workspace

This repo documents the product; it doesn't ship any of it. When the backend changes endpoints, schemas, or concepts (path system, PDO traversal, ingestion pipeline, agent/Temporal flow), the corresponding `.mdx` page and/or `openapi.yaml` here needs to be updated. The parent workspace's `CLAUDE.md` (`../CLAUDE.md`) describes the backend and frontend that this site documents.
