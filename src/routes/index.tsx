import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/config/site";

const SITE_URL = "https://vaina-zen-showcase.lovable.app";
const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/b5ef261e-b653-4d44-a26a-4ffeaf79a7d3";
const TITLE = "Vaina Pro Max · Fundas premium para iPhone en Chía";
const DESCRIPTION = "Catálogo premium de fundas para iPhone 11, 12, 13 y 14. Diseños únicos, colecciones exclusivas y compra directa por WhatsApp desde Chía.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: siteConfig.name,
              url: SITE_URL,
              logo: SITE_URL + "/favicon.png",
              sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl].filter(
                (u) => u && u !== "#",
              ),
            },
            {
              "@type": "LocalBusiness",
              name: siteConfig.name,
              image: SITE_URL + "/favicon.png",
              url: SITE_URL,
              telephone: "+57 311 847 2239",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Chía",
                addressRegion: "Cundinamarca",
                addressCountry: "CO",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              areaServed: "CO",
            },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-[color:var(--color-ink)] text-white">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <About />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
