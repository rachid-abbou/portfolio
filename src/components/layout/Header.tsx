
import Link from "next/link";
import NextImage from "next/image";

type HeaderProps = {
  locale: string;
};

export default function Header({ locale }: HeaderProps) {
  const isFrench = locale === "fr";
  const otherLocale = isFrench ? "en" : "fr";

  const navigation = isFrench
    ? [
        { label: "Profil", id: "about" },
        { label: "Compétences", id: "skills" },
        { label: "Expériences", id: "experience" },
        { label: "Projets", id: "projects" },
        { label: "Services", id: "services" },
        { label: "Contact", id: "contact" },
      ]
    : [
        { label: "About", id: "about" },
        { label: "Skills", id: "skills" },
        { label: "Experience", id: "experience" },
        { label: "Projects", id: "projects" },
        { label: "Services", id: "services" },
        { label: "Contact", id: "contact" },
      ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3"
          aria-label="Accueil"
        >
          {/* <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-950 text-lg font-bold text-cyan-400">
            RA
          </span> */}
          <NextImage src="/logo.png" alt="Logo Rachid Abbou" width={44}
            height={44} className="h-11 w-11 object-contain" priority unoptimized/>

          <span className="text-lg font-bold tracking-tight text-slate-900">
            Portfolio
          </span>
        </Link>

        <nav aria-label={isFrench ? "Navigation principale" : "Main navigation"}>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={`/${locale}#${item.id}`}
                  className="text-sm font-medium text-slate-600 transition hover:text-cyan-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={`/${otherLocale}`}
          className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
          aria-label={
            isFrench ? "Switch to English" : "Passer en français"
          }
        >
          {isFrench ? "EN" : "FR"}
        </Link>
      </div>
    </header>
  );
}
