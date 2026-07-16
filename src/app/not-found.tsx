export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
        <h1 className="text-4xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="mt-8 inline-flex rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
        >
          Back to home
        </a>
      </div>
    </main>
  );
}
