export type ProductCategory =
  | "Tridimensional"
  | "Marmórea"
  | "Jardín de Ensueño"
  | "Prisma"
  | "Gala"
  | "Inspiracional"
  | "Platino"
  | "Titán"
  | "Encanto"
  | "Visión";

export type ProductBadge = "Nuevo" | "Destacado" | "Más vendido";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  models: string[];
  gradient: string;
  image?: string;
  featured?: boolean;
  badge?: ProductBadge;
  features?: string[];
}

/**
 * Catálogo Vaina Pro Max.
 * Los productos pueden editarse libremente desde este archivo.
 * `gradient` define la estética visual de la tarjeta (Tailwind arbitrary linear-gradient).
 */
export const products: Product[] = [
  {
    id: "dimension-conejo",
    name: "Dimensión Conejo",
    description:
      "Acabado en relieve con figura 3D que protege tu celular con un toque tierno y único.",
    price: 26000,
    category: "Tridimensional",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/848eec52-ddde-4562-8cd4-8db6dce1b5f2/dimension-conejo.jpg",
    gradient: "linear-gradient(135deg,#f5e6d3,#c9a27a)",
    featured: true,
    badge: "Destacado",
    features: ["Figura 3D en relieve", "Silicona premium", "Bordes reforzados"],
  },
  {
    id: "dimension-dinamica",
    name: "Dimensión Dinámica",
    description: "Minimalista, resistente y perfecto para marcar tu propio rumbo.",
    price: 26000,
    category: "Tridimensional",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/aff72511-951b-4cfc-99d3-bfceea594b8b/dimension-dinamica.jpg",
    gradient: "linear-gradient(135deg,#2b2b2b,#5a5a5a)",
    features: ["Diseño geométrico", "Anti-golpes", "Textura premium"],
  },
  {
    id: "dimension-feliz",
    name: "Dimensión Feliz",
    description: "Equilibrio perfecto entre estilo moderno, protección y detalles únicos.",
    price: 28000,
    category: "Tridimensional",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/3c8befc2-fbfe-4dc5-9194-da4de4e283b0/dimension-feliz.jpg",
    gradient: "linear-gradient(135deg,#ffb3c1,#ffd166,#8ecae6)",
    badge: "Nuevo",
  },
  {
    id: "dimension-orejitas",
    name: "Dimensión Orejitas",
    description: "Transparente ondulado con figuras 3D de conejitos y detalles coreanos.",
    price: 28000,
    category: "Tridimensional",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/50db2cb2-a0b6-423e-bccc-75e404cd90fb/dimension-orejitas.jpg",
    gradient: "linear-gradient(135deg,#fce8f0,#f4a6c0)",
  },
  {
    id: "dimension-floral",
    name: "Dimensión Floral",
    description: "Peluche ultra suave color lavanda con flores tejidas en crochet en alto relieve.",
    price: 35000,
    category: "Tridimensional",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/0d88ed27-427c-42f1-9e6b-f182cb9fa2a6/dimension-floral.jpg",
    gradient: "linear-gradient(135deg,#c8a2d8,#e8d5f2)",
    badge: "Más vendido",
    featured: true,
  },
  {
    id: "aurora-cosmica",
    name: "Aurora Cósmica",
    description: "Diseño marmolado en tonos pastel con acabado brillante.",
    price: 20000,
    category: "Marmórea",
    models: ["iPhone 11"],
    image: "/__l5e/assets-v1/d9ec49fd-655b-4f28-aa8d-483390d9a5e2/aurora-cosmica.jpg",
    gradient: "linear-gradient(135deg,#b8c7e6,#e6c7d8,#f2d9b1)",
  },
  {
    id: "nebulosa-real",
    name: "Nebulosa Real",
    description:
      "Marmolado en violeta y azul con detalles dorados: sofisticado y con un acabado que roba miradas.",
    price: 20000,
    category: "Marmórea",
    models: ["iPhone 11"],
    image: "/__l5e/assets-v1/e9242972-48d8-43f4-a676-fb2f6749dea3/nebulosa-real.jpg",
    gradient: "linear-gradient(135deg,#2a1a5e,#6a3ea1,#c9a227)",
    featured: true,
  },
  {
    id: "vortice-premium",
    name: "Vórtice Premium",
    description: "Elegante, minimalista y con un estilo sofisticado.",
    price: 18000,
    category: "Marmórea",
    models: ["iPhone 11"],
    image: "/__l5e/assets-v1/d1acba2c-a226-4a58-b8b1-129e703a6596/vortice-premium.jpg",
    gradient: "linear-gradient(135deg,#1a1a1a,#4a4a4a,#c9a227)",
  },
  {
    id: "esencia-traslucida",
    name: "Esencia Traslúcida",
    description:
      "Diseño floral delicado con aro magnético integrado, perfecto para un estilo femenino y moderno.",
    price: 18000,
    category: "Jardín de Ensueño",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/7e0723d3-8306-4310-b980-badcc9b6225c/esencia-traslucida.jpg",
    gradient: "linear-gradient(135deg,#f8e7ee,#e8b7d0)",
  },
  {
    id: "tulipan-nocturno",
    name: "Tulipán Nocturno",
    description: "Combina estilo elegante, comodidad y seguridad en un solo diseño.",
    price: 23000,
    category: "Jardín de Ensueño",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/f9bf4a47-bd65-4aa5-9aaf-082234b4de9a/tulipan-nocturno.jpg",
    gradient: "linear-gradient(135deg,#0a0a0a,#3a2a4a,#8a4a6a)",
  },
  {
    id: "tropico-floral",
    name: "Trópico Floral",
    description: "Flores y acabados ideales para un toque alegre, llamativo y único.",
    price: 20000,
    category: "Jardín de Ensueño",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/540de931-3b0a-4862-a73b-45e604ab2ac2/tropico-floral.jpg",
    gradient: "linear-gradient(135deg,#ff8fa3,#ffd166,#8ecae6)",
  },
  {
    id: "bolsillo-floral",
    name: "Bolsillo Floral",
    description: "Frescura primaveral y funcionalidad en tonos pastel para una elegancia cotidiana.",
    price: 20000,
    category: "Jardín de Ensueño",
    models: ["iPhone 12"],
    image: "/__l5e/assets-v1/0c41d40f-d2ee-41ca-aff0-04fbeb0c0f44/bolsillo-floral.jpg",
    gradient: "linear-gradient(135deg,#fef3c7,#f9c6c6,#c7e8f9)",
  },
  {
    id: "dulces-petalos",
    name: "Dulces Pétalos",
    description:
      "Arte acuarela en lavanda y oro con la frase 'Mereces lo que sueñas' y colgante de perlas.",
    price: 26000,
    category: "Jardín de Ensueño",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/1bb88582-8488-471d-bceb-e41a6a553ea7/dulces-petalos.jpg",
    gradient: "linear-gradient(135deg,#e2d1f9,#f5deb3,#c9a227)",
    badge: "Nuevo",
  },
  {
    id: "nexo-sombrio",
    name: "Nexo Sombrío",
    description: "Diseño moderno con degradado azul-morado y compatibilidad magnética.",
    price: 22000,
    category: "Prisma",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/9f164ee4-ee08-4057-9350-451e79733518/nexo-sombrio.jpg",
    gradient: "linear-gradient(135deg,#1e3a8a,#6b21a8)",
  },
  {
    id: "fulgor-del-alba",
    name: "Fulgor del Alba",
    description: "Vibrante estilo juvenil con degradado rosa pastel a fucsia y soporte magnético.",
    price: 22000,
    category: "Prisma",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/532e5138-911c-4b65-a68c-36b81fa69aab/fulgor-del-alba.jpg",
    gradient: "linear-gradient(135deg,#fbc2eb,#e91e63)",
  },
  {
    id: "destello-estelar",
    name: "Destello Estelar",
    description: "Transparente con estrellas y degradado galáctico. El brillo de una noche estrellada.",
    price: 21000,
    category: "Prisma",
    models: ["iPhone 12"],
    image: "/__l5e/assets-v1/15b14a75-3f06-4ba7-8306-dd0fe7d5067a/destello-estelar.jpg",
    gradient: "linear-gradient(135deg,#0f0c29,#302b63,#24243e)",
  },
  {
    id: "opalo-oscuro",
    name: "Ópalo Oscuro",
    description: "Protector en negro mate con anillo magnético integrado para un estilo sobrio.",
    price: 22000,
    category: "Gala",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/dac4ea2a-e497-4a20-89fc-52edbabd8e8c/opalo-oscuro.jpg",
    gradient: "linear-gradient(135deg,#0a0a0a,#2a2a2a)",
    featured: true,
  },
  {
    id: "seda-rosa",
    name: "Seda Rosa",
    description: "Acabado premium en oro rosa metalizado con anillo de carga magnética a juego.",
    price: 22000,
    category: "Gala",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/3c4f27ba-1598-4f27-95de-686d704623ef/seda-rosa.jpg",
    gradient: "linear-gradient(135deg,#f7cac9,#d4a5a5,#c9a227)",
    badge: "Más vendido",
  },
  {
    id: "sueno-cuarzo",
    name: "Sueño de Cuarzo",
    description:
      "Trazos de pincel cruzados en paleta pastel: rosa viejo, lila y azul grisáceo.",
    price: 23000,
    category: "Gala",
    models: ["iPhone 12", "iPhone 13", "iPhone 14"],
    image: "/__l5e/assets-v1/cca307fd-4bb0-4849-acb6-5ba3dc60c028/sueno-cuarzo.jpg",
    gradient: "linear-gradient(135deg,#d4a5b9,#b8a5c9,#a5b8c9)",
  },
  {
    id: "resplandor-coral",
    name: "Resplandor Coral",
    description: "Remolinos fluidos en tonos café profundo, moca y toques de cobre.",
    price: 27000,
    category: "Gala",
    models: ["iPhone 13", "iPhone 14"],
    image: "/__l5e/assets-v1/27774899-f9e3-49cc-ab16-6da9d9e81097/resplandor-coral.jpg",
    gradient: "linear-gradient(135deg,#3d2817,#8b5a3c,#c9a227)",
  },
  {
    id: "marea-cristal",
    name: "Marea de Cristal",
    description: "Moderno y futurista. Base lavanda con relieve visual de ondas 3D.",
    price: 23000,
    category: "Gala",
    models: ["iPhone 13", "iPhone 14"],
    image: "/__l5e/assets-v1/edb9e329-76fe-443c-a314-43f62bbc3995/marea-cristal.jpg",
    gradient: "linear-gradient(135deg,#b8a5d9,#8a7ab8)",
  },
  {
    id: "reflejo-divino",
    name: "Reflejo Divino",
    description: "Diseño minimalista y elegante con un mensaje de fe inspirador.",
    price: 20000,
    category: "Inspiracional",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/6885055c-0ecf-46fd-8187-8a2a6eb0db30/reflejo-divino.jpg",
    gradient: "linear-gradient(135deg,#fafafa,#e0e0e0)",
  },
  {
    id: "gracia-eterna",
    name: "Gracia Eterna",
    description: "Fusión entre tu esencia y la protección inigualable del cuero grabado.",
    price: 28000,
    category: "Inspiracional",
    models: ["iPhone 12"],
    image: "/__l5e/assets-v1/efdbe41c-8596-4fcf-bc78-8e65c286f2e9/gracia-eterna.jpg",
    gradient: "linear-gradient(135deg,#2a1810,#5c3a20,#8b5a3c)",
  },
  {
    id: "promesa-divina",
    name: "Promesa Divina",
    description: "Una conexión profunda que perdura. Fe y protección inigualable.",
    price: 18000,
    category: "Inspiracional",
    models: ["iPhone 13"],
    image: "/__l5e/assets-v1/875a1f91-7528-495f-8bf7-8866976505cf/promesa-divina.jpg",
    gradient: "linear-gradient(135deg,#f5f5f0,#d4c9a8)",
  },
  {
    id: "realidad-sonada",
    name: "Realidad Soñada",
    description: "'Mereces lo que sueñas'. Conexión profunda entre tu esencia y la protección.",
    price: 23000,
    category: "Inspiracional",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/27af75dd-803f-48db-8ce7-2a5d85092cca/realidad-sonada.jpg",
    gradient: "linear-gradient(135deg,#fce4ec,#f8bbd0,#c9a227)",
  },
  {
    id: "circuito-elite",
    name: "Circuito Élite",
    description: "Diseño dinámico inspirado en la máxima categoría del automovilismo.",
    price: 22000,
    category: "Platino",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/99c37cab-2fca-45af-bb62-17c2dbfd99e5/circuito-elite.jpg",
    gradient: "linear-gradient(135deg,#0a0a0a,#c0392b,#c9a227)",
  },
  {
    id: "corazon-merengue",
    name: "Corazón Merengue",
    description: "El escudo del Rey de Europa en relieve para llevar tu pasión madridista.",
    price: 27000,
    category: "Platino",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/06649280-400b-488f-99a6-efa3ef0b1b80/corazon-merengue.jpg",
    gradient: "linear-gradient(135deg,#ffffff,#e0e0e0,#c9a227)",
  },
  {
    id: "dorsal-real",
    name: "Dorsal Real",
    description: "Homenaje a la leyenda del número 7 para los verdaderos fanáticos merengues.",
    price: 20000,
    category: "Platino",
    models: ["iPhone 11", "iPhone 12"],
    image: "/__l5e/assets-v1/83d2a7c6-cedf-407d-ade7-d09f0f6e049e/dorsal-real.jpg",
    gradient: "linear-gradient(135deg,#1a1a1a,#3a3a3a)",
  },
  {
    id: "fortaleza",
    name: "Fortaleza",
    description: "Forro beige con MagSafe, soporte metálico en cámara y correa trenzada rosa.",
    price: 30000,
    category: "Titán",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/a0144e88-33ef-439e-ae43-ece902dbf8c9/fortaleza.jpg",
    gradient: "linear-gradient(135deg,#e8dcc4,#c9b18a)",
    badge: "Nuevo",
    featured: true,
    features: ["MagSafe integrado", "Soporte metálico en cámara", "Correa trenzada"],
  },
  {
    id: "encanto-lazos",
    name: "Encanto de Lazos",
    description:
      "Diseño de lazos encantadores, transparencias deslumbrantes y espejo integrado.",
    price: 25000,
    category: "Encanto",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/698702b5-2d06-4592-9020-d6030fea1068/encanto-lazos.jpg",
    gradient: "linear-gradient(135deg,#f9c5d5,#f48ba5)",
  },
  {
    id: "encanto-minimal",
    name: "Encanto Minimal",
    description:
      "Detalles minimalistas y borde metalizado que eleva la elegancia de tu dispositivo.",
    price: 22000,
    category: "Encanto",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/167af123-9f19-4908-86df-546756bffb29/encanto-minimal.jpg",
    gradient: "linear-gradient(135deg,#ffffff,#f0f0f0,#c9a227)",
  },
  {
    id: "claridad",
    name: "Claridad",
    description:
      "Fusiona protección y estilo deportivo con borde rugoso y acentos naranja eléctrico.",
    price: 25000,
    category: "Visión",
    models: ["iPhone 14"],
    image: "/__l5e/assets-v1/47f7058a-78b3-44bd-be38-5cd64fc53ff3/claridad.jpg",
    gradient: "linear-gradient(135deg,#2a2a2a,#ff6b1a)",
  },
];

export const categories: ProductCategory[] = [
  "Tridimensional",
  "Marmórea",
  "Jardín de Ensueño",
  "Prisma",
  "Gala",
  "Inspiracional",
  "Platino",
  "Titán",
  "Encanto",
  "Visión",
];

export const models = ["iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14"] as const;

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(value);
}
