import React from "react";
import { Container } from "@/components/ui/Container";
import { FOOTER_NAV_SECTIONS } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-shades-charcoal/80 bg-shades-charcoal text-shades-cream">
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-4 lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-serif text-2xl uppercase tracking-[0.24em] text-shades-cream">
                SHADES
              </span>
              <span className="-mt-0.5 font-sans text-[9px] uppercase tracking-[0.3em] text-white/60">
                Coimbatore
              </span>
            </div>

            <p className="max-w-sm font-sans text-sm leading-relaxed text-white/70">
              Curated menswear and lifestyle storefront blending online discovery with our physical retail studio in Coimbatore.
            </p>

            <div id="store-info" className="space-y-1.5 pt-2 font-sans text-xs text-white/60">
              <p className="font-medium uppercase tracking-[0.12em] text-white/60">
                Physical Studio
              </p>
              <p className="text-white/80">[Store address pending client details]</p>
              <p>Coimbatore, Tamil Nadu</p>
              <p className="pt-1">[Operating hours pending client details]</p>
              <p>[Concierge contact pending client agreement]</p>
            </div>
          </div>

          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/60">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex min-h-[44px] items-center text-xs text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shades-cream"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center font-sans text-[11px] text-white/60 sm:flex-row sm:text-left">
          <p>© 2026 Shades Coimbatore. All rights reserved.</p>
          <p className="text-[10px] tracking-wide text-white/60">
            Editorial fashion direction · Independent Shades brand identity
          </p>
        </div>
      </Container>
    </footer>
  );
}
