# Speech Therapy Tracker Web

Local Next.js UI for peg-tube consumption, speech exercises, and ice-cube counts. Talks only to the local Express API. **MIT** licensed.

| App | Port |
|-----|------|
| Express | `127.0.0.1:3011` |
| Web | `127.0.0.1:3010` |

Companion API: [speech-therapy-tracker-express-server](https://github.com/Luckee-Core/speech-therapy-tracker-express-server).

- License: [LICENSE](./LICENSE)
- Security: [SECURITY.md](./SECURITY.md)
- Contributing: [CONTRIBUTING.md](./CONTRIBUTING.md)
- Docs (in app): `/docs` after `npm run dev`
- Wire contract: [express docs/oss/wire-contract.md](https://github.com/Luckee-Core/speech-therapy-tracker-express-server/blob/main/docs/oss/wire-contract.md)

## Quick start

```bash
git clone https://github.com/Luckee-Core/speech-therapy-tracker-web.git
git clone https://github.com/Luckee-Core/speech-therapy-tracker-express-server.git

# terminal 1 — API
cd speech-therapy-tracker-express-server
cp .env.example .env
# set DATABASE_URL, then: psql "$DATABASE_URL" -f migrations/setup.sql
npm install && npm run dev

# terminal 2 — UI
cd speech-therapy-tracker-web
npm install
cp .env.example .env.local   # NEXT_PUBLIC_API_URL=http://127.0.0.1:3011
npm run dev
```

Open http://127.0.0.1:3010 for the marketing landing. Dashboard: `/dashboard`. Docs: `/docs`.

## Screens

1. **Landing** (`/`) — marketing
2. **Dashboard** (`/dashboard`) — tube feed and today's exercises
3. **Tube feed** (`/tube-feed`) — formulas and pump snapshots
4. **Speech therapy** (`/speech-therapy`) — homework catalog and photo import
5. **Exercise detail** (`/speech-therapy-exercise-detail-page`) — one exercise
6. **Ice cubes** (`/speech-therapy-consumption`) — daily ice-cube counts

## Postgres

The Express API owns `DATABASE_URL`. Point it at the same local Postgres database My Health uses (`my_health`), then apply `migrations/setup.sql`.

## Stack

Next.js + Redux Toolkit + Tailwind. Sidebar + breadcrumbs via `AppLayout`. Photo import needs `ANTHROPIC_API_KEY` on Express only.
