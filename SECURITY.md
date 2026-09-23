# Security Policy

## Supported versions

| Version | Supported |
|---------|-----------|
| Latest release tag | Yes |
| `main` branch | Best-effort |

## Reporting a vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Report privately via GitHub Security Advisories on this repository, or email security concerns to the maintainers through your TroutHouseTech contact channel.

Include:

- Description of the issue
- Steps to reproduce
- Impact assessment
- Suggested fix (if any)

We aim to acknowledge reports within 7 days.

## Scope

This project is a **local-only** Next.js UI for speech exercises, ice-cube counts, and peg-tube feed logs. The browser talks to a companion Express API bound to `127.0.0.1`. Health-related rows live in local Postgres, not in this client.

### In scope

- Secrets exposed in the web bundle (`NEXT_PUBLIC_*`)
- XSS or injection in the Next.js UI
- Incorrect documentation that leads to unsafe deployment (binding Express beyond localhost)

### Out of scope (by design for OSS v1)

- Missing API authentication on the companion Express server when run on localhost for personal use. See the companion repo `SECURITY.md` and [wire contract](https://github.com/Luckee-Core/speech-therapy-tracker-express-server/blob/main/docs/oss/wire-contract.md).

## Threat model (web)

- Only `NEXT_PUBLIC_*` variables are embedded in the browser bundle. Never put `DATABASE_URL` or `ANTHROPIC_API_KEY` in this client.
- Deploying this app to the public internet without authentication on the API is **not recommended**.

## Best practices for operators

1. Keep Express on `127.0.0.1`. Do not port-forward 3011.
2. Treat the local Postgres database as private health data.
3. Use HTTPS and restrict CORS if you ever expose the API beyond localhost (not supported in OSS v1).
