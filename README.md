# Laubloom Clone

Aplikasi web kado digital berbasis Next.js dengan fitur publik, link unik, QR code, dan animasi bunga mekar.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Framer Motion
- React Hook Form + Zod

## Prasyarat

- Node.js 18.x atau 20.x
- npm atau pnpm
- Akun Supabase (untuk setup nanti, tidak wajib untuk build fase awal)

## Install lokal

1. Clone repository:

```bash
git clone https://github.com/TuanFine/SurpriseWeb.git
cd SurpriseWeb
```

2. Install dependency:

```bash
npm install
```

3. Jalankan server development:

```bash
npm run dev
```

4. Buka aplikasi di browser:

```text
http://localhost:3000
```

## Setup Supabase

1. Daftar atau login ke <https://supabase.com>
2. Buat project baru
3. Buka SQL Editor
4. Jalankan file `supabase/schema.sql`
5. Buka Storage pada dashboard Supabase
6. Buat bucket baru dengan nama `gift-media`
7. Set bucket sebagai public read
8. Atur batas file:
   - Foto: max 5MB
   - Musik: max 10MB
9. Copy URL project dan anon key dari menu Settings → API
10. Salin ke file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Deploy ke Vercel

1. Push repository ke GitHub
2. Login ke <https://vercel.com>
3. Klik `Add New Project` dan pilih repo yang sama
4. Pastikan framework terdeteksi sebagai `Next.js`
5. Masukkan environment variables pada menu `Settings → Environment Variables`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Klik `Deploy`
7. Tunggu proses build selesai, lalu cek URL hasil deploy

## Catatan

- File `.env.example` digunakan sebagai template untuk environment variables.
- Jangan memasukkan secret key atau API key ke dalam repo.
- Pada fase awal, aplikasi tetap bisa dibangun meskipun Supabase belum aktif.

## Struktur proyek

```text
app/
  layout.tsx
  page.tsx
  not-found.tsx
components/
lib/
  supabase.ts
supabase/
  schema.sql
types/
  gift.ts
.env.example
README.md
```
