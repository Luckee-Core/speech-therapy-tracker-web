# Speech Therapy Tracker

Next.js app for peg-tube consumption, speech exercises, and ice-cube counts. Pair with **speech-therapy-tracker-express-server** (port 3011), which reads the **same Postgres database as My Health**.

## Run

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3010](http://localhost:3010).

## Screens

- `/` — dashboard (tube feed and today's exercises)
- `/tube-feed` — formulas and pump snapshots
- `/speech-therapy` — homework catalog and photo import
- `/speech-therapy-exercise-detail-page` — one exercise
- `/speech-therapy-consumption` — daily ice-cube counts

## Architecture

Follow `.cursor/rules/AGENTS.md` and `.cursor/architecture/`.
