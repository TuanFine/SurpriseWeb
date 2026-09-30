"use client";

import { QRCodeCanvas } from "qrcode.react";

const surpriseDetails = [
  { label: "For", value: "Your special someone" },
  { label: "Mood", value: "Warm, joyful, and unforgettable" },
  { label: "Format", value: "Digital keepsake" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-dream-gradient text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <span className="inline-flex rounded-full border border-pink-400/50 bg-white/5 px-4 py-2 text-sm font-medium tracking-[0.2em] text-pink-200 uppercase">
              SurpriseWeb
            </span>

            <div className="space-y-5">
              <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-6xl">
                A digital gift
                <span className="block bg-gradient-to-r from-pink-300 via-yellow-200 to-orange-300 bg-clip-text text-transparent">
                  made to be remembered
                </span>
              </h1>
              <p className="max-w-xl text-lg text-slate-200 md:text-xl">
                Share a warm message, unforgettable memories, and a little bit of magic in a single beautiful web experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-pink-500 to-orange-400 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
                Open surprise
              </button>
              <button className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-pink-300 hover:bg-white/10">
                View story
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {surpriseDetails.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-300">{item.label}</p>
                  <p className="mt-2 text-base font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/40 p-6 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Gift code</p>
                <h2 className="mt-2 text-2xl font-bold text-white">#SURPRISE-2026</h2>
              </div>
              <div className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                Ready
              </div>
            </div>

            <div className="mt-6 flex justify-center rounded-3xl bg-white p-5 shadow-lg">
              <QRCodeCanvas value="https://surpriseweb.example/guest/your-name" size={220} includeMargin={true} bgColor="#ffffff" fgColor="#111827" />
            </div>

            <div className="mt-6 rounded-2xl border border-pink-400/20 bg-pink-500/10 p-4 text-sm text-pink-100">
              Scan this QR code to unlock the digital message, memory gallery, and your personal surprise note.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
