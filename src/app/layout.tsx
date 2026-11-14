
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rachid-abbou-portfolio.pages.dev"),

  title: {
    default: "Rachid Abbou | Développeur Full Stack",
    template: "%s | Rachid Abbou",
  },

  description:
    "Portfolio de Rachid Abbou, développeur Full Stack spécialisé dans les applications métier, les logiciels industriels et l'intégration de systèmes.",

  applicationName: "Portfolio Rachid Abbou",

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
