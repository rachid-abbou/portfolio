
type ExperienceProps = {
  locale: string;
};

export default function Experience({ locale }: ExperienceProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "PARCOURS PROFESSIONNEL",
      title: "Une expérience construite sur des projets concrets",
      introduction:
        "Mon parcours professionnel m'a permis d'intervenir sur des applications métier, des systèmes de gestion et des solutions informatiques industrielles.",
      currentLabel: "Expérience la plus récente",
      missionsLabel: "Missions et réalisations",
      technologiesLabel: "Environnement technique",
      experiences: [
        {
          company: "RDT",
          position: "Développeur Full Stack",
          contract: "CDI",
          period: "Janvier 2025 – Juillet 2025",
          location: "Poitiers",
          description:
            "Participation à la migration et à la modernisation d'une application de gestion d'entrepôt Kardex.",
          missions: [
            "Migration d'une application existante de Delphi 6 vers WinDev 2024",
            "Évolution et modernisation du logiciel de gestion d'entrepôt",
            "Travail sur les applications WinDev et WinDev Mobile",
          ],
          technologies: [
            "WinDev 2024",
            "WinDev Mobile",
            "Delphi 6",
            "SQL Server",
          ],
        },
        {
          company: "KLOCEL",
          position: "Développeur Full Stack",
          contract: "CDD",
          period: "Août 2023 – Septembre 2024",
          location: "Ver-lès-Chartres",
          description:
            "Participation au développement et à l'évolution de CELLA, une solution logicielle de gestion d'entrepôt (WMS).",
          missions: [
            "Développement et évolution de fonctionnalités applicatives",
            "Intervention sur une solution de gestion d'entrepôt",
            "Développement dans un environnement Web et backend",
          ],
          technologies: [
            "Next.js",
            "Python",
            "WMS",
          ],
        },
        {
          company: "RVM Conception",
          position: "Stagiaire développeur Web",
          contract: "Stage",
          period: "Février 2023 – Mars 2023",
          location: "France",
          description:
            "Développement d'une API REST destinée à communiquer avec des machines de collecte de bouteilles.",
          missions: [
            "Développement d'une API REST pour les échanges avec les machines",
            "Enregistrement des données dans une base de données",
            "Réalisation d'un tableau de bord de suivi",
          ],
          technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Google Maps API",
          ],
        },
        {
          company: "AMETIS – Groupe VITADRESSE",
          position: "Analyste développeur Delphi / WinDev",
          contract: "CDI",
          period: "Février 2014 – Octobre 2019",
          location: "Gallardon",
          description:
            "Développement et maintenance de solutions logicielles dédiées à la traçabilité industrielle.",
          missions: [
            "Développement et maintenance d'applications métier",
            "Participation à des projets de traçabilité industrielle",
            "Évolution de solutions logicielles existantes",
            "Intervention dans des environnements de bases de données et systèmes variés",
          ],
          technologies: [
            "Delphi 6 / XE2 / RX",
            "WinDev",
            "Oracle",
            "HyperFileSQL",
            "Linux / C",
            "PowerBuilder",
            "JetForm",
            "Accelio",
          ],
        },
      ],
    },
    en: {
      eyebrow: "PROFESSIONAL EXPERIENCE",
      title: "Experience built through real-world projects",
      introduction:
        "My professional background includes business applications, warehouse management systems and industrial software solutions.",
      currentLabel: "Most recent experience",
      missionsLabel: "Responsibilities and achievements",
      technologiesLabel: "Technical environment",
      experiences: [
        {
          company: "RDT",
          position: "Full Stack Developer",
          contract: "Permanent contract",
          period: "January 2025 – July 2025",
          location: "Poitiers, France",
          description:
            "Contributed to the migration and modernization of a Kardex warehouse management application.",
          missions: [
            "Migrated an existing application from Delphi 6 to WinDev 2024",
            "Improved and modernized warehouse management software",
            "Worked with WinDev and WinDev Mobile applications",
          ],
          technologies: [
            "WinDev 2024",
            "WinDev Mobile",
            "Delphi 6",
            "SQL Server",
          ],
        },
        {
          company: "KLOCEL",
          position: "Full Stack Developer",
          contract: "Fixed-term contract",
          period: "August 2023 – September 2024",
          location: "Ver-lès-Chartres, France",
          description:
            "Contributed to the development and improvement of CELLA, a warehouse management system (WMS).",
          missions: [
            "Developed and improved application features",
            "Worked on a warehouse management solution",
            "Developed within a Web and backend environment",
          ],
          technologies: [
            "Next.js",
            "Python",
            "WMS",
          ],
        },
        {
          company: "RVM Conception",
          position: "Web Development Intern",
          contract: "Internship",
          period: "February 2023 – March 2023",
          location: "France",
          description:
            "Developed a REST API designed to communicate with bottle collection machines.",
          missions: [
            "Developed a REST API for machine communication",
            "Stored data in a database",
            "Created a monitoring dashboard",
          ],
          technologies: [
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
            "Google Maps API",
          ],
        },
        {
          company: "AMETIS – VITADRESSE Group",
          position: "Delphi / WinDev Software Developer",
          contract: "Permanent contract",
          period: "February 2014 – October 2019",
          location: "Gallardon, France",
          description:
            "Developed and maintained software solutions dedicated to industrial traceability.",
          missions: [
            "Developed and maintained business applications",
            "Contributed to industrial traceability projects",
            "Improved existing software solutions",
            "Worked with various database and system environments",
          ],
          technologies: [
            "Delphi 6 / XE2 / RX",
            "WinDev",
            "Oracle",
            "HyperFileSQL",
            "Linux / C",
            "PowerBuilder",
            "JetForm",
            "Accelio",
          ],
        },
      ],
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  return (
    <section
      id="experience"
      className="bg-white px-6 py-24 text-slate-900"
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

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-slate-200 sm:block" />

          <div className="space-y-10">
            {text.experiences.map((experience) => (
              <article
                key={experience.company}
                className="relative sm:pl-12"
              >
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-cyan-500 bg-white sm:block" />

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-md sm:p-8">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-semibold text-cyan-600">
                        {experience.period}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold">
                        {experience.company}
                      </h3>

                      <p className="mt-1 text-lg font-semibold text-slate-700">
                        {experience.position}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
                        {experience.contract}
                      </span>

                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                        {experience.location}
                      </span>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    {experience.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-slate-900">
                      {text.missionsLabel}
                    </h4>

                    <ul className="mt-3 space-y-2">
                      {experience.missions.map((mission) => (
                        <li
                          key={mission}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-0.5 text-cyan-600">✓</span>
                          <span>{mission}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <h4 className="mb-3 text-sm font-bold text-slate-900">
                      {text.technologiesLabel}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-md bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
