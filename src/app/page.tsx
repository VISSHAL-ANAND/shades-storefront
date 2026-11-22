import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { MapPinIcon } from "@/components/ui/Icons";

export default function Home() {
  return (
    <>
      <Section spacing="lg" className="border-b border-shades-beige/60">
        <Container size="prose" className="space-y-6 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <Badge variant="outline">Milestone P1.2</Badge>
            <Badge variant="accent">Design System &amp; Shell</Badge>
          </div>

          <h1 className="font-serif text-3xl font-normal leading-[1.15] tracking-[0.06em] text-shades-charcoal sm:text-4xl md:text-5xl lg:text-6xl">
            Curated Menswear for Coimbatore
          </h1>

          <p className="mx-auto max-w-xl font-sans text-sm leading-relaxed text-shades-stone sm:text-base">
            A cinematic editorial fashion storefront designed with deliberate restraint, warm neutral tones, and responsive architecture.
          </p>

          <p className="mx-auto max-w-md font-sans text-xs italic text-shades-stone">
            Collections and campaign pages are under development and will appear in a future milestone.
          </p>
        </Container>
      </Section>

      <Section spacing="md" className="border-b border-shades-beige/60 bg-shades-white/70">
        <Container size="default">
          <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
            <Badge variant="neutral">Tokens &amp; Architecture</Badge>
            <h2 className="font-serif text-2xl font-normal tracking-[0.08em] text-shades-charcoal sm:text-3xl">
              Design System Palette
            </h2>
            <p className="font-sans text-xs text-shades-stone sm:text-sm">
              Provisional color tokens pending client brand approval. Engineered for WCAG AA/AAA contrast.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            <div className="space-y-2 border border-shades-beige bg-shades-cream p-4">
              <div className="h-12 w-full border border-shades-beige/80 bg-shades-cream" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Cream</p>
                <p className="font-mono text-[11px] text-shades-stone">#FBF9F5</p>
                <p className="pt-1 font-sans text-[10px] text-shades-stone">Canvas / Background</p>
              </div>
            </div>

            <div className="space-y-2 border border-shades-beige bg-shades-cream p-4">
              <div className="h-12 w-full bg-shades-charcoal" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Charcoal</p>
                <p className="font-mono text-[11px] text-shades-stone">#141413</p>
                <p className="pt-1 font-sans text-[10px] text-shades-stone">Primary Text (17.53:1)</p>
              </div>
            </div>

            <div className="space-y-2 border border-shades-beige bg-shades-cream p-4">
              <div className="h-12 w-full bg-shades-forest" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Forest</p>
                <p className="font-mono text-[11px] text-shades-stone">#1B3322</p>
                <p className="pt-1 font-sans text-[10px] text-shades-stone">Brand Accent (12.94:1)</p>
              </div>
            </div>

            <div className="space-y-2 border border-shades-beige bg-shades-cream p-4">
              <div className="h-12 w-full bg-shades-beige" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Warm Beige</p>
                <p className="font-mono text-[11px] text-shades-stone">#E8E2D8</p>
                <p className="pt-1 font-sans text-[10px] text-shades-stone">Borders &amp; Dividers only</p>
              </div>
            </div>

            <div className="space-y-2 border border-shades-beige bg-shades-cream p-4">
              <div className="h-12 w-full bg-shades-stone" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Stone</p>
                <p className="font-mono text-[11px] text-shades-stone">#5A5854</p>
                <p className="pt-1 font-sans text-[10px] text-shades-stone">Muted Labels (6.75:1)</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container size="default">
          <div className="flex flex-col items-start justify-between gap-8 border border-shades-beige bg-shades-white p-8 sm:p-12 md:flex-row md:items-center lg:p-16">
            <div className="max-w-xl space-y-3">
              <div className="inline-flex items-center gap-1.5 font-sans text-xs font-medium uppercase tracking-[0.16em] text-shades-forest">
                <MapPinIcon className="h-4 w-4" />
                <span>Physical Studio</span>
              </div>
              <h2 className="font-serif text-2xl font-normal tracking-[0.06em] text-shades-charcoal sm:text-3xl">
                Visit Shades in Coimbatore
              </h2>
              <p className="font-sans text-xs leading-relaxed text-shades-stone sm:text-sm">
                Connect your digital exploration with our physical boutique experience. Address and confirmed opening hours will appear once client verification is complete.
              </p>
            </div>

            <a
              href="#store-info"
              aria-label="Jump to store information"
              className="inline-flex min-h-[44px] shrink-0 items-center gap-2 px-1 font-sans text-xs uppercase tracking-[0.16em] text-shades-forest transition-colors hover:text-shades-charcoal"
            >
              Store Information ↓
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
