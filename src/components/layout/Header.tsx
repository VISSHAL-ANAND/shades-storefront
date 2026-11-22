"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MAIN_NAV_ITEMS } from "@/lib/navigation";
import { Container } from "@/components/ui/Container";
import { IconButton } from "@/components/ui/IconButton";
import { MenuIcon, BagIcon } from "@/components/ui/Icons";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-shades-beige/60 bg-shades-cream/95 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between lg:h-20">
          <div className="flex flex-1 items-center">
            <IconButton
              onClick={() => setIsMobileNavOpen(true)}
              aria-label="Open navigation menu"
              className=" -ml-2 lg:hidden"
              aria-expanded={isMobileNavOpen}
            >
              <MenuIcon className="h-5 w-5" />
            </IconButton>

            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-6 lg:flex"
            >
              {MAIN_NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative inline-flex min-h-[44px] items-center py-1 text-xs font-medium uppercase tracking-[0.16em] text-shades-charcoal transition-colors hover:text-shades-forest"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex shrink-0 flex-col items-center justify-center px-4 text-center">
            <Link
              href="/"
              className="group inline-flex min-h-[44px] flex-col items-center justify-center"
            >
              <span className="font-serif text-xl font-normal uppercase tracking-[0.26em] text-shades-charcoal transition-colors group-hover:text-shades-forest sm:text-2xl lg:text-3xl">
                SHADES
              </span>
              <span className="-mt-0.5 font-sans text-[8px] uppercase tracking-[0.32em] text-shades-stone sm:-mt-1 sm:text-[9px]">
                Coimbatore
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-1 sm:space-x-2">
            <span
              aria-label="Shopping bag — cart not yet available"
              title="Shopping bag (coming soon)"
              className="inline-flex min-h-[44px] select-none items-center gap-1.5 px-2.5 text-xs uppercase tracking-[0.14em] text-shades-charcoal"
            >
              <BagIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="text-[11px] font-normal text-shades-stone">(0)</span>
            </span>
          </div>
        </Container>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
