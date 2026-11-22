import React from "react";
import { Container } from "@/components/ui/Container";
import { FOOTER_NAV_SECTIONS } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="bg-shades-charcoal text-shades-cream border-t border-shades-charcoal/80">
      <Container className="pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Ethos & Physical Store Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.24em] uppercase text-shades-cream">
                SHADES
              </span>
              <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/50 -mt-0.5">
                Coimbatore
              </span>
            </div>
            <p className="text-sm font-sans text-white/70 max-w-sm leading-relaxed">
              Curated menswear and lifestyle storefront blending online discovery with our physical retail studio in Coimbatore.
            </p>
            <div id="store-info" className="pt-2 space-y-1.5 text-xs font-sans text-white/60">
              <p className="uppercase tracking-[0.12em] text-white/40 font-medium">Physical Studio</p>
              <p className="text-white/80">[Store address pending client details]</p>
              <p>Coimbatore, Tamil Nadu</p>
              <p className="pt-1">[Operating hours pending client details]</p>
              <p className="text-white/50">[Concierge contact pending client agreement]</p>
            </div>
          </div>

          {/* Navigation link sections */}
          {FOOTER_NAV_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-xs font-sans uppercase tracking-[0.18em] text-white/50 font-medium">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs font-sans text-white/80 hover:text-white transition-colors inline-flex items-center min-h-[44px]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-sans text-white/50 gap-4 text-center sm:text-left">
          <p>© 2026 Shades Coimbatore. All rights reserved.</p>
          <p className="text-white/40 text-[10px] tracking-wide">
            Editorial fashion direction · Independent Shades brand identity
          </p>
        </div>
      </Container>
    </footer>
  );
}
