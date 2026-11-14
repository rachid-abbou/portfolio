
type AboutProps = {
  locale: string;
};

export default function About({ locale }: AboutProps) {
  const isFrench = locale === "fr";

  const content = {
    fr: {
      eyebrow: "À PROPOS",
      title: "Du développement logiciel aux solutions industrielles",
      introduction:
        "Développeur informatique avec plus de 10 ans d'expérience, j'interviens dans la conception, le développement et l'évolution d'applications métier et industrielles.",
      paragraphs: [
        "Mon parcours m'a permis de travailler sur des applications de gestion, des systèmes de gestion d'entrepôt (WMS) et des solutions de traçabilité industrielle. J'ai notamment participé à la migration et à la modernisation d'applications existantes.",
        "Je m'intéresse particulièrement aux projets qui associent logiciel et environnement industriel : communication avec les équipements, échanges de données, intégration de systèmes et automatisation des processus.",
        "J'élargis également mes compétences aux technologies modernes du développement Web et aux langages comme C#/.NET et Python, afin de concevoir des solutions adaptées aux besoins actuels des entreprises.",
      ],
      highlights: [
        {
          value: "10+",
          label: "Années d'expérience en développement",
        },
        {
          value: "WMS",
          label: "Gestion d'entrepôt et logistique",
        },
        {
          value: "IT / OT",
          label: "Logiciels et environnements industriels",
        },
      ],
    },
    en: {
      eyebrow: "ABOUT",
      title: "From software development to industrial solutions",
      introduction:
        "Software developer with over 10 years of experience in designing, developing and maintaining business and industrial applications.",
      paragraphs: [
        "My professional background includes business applications, warehouse management systems (WMS) and industrial traceability solutions. I have also contributed to the migration and modernization of existing applications.",
        "I am particularly interested in projects connecting software with industrial environments: equipment communication, data exchange, system integration and process automation.",
        "I am also expanding my skills in modern web development technologies and languages such as C#/.NET and Python to build solutions that meet today's business needs.",
      ],
      highlights: [
        {
          value: "10+",
          label: "Years of software development experience",
        },
        {
          value: "WMS",
          label: "Warehouse and logistics management",
        },
        {
          value: "IT / OT",
          label: "Software and industrial environments",
        },
      ],
    },
  };

  const text = content[isFrench ? "fr" : "en"];

  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-cyan-600">
              {text.eyebrow}
            </p>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              {text.title}
            </h2>

            <p className="mt-8 text-lg font-medium leading-8 text-slate-700">
              {text.introduction}
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {text.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5">
            {text.highlights.map((highlight) => (
              <div
                key={highlight.value}
                className="rounded-xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-3xl font-bold text-cyan-600">
                  {highlight.value}
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {highlight.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
