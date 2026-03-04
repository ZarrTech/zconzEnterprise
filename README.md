# Zeconz Enterprises

Production-ready Next.js platform for **Logistics**, **Crypto Desk (non-custodial workflow)**, and **Farm Produce** commerce.

## Stack
Next.js App Router, TypeScript, Tailwind, Framer Motion, PostgreSQL + Prisma, Redis + BullMQ, NextAuth Credentials, Zod, Pino, Vitest, Playwright.

## Quick start
1. `cp .env.example .env`
2. `docker compose up -d`
3. `npm install`
4. `npm run db:migrate`
5. `npm run db:seed`
6. `npm run dev`
7. In another terminal: `npm run worker`

## Seed users
- Admin: `admin@zeconz.local / Admin123!`
- Customer: `user@zeconz.local / User123!`

## Scripts
- `npm run dev`
- `npm run worker`
- `npm run db:migrate`
- `npm run db:seed`
- `npm run test`
- `npm run test:e2e`

## Architecture
- `app/` routes and UI pages
- `app/api/v1` API handlers
- `src/services` business logic
- `src/repositories` data access helpers
- `src/providers` provider abstractions
- `src/queues` bullmq queues + worker
- `prisma` schema, migrations, seed
- `tests` unit + e2e

## Deployment guide
1. Provision managed PostgreSQL and Redis.
2. Set env vars on Next.js hosting (`DATABASE_URL`, `REDIS_URL`, `NEXTAUTH_*`).
3. Deploy Next.js app (`npm run build && npm run start`).
4. Deploy worker process separately (`npm run worker`).
5. Configure webhook URLs:
   - `/api/v1/webhooks/paystack`
   - `/api/v1/webhooks/flutterwave`

## Notes
- Payment truth rule enforced server-side via verification/webhooks.
- Webhooks stored in `WebhookEvent`, processed asynchronously.
- Audit logging included for admin status updates.
- S3-compatible POD upload is represented by URL persistence with local fallback.
