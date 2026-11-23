# DentIntellect AI

**Unified Intelligence for Dental Healthcare and Academic Excellence.**

A React 18 + TypeScript + Vite PWA prototype for dental clinical documentation, academic competency tracking, faculty verification and institutional intelligence.

## Run locally

```bash
npm install --legacy-peer-deps
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Deploy to Vercel

This is a static Vite application and does not require a server or environment
variables for its demo experience.

1. Push this project to a dedicated GitHub repository, or select its folder as
   the Vercel project root if it lives inside a larger repository.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Set the project root to this directory (`DentIntellect-AI` if nested).
4. Vercel reads `vercel.json` to install dependencies, run the production build,
   publish `dist`, and route application paths to the SPA entry point.
5. Deploy. Vercel will build production deployments from the configured branch
   and preview deployments for pull requests.

The install command uses `npm ci --legacy-peer-deps` to match this project's
lockfile and existing Vite/PWA plugin peer-dependency constraints.

## GitHub preparation

The `.gitignore` excludes dependencies, generated build output, and local Vercel
settings. From this directory, initialize or use the intended GitHub repository,
then commit the project files and push the production branch. Do not push this
project into an unrelated repository.

## Demonstration access

The role selector in the header switches the active workspace instantly. Available roles: Student, Faculty, HOD and Administrator. No external credentials or API are required.

## Routes

- `/dashboard/student` — clinical progress, recent cases, competency gaps
- `/dashboard/faculty` — SLA-aware verification queue
- `/cases/:id/review` — full-screen faculty case review and verification
- `/dashboard/hod` — competency heatmap, early warning, faculty backlog and trends
- `/dashboard/admin` — system health, department volume, users and accreditation
- `/patients/:id` — overview, FDI odontogram, case history and follow-ups
- `/cases/new` — four-step clinical case sheet

## Architecture

- `src/data/db.ts` — typed institutional records and API-shaped async accessors
- `src/store/useAppStore.ts` — Zustand global role, offline and case state
- `src/pwa/idb.ts` — IndexedDB persistence via `idb`
- `vite.config.ts` — Workbox-backed PWA shell caching
- `src/components/dental/Odontogram.tsx` — interactive permanent dentition chart in FDI notation

All records are synthetic institutional records for evaluation and must be replaced with governed clinical data before real-world deployment. The app intentionally has no backend API, identity provider, or clinical compliance controls; the login/authentication layer and secure server persistence are not production implementations. Patient and clinical information should never be deployed publicly without institutional authorization, consent, access controls, audit logging and applicable privacy safeguards.
