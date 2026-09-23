# Contributing to Speech Therapy Tracker (Web)

Thank you for contributing to the Speech Therapy Tracker open-source pair.

## Repositories

| Repo | Role |
|------|------|
| [speech-therapy-tracker-web](https://github.com/Luckee-Core/speech-therapy-tracker-web) | Next.js dashboard, tube feed, exercises, ice cubes, and `/docs` |
| [speech-therapy-tracker-express-server](https://github.com/Luckee-Core/speech-therapy-tracker-express-server) | Postgres Express API |

Changes that touch API contracts should be coordinated across both repos. See the [wire contract](https://github.com/Luckee-Core/speech-therapy-tracker-express-server/blob/main/docs/oss/wire-contract.md) in the Express repo.

## Before you code

1. Read [.cursor/architecture/README.md](./.cursor/architecture/README.md).
2. Read [.cursor/rules/AGENTS.md](./.cursor/rules/AGENTS.md).
3. Follow existing patterns in `src/packages/`, `src/store/`, `src/model/`, and `src/api/`.

## Development setup

1. Start the Express API on `127.0.0.1:3011` (see companion repo README). Apply `migrations/setup.sql` if the database is new.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_API_URL=http://127.0.0.1:3011`.
3. `npm install` then `npm run dev` (web listens on port `3010`).

## Pull requests

- Keep PRs focused; one feature or fix per PR when possible.
- Run `npm run build` and `npm run lint` before opening a PR.
- Update README or `/docs` when behavior, env vars, or setup steps change.
- Do not commit secrets or `.env` files.

## Questions

Open a GitHub issue for bugs or feature discussion.
