
type JsonLdProps = {
  locale: string;
};

export default function JsonLd({ locale }: JsonLdProps) {
  const siteUrl = "https://rachid-abbou-portfolio.pages.dev";

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Rachid Abbou",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    jobTitle:
      locale === "fr" ? "Développeur Full Stack" : "Full Stack Developer",
    description:
      locale === "fr"
        ? "Développeur Full Stack spécialisé dans les applications métier et les logiciels industriels."
        : "Full Stack Developer specialized in business applications and industrial software.",
    email: "mailto:rachid.abbou@gmail.com",
    knowsAbout: [
      "Full Stack Development",
      "Industrial Software",
      "Business Applications",
      "WinDev",
      "Delphi",
      "Python",
      "React",
      "SQL",
      "REST API",
      "Industrial Automation",
      "Modbus",
    ],
    sameAs: ["https://www.linkedin.com/in/rachid-abbou"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/${locale}`,
    name: "Rachid Abbou - Portfolio",
    description:
      locale === "fr"
        ? "Portfolio professionnel de Rachid Abbou."
        : "Professional portfolio of Rachid Abbou.",
    inLanguage: locale === "fr" ? "fr-FR" : "en-US",
    author: {
      "@id": `${siteUrl}/#person`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
