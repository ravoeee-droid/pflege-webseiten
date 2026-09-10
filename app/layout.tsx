import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pflege-Webseiten.de | Webseiten & Marketing für Pflegeunternehmen",
  description:
    "Wir machen Pflegeunternehmen online attraktiver – mit hochwertigen Webseiten, besserer Sichtbarkeit bei Google und Werbung, die mehr passende Menschen erreicht.",
  metadataBase: new URL("https://pflege-webseiten.de"),
  openGraph: {
    title: "Pflege-Webseiten.de | Damit Ihre Pflege online genauso gut wirkt wie vor Ort",
    description:
      "Webseiten & Marketing speziell für Pflegeheime, Pflegedienste, Tagespflegen und weitere Pflegeunternehmen.",
    url: "https://pflege-webseiten.de",
    siteName: "Pflege-Webseiten.de",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
