# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Personal portfolio and landing page for **Hafiz Hardiansyah Pratama**, an Automation Solution Architect (OT/IT) based in Jakarta, Indonesia. The site showcases his 6+ years of experience in Industrial Automation, SCADA/PLC, IIoT, and OT/IT integration work.

## Tech Stack

- **Framework**: Next.js 14.2.x (App Router)
- **Styling**: Tailwind CSS v3
- **Language**: TypeScript
- **Icons**: lucide-react
- **Deployment**: VPS (details below) + optionally Vercel

## Deployment — VPS

<!-- TODO: Hafiz to fill in VPS details -->
- **Host/IP**: _TBD_
- **Provider**: _TBD_
- **SSH port**: _TBD_
- **Deploy method**: _TBD_ (e.g. PM2 + Nginx, Docker, etc.)
- **Domain**: _TBD_

## Development Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Start production server locally
npm run lint      # Run ESLint
```

## Architecture

Two-page portfolio + project detail sub-pages using Next.js 14 App Router.

**Routes:**
- `/` — Overview: Hero + FeaturedProjects grid + InquiryForm (with backend)
- `/profile` — Full profile: About, Experience, Skills, Education, Contact info
- `/projects/[slug]` — Individual project detail pages (statically generated from `lib/projects.ts`)
- `/api/inquiry` — POST endpoint: saves to Supabase + sends email via Resend

**Key files:**
- `lib/projects.ts` — single source of truth for all project data; add projects here
- `app/api/inquiry/route.ts` — inquiry handler (Supabase + Resend)
- `components/sections/InquiryForm.tsx` — `"use client"` form component
- `components/sections/FeaturedProjects.tsx` — project grid with Live/On Development badges
- `components/Navbar.tsx` — `"use client"`, switches nav links based on `usePathname()`

**Config note**: Use `next.config.mjs`, not `next.config.ts` — Next.js 14 does not support the `.ts` config extension.

**Custom Tailwind colors** (in `tailwind.config.ts`): `background` (#0B1120), `surface` (#0f172a), `card` (#1e293b). Everything else uses Tailwind's built-in slate/cyan/amber palette directly.

## Backend Setup (Supabase + Resend)

Copy `.env.local.example` → `.env.local` and fill in credentials.

**Supabase table** — run this SQL in the Supabase dashboard:
```sql
CREATE TABLE inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT,
  timeline TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Resend**: update the `from` field in `app/api/inquiry/route.ts` with a verified domain once set up (currently uses `onboarding@resend.dev` for dev/testing).

## Content Reference

The CV is at `2026-Hafiz-Resume.pdf`. Key facts for the portfolio:

**Identity**: Hafiz Hardiansyah Pratama — Automation Solution Architect (OT/IT)  
**Contact**: +62-822-99099497 | hafizhp@icloud.com | linkedin.com/in/hafizhp/

**Experience**:
- PT. Danfoss Indonesia — Automation Solution Architect (OT/IT), 2022–Present
- PT. Control Systems Arena Para Nusa — DCS/SIS System Engineer, 2019–2022

**Core Skills**: DCS (Emerson DeltaV), SIS, PLC (IEC 61131-3), SCADA (AVEVA, Indusoft), IIoT (MING Stack: Mosquitto/InfluxDB/Node-RED/Grafana), SQL Server, HTML/PHP/JS, Secure Networking (MTCNA Certified), Modbus TCP/Serial

**Projects**: SCADA & Data Intelligence (PT. Bio Inti Agrindo), IIoT & Energy Optimization (Dharma Satya Nusantara PKS 12), Gas Compressor SIS Engineering (Pertamina EP SKG Betung)

**Education**: S.Tr.T Industrial Electrical Automation Engineering, State Polytechnic of Jakarta — GPA 3.65

**Certifications**: MTCNA (2025), BNSP PLC & SCADA (2019), BNSP Electrical Installation (2019), 1st Runner Up National PLC Competition (2017)

## Design Direction

Industrial-tech aesthetic: dark background, accent colors inspired by industrial HMI/SCADA interfaces (think teal/cyan or orange on dark). Clean, professional, minimal animations. Mobile-responsive.
