"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <h1 className="text-4xl font-semibold text-white">Something went wrong.</h1>
        <p className="mt-4 text-slate-300">An unexpected error occurred while loading the page.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
