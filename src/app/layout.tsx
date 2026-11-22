import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shades Storefront",
  description: "Shades Coimbatore cinematic fashion storefront",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
