import type {Metadata} from "next";
import "./globals.css";
import {AnnouncementBar} from "@/components/layout/AnnouncementBar";
import {Header} from "@/components/layout/Header";
import {Footer} from "@/components/layout/Footer";
import {CartProvider} from "@/context/CartContext";
export const metadata:Metadata={title:{default:"Shades Coimbatore — Menswear & Lifestyle",template:"%s | Shades Coimbatore"},description:"Explore the Shades Coimbatore menswear and lifestyle storefront preview."};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className="h-full antialiased scroll-smooth"><body className="flex min-h-full flex-col bg-shades-cream font-sans text-shades-charcoal"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-shades-charcoal focus:px-4 focus:py-3 focus:text-shades-cream">Skip to main content</a><CartProvider><AnnouncementBar/><Header/><main id="main-content" className="flex-1">{children}</main><Footer/></CartProvider></body></html>;}
