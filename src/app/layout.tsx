import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shades Coimbatore — Men's Fashion & Lifestyle Storefront",
  description: "Curated menswear and lifestyle storefront for Shades Coimbatore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-shades-cream text-shades-charcoal font-sans">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-shades-charcoal focus:text-shades-cream focus:text-xs focus:uppercase focus:tracking-[0.16em] focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-shades-cream"
        >
          Skip to main content
        </a>

        <AnnouncementBar />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
