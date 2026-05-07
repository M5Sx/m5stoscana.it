import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "M5S Toscana - Movimento 5 Stelle Toscana",
    template: "%s | M5S Toscana",
  },
  description:
    "Pagina ufficiale del gruppo consiliare del Movimento 5 Stelle in Regione Toscana.",
  icons: {
    icon: "/Logo-M5S-2050-300x300.webp",
    apple: "/Logo-M5S-2050-300x300.webp",
  },
  openGraph: {
    siteName: "Movimento 5 Stelle Toscana",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
