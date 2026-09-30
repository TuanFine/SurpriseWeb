# SurpriseWeb

This project is a digital gift / surprise web app built with Next.js 14, TypeScript, Tailwind CSS, and Supabase.

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase JS
- QR Code generation via qrcode.react

## Local development

1. npm install
2. copy .env.example to .env.local
3. npm run dev
4. Open http://localhost:3000

## Environment variables

Create a `.env.local` file using the template from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Deployment to Vercel

1. Push this repository to GitHub.
2. Open Vercel and click "Add New Project".
3. Import the GitHub repository.
4. Set the environment variables:
   - NEXT_PUBLIC_SUPABASE_URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY
5. Click "Deploy".

This project is designed to be a public-facing digital gift experience and can be deployed without a custom backend.
