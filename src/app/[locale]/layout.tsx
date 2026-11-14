
import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";
import Header from "@/components/layout/Header";

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "fr") {
    return {
      title: "Développeur Full Stack | Applications métier et industrielles",
      description:
        "Découvrez le portfolio de Rachid Abbou, développeur Full Stack : applications métier, logiciels industriels, automatisation et intégration d'API.",
      keywords: [
        "développeur Full Stack",
        "développeur informatique",
        "applications métier",
        "développement logiciel industriel",
        "automatisation industrielle",
        "WinDev",
        "Delphi",
        "Python",
        "React",
        "SQL",
        "Modbus",
        "API REST",
      ],
      alternates: {
        canonical: "/fr",
        languages: {
          fr: "/fr",
          en: "/en",
        },
      },
      openGraph: {
        title: "Rachid Abbou | Développeur Full Stack",
        description:
          "Applications métier, logiciels industriels, automatisation et intégration de systèmes.",
        type: "website",
        locale: "fr_FR",
        alternateLocale: ["en_US"],
        siteName: "Portfolio Rachid Abbou",
        images: [
          {
            url: "/og-image.png",
            //width: 1672,
            //height: 941,
            alt: "Rachid Abbou - Développeur Full Stack",
          },
        ],
      },
    };
  }

  return {
    title: "Full Stack Developer | Business and Industrial Applications",
    description:
      "Explore the portfolio of Rachid Abbou, Full Stack Developer: business applications, industrial software, automation and API integration.",
    keywords: [
      "Full Stack Developer",
      "Software Developer",
      "Business Applications",
      "Industrial Software",
      "Industrial Automation",
      "WinDev",
      "Delphi",
      "Python",
      "React",
      "SQL",
      "Modbus",
      "REST API",
    ],
    alternates: {
      canonical: "/en",
      languages: {
        fr: "/fr",
        en: "/en",
      },
    },
    openGraph: {
      title: "Rachid Abbou | Full Stack Developer",
      description:
        "Business applications, industrial software, automation and system integration.",
      type: "website",
      locale: "en_US",
      alternateLocale: ["fr_FR"],
      siteName: "Rachid Abbou Portfolio",
      images: [
        {
          url: "/og-image.png",
          alt: "Rachid Abbou - Full Stack Developer",
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!["fr", "en"].includes(locale)) {
    return null;
  }

  return (
    <div lang={locale} className="min-h-screen">
      <JsonLd locale={locale} />
      <Header locale={locale} />
      {children}
    </div>
  );
}
