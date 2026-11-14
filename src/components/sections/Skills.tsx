
type SkillsProps = {
  locale: string;
};

export default function Skills({ locale }: SkillsProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "COMPÉTENCES TECHNIQUES",
      title: "Des compétences au service de projets concrets",
      introduction:
        "Une expérience construite autour du développement d'applications métier, des systèmes industriels et de l'intégration logicielle.",
      professionalLabel: "Expérience professionnelle",
      practiceLabel: "Pratique et approfondissement",
      categories: [
        {
          title: "Applications métier & bases de données",
          description:
            "Développement, maintenance et modernisation d'applications de gestion.",
          technologies: [
            "WinDev",
            "WinDev Mobile",
            "Delphi",
            "SQL Server",
            "Oracle",
            "HyperFileSQL",
            "PowerBuilder",
          ],
        },
        {
          title: "Informatique industrielle & intégration",
          description:
            "Applications connectées aux environnements industriels, échanges de données et traçabilité.",
          technologies: [
            "WMS",
            "Traçabilité industrielle",
            "Interfaces machines",
            "Automates",
            "Modbus",
            "TCP/IP",
            "API REST",
            "Linux / C",
          ],
        },
        {
          title: "Développement Web & backend",
          description:
            "Conception d'interfaces Web, services applicatifs et échanges avec les bases de données.",
          technologies: [
            "Next.js",
            "Python",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
          ],
        },
      ],
      practiceTitle: "Technologies approfondies en pratique et formation",
      practiceDescription:
        "Technologies développées en dehors d'une utilisation professionnelle en entreprise.",
      practiceTechnologies: ["C#", ".NET"],
      note:
        "Les technologies présentées reflètent des contextes d'utilisation différents : expérience en entreprise, formation et pratique personnelle.",
    },
    en: {
      eyebrow: "TECHNICAL SKILLS",
      title: "Skills built around real-world projects",
      introduction:
        "Experience focused on business applications, industrial systems and software integration.",
      professionalLabel: "Professional experience",
      practiceLabel: "Practice and further development",
      categories: [
        {
          title: "Business applications & databases",
          description:
            "Development, maintenance and modernization of business applications.",
          technologies: [
            "WinDev",
            "WinDev Mobile",
            "Delphi",
            "SQL Server",
            "Oracle",
            "HyperFileSQL",
            "PowerBuilder",
          ],
        },
        {
          title: "Industrial IT & integration",
          description:
            "Applications connected to industrial environments, data exchange and traceability.",
          technologies: [
            "WMS",
            "Industrial traceability",
            "Machine interfaces",
            "PLCs",
            "Modbus",
            "TCP/IP",
            "REST APIs",
            "Linux / C",
          ],
        },
        {
          title: "Web development & backend",
          description:
            "Web interfaces, application services and database integration.",
          technologies: [
            "Next.js",
            "Python",
            "PHP",
            "JavaScript",
            "HTML",
            "CSS",
            "Bootstrap",
          ],
        },
      ],
      practiceTitle: "Technologies developed through practice and training",
      practiceDescription:
        "Technologies explored outside professional company use.",
      practiceTechnologies: ["C#", ".NET"],
      note:
        "The technologies shown reflect different contexts of use: professional experience, training and personal practice.",
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  return (
    <section id="skills" className="bg-slate-50 px-6 py-24 text-slate-900">
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

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {text.categories.map((category) => (
            <article
              key={category.title}
              className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-cyan-500" />

              <h3 className="text-xl font-bold">
                {category.title}
              </h3>

              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">
                {category.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-cyan-200 bg-cyan-50 p-7">
          <h3 className="text-lg font-bold text-slate-900">
            {text.practiceTitle}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {text.practiceDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {text.practiceTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-md border border-cyan-200 bg-white px-4 py-2 text-sm font-semibold text-cyan-800"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          {text.note}
        </p>
      </div>
    </section>
  );
}
