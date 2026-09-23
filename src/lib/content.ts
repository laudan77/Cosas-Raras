export const WHATSAPP_NUMBER = "573044917469";
export const WHATSAPP_DISPLAY = "+57 304 491 7469";
export const EMAIL = "Lauradanielagalvis77@gmail.com";
export const PORTFOLIO_URL = "https://lauradanielgalvis.squarespace.com/";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const FIELDS = [
  { label: "Arquitectura", accent: "wine" },
  { label: "Interiorismo", accent: "olive" },
  { label: "Escenografía", accent: "blush" },
  { label: "Dirección de arte", accent: "wine" },
  { label: "Danza", accent: "olive" },
  { label: "Teatro", accent: "blush" },
] as const;

export const COLORWAYS = [
  { id: "vino", label: "Vino", hex: "#6E1E3B" },
  { id: "oliva", label: "Oliva", hex: "#C9D863" },
  { id: "verdeazulado", label: "Verde azulado", hex: "#1C8888" },
] as const;

export type ColorwayId = (typeof COLORWAYS)[number]["id"];
export type Colorway = (typeof COLORWAYS)[number];

export type ProductSpec = { label: string; value: string };

export type Product = {
  id: string;
  name: string;
  subtitle?: string;
  measures: string;
  price: string;
  description: string;
  image: string;
  images?: string[];
  specs?: ProductSpec[];
  diyNote?: string;
  comingSoon?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "aura",
    name: "Aura",
    measures: "35 × 35 cm",
    price: "$280.000 COP",
    description:
      "Una esfera de listones que respira. Cuelga en el centro del espacio y convierte cualquier techo en cielo encendido.",
    image: "/images/product-aura-2.webp",
    images: [
      "/images/product-aura-2.webp",
      "/images/product-aura-1.webp",
      "/images/product-aura-3.webp",
    ],
    specs: [
      { label: "Uso", value: "Lámpara de techo descolgada, preferiblemente para sala o comedor." },
      { label: "Tamaño", value: "30 x 35 cm" },
      { label: "Material", value: "MDF acabado pintura acrílica" },
      { label: "Color", value: "Personalizado" },
      {
        label: "Bombillo",
        value: "LED filamento, 125 mm diámetro, 6W potencia, tono de luz cálida, 2.200K",
      },
      { label: "Armado", value: "Ensamble de piezas, no necesita tornillos ni pegante." },
    ],
    diyNote: "Puedes armarla tú mismo, te enviaremos un instructivo.",
  },
  {
    id: "frida",
    name: "Frida",
    subtitle: "Tejida",
    measures: "35 × 35 cm",
    price: "$280.000 COP",
    description:
      "La versión tejida a mano, hebra a hebra. Más textura, más sombra, el mismo estallido de luz sobre tu techo.",
    image: "/images/product-frida.webp",
    comingSoon: true,
  },
];

export const GALLERY = [
  { src: "/images/gallery-living.webp", caption: "Sala, hora azul" },
  { src: "/images/gallery-kitchen.webp", caption: "Cocina, luz encendida" },
  { src: "/images/gallery-day.webp", caption: "De día, en reposo" },
  { src: "/images/gallery-warm.webp", caption: "El estallido sobre el techo" },
];
