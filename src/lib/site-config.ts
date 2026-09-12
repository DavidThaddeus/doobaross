export const business = {
  name: "Doobaross Technologies",
  rcNumber: "2366544",
  incorporated: "October 5, 2015",
  founder: "Rasaq Abdulsalam",
  founderTitle: "Founder / MD-CEO",
  address: "6, Oshitelu Street, Opp GT Bank, Computer Village, Ikeja, Lagos",
  phones: ["08053893335", "07037835512"],
  email: "baross.tech.sra@gmail.com",
  tagline: "Sales · Repairs · Installation · Supply",
  hours: "Mon – Sat, 8:00am – 6:00pm",
  facebook: "https://www.facebook.com/DoobarossTechInfo",
  mapEmbedSrc:
    "https://www.google.com/maps?q=6+Oshitelu+Street,+Computer+Village,+Ikeja,+Lagos&output=embed",
};

export const whatsappNumbers = business.phones.map((p) => toWhatsAppDigits(p));

function toWhatsAppDigits(phone: string) {
  // Convert Nigerian local format (0xxxxxxxxxx) to international (234xxxxxxxxxx)
  const digits = phone.replace(/\D/g, "");
  return digits.startsWith("0") ? `234${digits.slice(1)}` : digits;
}

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${whatsappNumbers[0]}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function callLink(index = 0) {
  return `tel:+${toWhatsAppDigits(business.phones[index])}`;
}

