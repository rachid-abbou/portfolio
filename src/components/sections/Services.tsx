
import Link from "next/link";

type ServicesProps = {
  locale: string;
};

export default function Services({ locale }: ServicesProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "MES SERVICES",
      title: "Des solutions logicielles adaptées à vos besoins",
      introduction:
        "J'interviens sur des problématiques de développement logiciel, d'intégration et d'informatique industrielle pour transformer les besoins métier en solutions concrètes.",
      contactLabel: "Discutons de votre projet",
      services: [
        {
          number: "01",
          icon: "01",
          title: "Développement d'applications métier",
          description:
            "Conception et développement d'applications adaptées aux processus et aux besoins spécifiques des entreprises.",
          details: [
            "Applications de gestion personnalisées",
            "Interfaces Web et outils métier",
            "Modernisation d'applications existantes",
            "Intégration de bases de données relationnelles",
          ],
          technologies: ["C# / .NET", "Python", "WinDev", "React", "SQL"],
        },
        {
          number: "02",
          icon: "02",
          title: "Informatique industrielle",
          description:
            "Développement de solutions logicielles connectées aux équipements et aux environnements industriels.",
          details: [
            "Communication entre logiciels et équipements",
            "Échanges de données avec les automates",
            "Intégration de protocoles industriels",
            "Traçabilité et suivi des opérations",
          ],
          technologies: [
            "Modbus",
            "TCP/IP",
            "API REST",
            "SQL",
            "Linux",
          ],
        },
        {
          number: "03",
          icon: "03",
          title: "Automatisation des processus",
          description:
            "Identification et automatisation des tâches répétitives pour simplifier les opérations et améliorer les flux de travail.",
          details: [
            "Automatisation de tâches métier",
            "Traitement et circulation des données",
            "Connexion entre différents outils",
            "Développement de scripts et utilitaires",
          ],
          technologies: ["Python", "API", "SQL", "JavaScript"],
        },
        {
          number: "04",
          icon: "04",
          title: "API et intégration logicielle",
          description:
            "Développement de services permettant aux applications et aux systèmes de communiquer et de partager leurs données.",
          details: [
            "Conception et développement d'API REST",
            "Connexion aux bases de données",
            "Intégration de services externes",
            "Échanges de données entre applications",
          ],
          technologies: [
            "Python",
            "PHP",
            "REST API",
            "SQL",
            "JavaScript",
          ],
        },
      ],
    },
    en: {
      eyebrow: "MY SERVICES",
      title: "Software solutions tailored to your needs",
      introduction:
        "I work on software development, integration and industrial IT challenges, turning business requirements into practical solutions.",
      contactLabel: "Let's discuss your project",
      services: [
        {
          number: "01",
          icon: "01",
          title: "Business application development",
          description:
            "Design and development of applications tailored to business processes and specific company requirements.",
          details: [
            "Custom business applications",
            "Web interfaces and business tools",
            "Modernization of existing applications",
            "Relational database integration",
          ],
          technologies: ["C# / .NET", "Python", "WinDev", "React", "SQL"],
        },
        {
          number: "02",
          icon: "02",
          title: "Industrial IT",
          description:
            "Development of software solutions connected to equipment and industrial environments.",
          details: [
            "Communication between software and equipment",
            "Data exchange with PLCs",
            "Industrial protocol integration",
            "Traceability and operational monitoring",
          ],
          technologies: [
            "Modbus",
            "TCP/IP",
            "REST API",
            "SQL",
            "Linux",
          ],
        },
        {
          number: "03",
          icon: "03",
          title: "Process automation",
          description:
            "Identification and automation of repetitive tasks to simplify operations and improve workflows.",
          details: [
            "Business task automation",
            "Data processing and exchange",
            "Integration between different tools",
            "Scripts and utility development",
          ],
          technologies: ["Python", "API", "SQL", "JavaScript"],
        },
        {
          number: "04",
          icon: "04",
          title: "API and software integration",
          description:
            "Development of services that enable applications and systems to communicate and share data.",
          details: [
            "REST API design and development",
            "Database connectivity",
            "Third-party service integration",
            "Data exchange between applications",
          ],
          technologies: [
            "Python",
            "PHP",
            "REST API",
            "SQL",
            "JavaScript",
          ],
        },
      ],
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-600">
            {text.eyebrow}
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {text.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {text.introduction}
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {text.services.map((service) => (
            <article
              key={service.number}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-lg font-bold text-cyan-700">
                  {service.icon}
                </span>

                <span className="text-3xl font-bold text-slate-200 transition group-hover:text-cyan-200">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {service.description}
              </p>

              <ul className="mt-6 space-y-3">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-0.5 font-bold text-cyan-600">
                      ✓
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-xl bg-slate-950 px-8 py-10 text-center text-white">
          <h3 className="text-2xl font-bold">
            {isFrench
              ? "Vous avez un projet ou un besoin spécifique ?"
              : "Have a project or a specific requirement?"}
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            {isFrench
              ? "Échangeons sur vos besoins et étudions ensemble les solutions techniques possibles."
              : "Let's discuss your requirements and explore possible technical solutions together."}
          </p>

          <Link
            href={`/${locale}#contact`}
            className="mt-7 inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            {text.contactLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
