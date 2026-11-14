
import Link from "next/link";

type HeroProps = {
  locale: string;
};

export default function Hero({ locale }: HeroProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "DÉVELOPPEMENT LOGICIEL & INFORMATIQUE INDUSTRIELLE",
      title: "Développeur Full Stack & Solutions Industrielles",
      description:
        "Plus de 10 ans d'expérience dans la conception et le développement d'applications métier et industrielles. Je transforme les besoins opérationnels en solutions logicielles fiables, adaptées aux réalités du terrain.",
      secondary:
        "Applications de gestion · Logiciels industriels · Intégration des systèmes",
      projects: "Découvrir mes projets",
      contact: "Me contacter",
      availability: "Ouvert aux opportunités professionnelles et aux projets indépendants",
    },
    en: {
      eyebrow: "SOFTWARE DEVELOPMENT & INDUSTRIAL IT",
      title: "Full Stack Developer & Industrial Solutions",
      description:
        "Over 10 years of experience designing and developing business and industrial applications. I turn operational needs into reliable software solutions adapted to real-world environments.",
      secondary:
        "Business applications · Industrial software · Systems integration",
      projects: "Explore my projects",
      contact: "Get in touch",
      availability:
        "Open to professional opportunities and independent projects",
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  const technologies = [
    "WinDev",
    "Delphi",
    "C# / .NET",
    "Python",
    "SQL",
    "REST API",
    "Modbus / TCP-IP",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold tracking-[0.2em] text-cyan-400">
            {text.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {text.title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            {text.description}
          </p>

          <p className="mt-5 text-sm font-medium text-slate-400">
            {text.secondary}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={`/${locale}#projects`}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              {text.projects}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="rounded-lg border border-slate-500 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              {text.contact}
            </Link>
          </div>

          <div className="mt-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Technologies
            </p>

            <div className="flex flex-wrap gap-3">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-10 text-sm text-slate-400">
            {text.availability}
          </p>
        </div>
      </div>
    </section>
  );
}