export function emailLink() {
  return `mailto:${business.email}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: "wrench" | "cart" | "cog" | "wifi" | "academic" | "chat";
  pending?: boolean;
};

export const services: Service[] = [
  {
    slug: "sales",
    title: "Sales",
    short: "New & used printers, laptops, photocopiers and office equipment.",
    description:
      "We supply new and fairly-used printers, laptops, desktops, photocopiers and general office equipment from trusted brands. Whether you need a single unit or are outfitting an entire office, we source, verify and deliver equipment that matches your budget and needs.",
    icon: "cart",
  },
  {
    slug: "repairs",
    title: "Repairs",
    short: "Servicing of printers, photocopiers, computers and related hardware.",
    description:
      "Our technicians diagnose and repair printers, photocopiers, computers and related hardware, from simple servicing to component-level board repair. Send us photos or a description of the fault on WhatsApp for a fast, honest quote.",
    icon: "wrench",
  },
  {
    slug: "installation",
    title: "Installation",
    short: "On-site setup of purchased or serviced equipment.",
    description:
      "Once equipment is purchased or repaired, our team handles on-site installation and configuration, so it's ready to use the moment we leave with no extra setup on your end.",
    icon: "cog",
  },
  {
    slug: "networking",
    title: "Networking",
    short: "Office network setup and support.",
    description:
      "We design, install and support office networks, wired and wireless, so your computers, printers and shared devices stay connected and reliable across your workspace.",
    icon: "wifi",
  },
  {
    slug: "training",
    title: "Training",
    short: "IT and office equipment training for staff.",
    description:
      "Details of our training programs are still being finalized. Check back soon or ask us on WhatsApp for what's currently available.",
    icon: "academic",
    pending: true,
  },
  {
    slug: "consulting",
    title: "Consulting",
    short: "IT and office equipment consulting for businesses.",
    description:
      "We advise businesses on the right equipment, setup and maintenance strategy for their needs, helping you avoid costly mistakes before you buy.",
    icon: "chat",
  },
];

export type ProductCategory =
  | "Printers"
  | "Laptops"
  | "Photocopiers"
  | "Accessories/Consumables"
  | "Networking";

export type ProductCondition = "New" | "Used";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  condition: ProductCondition;
  priceLabel: string;
  image: string;
  inStock: boolean;
};

export const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Apple",
  "Sharp",
  "Canon",
  "Samsung",
  "Konica Minolta",
];

export const productCategories: ProductCategory[] = [
  "Printers",
  "Laptops",
  "Photocopiers",
  "Accessories/Consumables",
  "Networking",
];

// Placeholder catalog: swap images and pricing once the client confirms stock and price bands.
export const products: Product[] = [
  {
    id: "hp-laserjet-pro",
    name: "HP LaserJet Pro Printer",
    brand: "HP",
    category: "Printers",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-pro.jpg",
    inStock: true,
  },
  {
    id: "canon-imagerunner",
    name: "Canon imageRUNNER Photocopier",
    brand: "Canon",
    category: "Photocopiers",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/canon-imagerunner.jpg",
    inStock: true,
  },
  {
    id: "dell-latitude",
    name: "Dell Latitude Laptop",
    brand: "Dell",
    category: "Laptops",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/dell-latitude.jpg",
    inStock: true,
  },
  {
    id: "lenovo-thinkpad",
    name: "Lenovo ThinkPad Laptop",
    brand: "Lenovo",
    category: "Laptops",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/lenovo-thinkpad.jpg",
    inStock: true,
  },
  {
    id: "sharp-mfp",
    name: "Sharp Multifunction Photocopier",
    brand: "Sharp",
    category: "Photocopiers",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/sharp-mfp.jpg",
    inStock: true,
  },
  {
    id: "konica-bizhub",
    name: "Konica Minolta Bizhub Photocopier",
    brand: "Konica Minolta",
    category: "Photocopiers",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/konica-bizhub.jpg",
    inStock: false,
  },
  {
    id: "hp-toner",
    name: "HP Toner Cartridge",
    brand: "HP",
    category: "Accessories/Consumables",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-toner.jpg",
    inStock: true,
  },
  {
    id: "samsung-monitor",
    name: "Samsung Office Monitor",
    brand: "Samsung",
    category: "Accessories/Consumables",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/samsung-monitor.jpg",
    inStock: true,
  },
  {
    id: "network-switch",
    name: "Office Network Switch & Cabling Kit",
    brand: "HP",
    category: "Networking",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/network-switch.jpg",
    inStock: true,
  },
];

export const faqs = [
  {
    q: "Do you sell used equipment with warranty?",
    a: "Warranty terms for used equipment are confirmed on a per-item basis. Ask us on WhatsApp when enquiring about a specific unit.",
  },
  {
    q: "Do you deliver outside Lagos?",
    a: "Yes, we deliver nationwide across Nigeria.",
  },
  {
    q: "How do I get a repair quote?",
    a: "Message us on WhatsApp with photos or a short description of the issue and we'll get back to you with a quote.",
  },
  {
    q: "Do you offer maintenance contracts?",
    a: "We're finalizing our maintenance contract terms. Reach out on WhatsApp and we'll confirm what's currently available for your business.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: 4 | 5;
};

// Placeholder testimonials: swap with real client reviews when collected.
export const testimonials: Testimonial[] = [
  {
    quote:
      "They repaired our office photocopier the same week we called, and it has run without a single issue since. Honest pricing and no surprises.",
    name: "Adebayo O.",
    role: "Office Manager",
    location: "Ikeja, Lagos",
    rating: 5,
  },
  {
    quote:
      "We bought three fairly-used laptops for our startup and every one of them arrived clean, tested and ready to use. Great value for the budget we had.",
    name: "Chiamaka N.",
    role: "Startup Founder",
    location: "Yaba, Lagos",
    rating: 4,
  },
  {
    quote:
      "Ordered a printer on WhatsApp from Abuja and it was delivered within days, installed remotely with their guidance. Smooth from start to finish.",
    name: "Ibrahim S.",
    role: "Business Owner",
    location: "Abuja",
    rating: 5,
  },
  {
    quote:
      "Their technician found a board-level fault two other shops missed. Professional, patient and they explained everything before charging us.",
    name: "Funke A.",
    role: "School Administrator",
    location: "Surulere, Lagos",
    rating: 4,
  },
  {
    quote:
      "From sourcing the photocopier to setting it up in our office, one team handled everything. That's exactly what a busy business needs.",
    name: "Emeka U.",
    role: "Operations Lead",
    location: "Port Harcourt",
    rating: 5,
  },
];

export const trustStats = [
  { label: "Registered Business", value: `RC ${business.rcNumber}` },
  { label: "Delivery", value: "Nationwide" },
  { label: "Equipment", value: "New & Used" },
  { label: "In Business", value: "10+ Years" },
];

export const whyChooseUs = [
  {
    title: "Registered & Trusted",
    description: `Officially registered (RC ${business.rcNumber}), incorporated ${business.incorporated}.`,
  },
  {
    title: "Sales + Repairs Under One Roof",
    description: "No need to go elsewhere. Buy, repair and install with one team.",
  },
  {
    title: "Nationwide Reach",
    description: "Based in Computer Village, Ikeja, delivering across Nigeria.",
  },
  {
    title: "New & Fairly-Used Options",
    description: "Equipment options to match every budget, without compromising quality.",
  },
];

export const brandLogos = brands;
