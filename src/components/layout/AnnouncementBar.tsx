import React from "react";
import { Container } from "@/components/ui/Container";

export function AnnouncementBar() {
  return (
    <aside
      aria-label="Store announcement"
      className="bg-shades-charcoal text-shades-cream text-[11px] font-sans tracking-[0.18em] uppercase py-2 border-b border-shades-charcoal/20"
    >
      <Container className="flex items-center justify-center text-center">
        <p className="truncate">
          Shades Coimbatore · Curated Menswear · Coimbatore, Tamil Nadu
        </p>
      </Container>
    </aside>
  );
}
