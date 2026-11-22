import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { MapPinIcon } from "@/components/ui/Icons";

export default function Home() {
  return (
    <>
      {/* Editorial Overview Section */}
      <Section spacing="lg" className="border-b border-shades-beige/60">
        <Container size="prose" className="text-center space-y-6">
          <div className="flex items-center justify-center gap-2.5">
            <Badge variant="outline">Milestone P1.2</Badge>
            <Badge variant="accent">Design System &amp; Shell</Badge>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-shades-charcoal font-normal tracking-[0.06em] leading-[1.15]">
            Curated Menswear for Coimbatore
          </h1>

          <p className="font-sans text-sm sm:text-base text-shades-stone max-w-xl mx-auto leading-relaxed">
            A cinematic editorial fashion storefront designed with deliberate restraint, warm neutral tones, and responsive architecture.
          </p>

          <p className="font-sans text-xs text-shades-stone/70 max-w-md mx-auto italic">
            Collections and campaign pages are under development and will appear in a future milestone.
          </p>
        </Container>
      </Section>

      {/* Design System Foundations Section */}
      <Section spacing="md" className="bg-shades-white/70 border-b border-shades-beige/60">
        <Container size="default">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <Badge variant="neutral">Tokens &amp; Architecture</Badge>
            <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.08em] text-shades-charcoal font-normal">
              Design System Palette
            </h2>
            <p className="font-sans text-xs sm:text-sm text-shades-stone">
              Provisional color tokens pending client brand approval. Engineered for WCAG AA/AAA contrast.
            </p>
          </div>

          {/* Color token swatches */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-shades-cream border border-shades-beige space-y-2">
              <div className="w-full h-12 bg-shades-cream border border-shades-beige/80" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Cream</p>
                <p className="font-mono text-[11px] text-shades-stone">#FBF9F5</p>
                <p className="font-sans text-[10px] text-shades-stone pt-1">Canvas / Background</p>
              </div>
            </div>

            <div className="p-4 bg-shades-cream border border-shades-beige space-y-2">
              <div className="w-full h-12 bg-shades-charcoal" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Charcoal</p>
                <p className="font-mono text-[11px] text-shades-stone">#141413</p>
                <p className="font-sans text-[10px] text-shades-stone pt-1">Primary Text (17.53:1)</p>
              </div>
            </div>

            <div className="p-4 bg-shades-cream border border-shades-beige space-y-2">
              <div className="w-full h-12 bg-shades-forest" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Forest</p>
                <p className="font-mono text-[11px] text-shades-stone">#1B3322</p>
                <p className="font-sans text-[10px] text-shades-stone pt-1">Brand Accent (12.94:1)</p>
              </div>
            </div>

            <div className="p-4 bg-shades-cream border border-shades-beige space-y-2">
              <div className="w-full h-12 bg-shades-beige" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Warm Beige</p>
                <p className="font-mono text-[11px] text-shades-stone">#E8E2D8</p>
                <p className="font-sans text-[10px] text-shades-stone pt-1">Borders &amp; Dividers only</p>
              </div>
            </div>

            <div className="p-4 bg-shades-cream border border-shades-beige space-y-2">
              <div className="w-full h-12 bg-shades-stone" />
              <div className="space-y-0.5">
                <p className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-shades-charcoal">Stone</p>
                <p className="font-mono text-[11px] text-shades-stone">#5A5854</p>
                <p className="font-sans text-[10px] text-shades-stone pt-1">Muted Labels (6.75:1)</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Physical Store Experience Card */}
      <Section spacing="md">
        <Container size="default">
          <div className="border border-shades-beige p-8 sm:p-12 lg:p-16 bg-shades-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.16em] text-shades-forest font-medium">
                <MapPinIcon className="w-4 h-4" />
                <span>Physical Studio</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-shades-charcoal font-normal tracking-[0.06em]">
                Visit Shades in Coimbatore
              </h2>
              <p className="font-sans text-xs sm:text-sm text-shades-stone leading-relaxed">
                Connect your digital exploration with our physical boutique experience. Address and confirmed opening hours will appear once client verification is complete.
              </p>
            </div>

            {/* Direction link will be replaced with verified address/map when client details are confirmed */}
            <a
              href="#store-info"
              aria-label="Jump to store information"
              className="flex-shrink-0 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.16em] text-shades-forest hover:text-shades-charcoal transition-colors min-h-[44px] px-1"
            >
              Store Information ↓
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
