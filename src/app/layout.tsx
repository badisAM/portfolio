import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk.ttf",
  variable: "--font-display",
  weight: "400 700",
});

const plexSans = localFont({
  src: "../fonts/IBMPlexSans.ttf",
  variable: "--font-body",
  weight: "400 700",
});

const mono = localFont({
  src: "../fonts/JetBrainsMono.ttf",
  variable: "--font-mono",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Ammar Bedis — Data Science & AI Engineering",
  description:
    "Étudiant ingénieur en Data Science & AI — développement full-stack, IA agentique, MLOps et intégration de données. Ouvert à un stage PFE, janvier 2027.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${plexSans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-bg text-text font-body antialiased">
        <Nav />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
