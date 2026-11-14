
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center text-white">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
        Professional Portfolio
      </p>

      <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
        Full Stack Developer
      </h1>

      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
        Industrial Applications · Business Software · System Integration
      </p>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/fr"
          className="rounded-lg bg-cyan-500 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Français
        </Link>

        <Link
          href="/en"
          className="rounded-lg border border-slate-500 px-8 py-3 font-semibold text-white transition hover:bg-slate-800"
        >
          English
        </Link>
      </div>
    </main>
  );
}
