import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { About } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaina Pro Max · Fundas premium para iPhone en Chía" },
      {
        name: "description",
        content:
          "Catálogo premium de fundas para iPhone 11, 12, 13 y 14. Diseños únicos, colecciones exclusivas y compra directa por WhatsApp desde Chía.",
      },
      { property: "og:title", content: "Vaina Pro Max · Fundas premium para iPhone en Chía" },
      {
        property: "og:description",
        content:
          "Catálogo premium de fundas para iPhone 11, 12, 13 y 14. Diseños únicos, colecciones exclusivas y compra directa por WhatsApp desde Chía.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
