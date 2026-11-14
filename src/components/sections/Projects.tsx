
type ProjectsProps = {
  locale: string;
};

export default function Projects({ locale }: ProjectsProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "RÉALISATIONS",
      title: "Des projets au croisement du logiciel et de l'industrie",
      introduction:
        "Quelques exemples de projets auxquels j'ai contribué au cours de mon parcours professionnel.",
      projects: [
        {
          category: "Gestion d'entrepôt",
          title: "Migration d'un WMS Delphi vers WinDev",
          description:
            "Participation à la migration et à la modernisation d'une application de gestion d'entrepôt Kardex, développée initialement sous Delphi 6.",
          contributions: [
            "Migration vers WinDev 2024",
            "Modernisation de l'application existante",
            "Environnement de gestion d'entrepôt",
          ],
          technologies: ["Delphi 6", "WinDev 2024", "SQL Server"],
        },
        {
          category: "Intégration industrielle",
          title: "API pour machines de collecte",
          description:
            "Développement d'une API REST permettant de communiquer avec des machines de collecte de bouteilles et d'enregistrer les données dans une base de données.",
          contributions: [
            "Développement d'une API REST",
            "Connexion à une base de données",
            "Tableau de bord de suivi",
          ],
          technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Bootstrap",
            "Google Maps API",
          ],
        },
        {
          category: "Traçabilité industrielle",
          title: "Applications de traçabilité",
          description:
            "Participation au développement et à la maintenance de solutions logicielles dédiées à la traçabilité et au suivi des activités industrielles.",
          contributions: [
            "Développement d'applications métier",
            "Gestion des données industrielles",
            "Maintenance et évolution logicielle",
          ],
          technologies: [
            "Delphi",
            "WinDev",
            "Oracle",
            "HyperFileSQL",
            "Linux / C",
          ],
        },
      ],
    },
    en: {
      eyebrow: "PROJECTS",
      title: "Projects at the intersection of software and industry",
      introduction:
        "A selection of projects I have contributed to throughout my professional career.",
      projects: [
        {
          category: "Warehouse management",
          title: "Delphi to WinDev WMS migration",
          description:
            "Contributed to the migration and modernization of a Kardex warehouse management application originally developed with Delphi 6.",
          contributions: [
            "Migration to WinDev 2024",
            "Modernization of the existing application",
            "Warehouse management environment",
          ],
          technologies: ["Delphi 6", "WinDev 2024", "SQL Server"],
        },
        {
          category: "Industrial integration",
          title: "API for bottle collection machines",
          description:
            "Developed a REST API to communicate with bottle collection machines and store the collected data in a database.",
          contributions: [
            "REST API development",
            "Database integration",
            "Monitoring dashboard",
          ],
          technologies: [
            "PHP",
            "MySQL",
            "JavaScript",
            "Bootstrap",
            "Google Maps API",
          ],
        },
        {
          category: "Industrial traceability",
          title: "Industrial traceability applications",
          description:
            "Contributed to the development and maintenance of software solutions dedicated to industrial traceability and activity monitoring.",
          contributions: [
            "Business application development",
            "Industrial data management",
            "Software maintenance and improvements",
          ],
          technologies: [
            "Delphi",
            "WinDev",
            "Oracle",
            "HyperFileSQL",
            "Linux / C",
          ],
        },
      ],
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  return (
    <section
      id="projects"
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

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {text.projects.map((project, index) => (
            <article
              key={project.title}
              className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                  {project.category}
                </span>

                <span className="text-sm font-bold text-slate-300">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-900">
                  {isFrench ? "Contributions" : "Contributions"}
                </h4>

                <ul className="mt-3 space-y-2">
                  {project.contributions.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-600"
                    >
                      <span className="mt-1 text-cyan-600">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                {project.technologies.map((technology) => (
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
      </div>
    </section>
  );
}
