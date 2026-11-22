"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { MenuIcon, BagIcon, MapPinIcon } from "@/components/ui/Icons";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-shades-cream/95 backdrop-blur-md border-b border-shades-beige/60">
        <Container className="flex items-center justify-between h-16 lg:h-20">
          {/* Left section: Mobile/tablet trigger & Desktop Navigation */}
          <div className="flex items-center space-x-6 flex-1">
            <IconButton
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden -ml-2"
              aria-expanded={isMobileNavOpen}
            >
              <MenuIcon className="w-5 h-5" />
            </IconButton>

            <nav aria-label="Desktop primary navigation" className="hidden lg:flex items-center space-x-6">
              {MAIN_NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-sans uppercase tracking-[0.16em] text-shades-charcoal hover:text-shades-forest transition-colors py-1 relative font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Center: Brand Wordmark */}
          <div className="flex flex-col items-center justify-center flex-shrink-0 text-center px-4">
            <Link href="/" className="group inline-flex flex-col items-center justify-center min-h-[44px]">
              <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.26em] font-normal uppercase text-shades-charcoal group-hover:text-shades-forest transition-colors">
                SHADES
              </span>
              <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.32em] uppercase text-shades-stone -mt-0.5 sm:-mt-1">
                Coimbatore
              </span>
            </Link>
          </div>

          {/* Right: Utilities (Store, Bag) */}
          <div className="flex items-center justify-end space-x-1 sm:space-x-2 flex-1">
            <a
              href="#store-info"
              aria-label="Store Location in Coimbatore"
              title="Physical Store Location"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.14em] text-shades-charcoal hover:text-shades-forest px-2 py-1.5 min-h-[44px]"
            >
              <MapPinIcon className="w-3.5 h-3.5 text-shades-stone" />
              <span>Studio</span>
            </a>

            {/* Bag: placeholder indicator — no click action until cart is implemented */}
            <span
              aria-label="Shopping bag — cart not yet available"
              title="Shopping bag (coming soon)"
              className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.14em] text-shades-charcoal px-2.5 min-h-[44px] select-none"
            >
              <BagIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="text-[11px] text-shades-stone font-normal">(0)</span>
            </span>
          </div>
        </Container>
      </header>

      {/* Accessible native dialog mobile navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
