
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";


type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!["fr", "en"].includes(locale)) {
    return null;
  }

  return (
    <main>
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <Experience locale={locale} />
      <Projects locale={locale} />
      <Services locale={locale} />
      <Contact locale={locale} />
    </main>
  );
}
