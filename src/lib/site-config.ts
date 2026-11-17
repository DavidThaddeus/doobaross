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
    short: "New & used printers, photocopiers, laptops, phones and office equipment.",
    description:
      "We supply new and fairly-used printers, photocopiers, laptops, phones, toner and general office equipment from trusted brands. Whether you need a single unit or are outfitting an entire office, we source, verify and deliver equipment that matches your budget and needs.",
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
  | "Photocopiers"
  | "Laptops"
  | "Phones"
  | "Accessories/Consumables"
  | "Networking";

// "New & Used" means the model is usually available in both conditions; confirm per unit on WhatsApp.
export type ProductCondition = "New" | "Used" | "New & Used";

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  condition: ProductCondition;
  priceLabel: string;
  image: string;
  inStock: boolean;
  featured?: boolean;
};

// Brands we sell and service (shown in the home page marquee and brand stats).
export const brands = [
  "HP",
  "Dell",
  "Lenovo",
  "Apple",
  "Microsoft",
  "Sharp",
  "Canon",
  "Samsung",
  "Konica Minolta",
];

export const productCategories: ProductCategory[] = [
  "Printers",
  "Photocopiers",
  "Laptops",
  "Phones",
  "Accessories/Consumables",
  "Networking",
];

// Catalog built from the client's own product photos. Pricing is shared on request via WhatsApp.
export const products: Product[] = [
  {
    id: "lenovo-thinkpad-e15",
    name: "Lenovo ThinkPad E15",
    brand: "Lenovo",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/lenovo-thinkpad-e15.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "hp-laserjet-enterprise-mfp-m631",
    name: "HP LaserJet Enterprise MFP M631",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-mfp-m631.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "apple-iphone-8-and-8-plus",
    name: "Apple iPhone 8 & iPhone 8 Plus",
    brand: "Apple",
    category: "Phones",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/apple-iphone-8-and-8-plus.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "hp-laserjet-enterprise-m608",
    name: "HP LaserJet Enterprise M608",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-m608.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "hp-17-laptop",
    name: "HP 17-inch Laptop",
    brand: "HP",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-17-laptop.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "hp-toner-cartridges",
    name: "HP LaserJet Toner Cartridges (207A, 147A & more)",
    brand: "HP",
    category: "Accessories/Consumables",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-toner-cartridges.jpg",
    inStock: true,
    featured: true,
  },
  {
    id: "hp-laserjet-enterprise-flow-mfp-m630",
    name: "HP LaserJet Enterprise Flow MFP M630",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-flow-mfp-m630.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-enterprise-mfp-m725",
    name: "HP LaserJet Enterprise MFP M725 (A3)",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-mfp-m725.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-enterprise-flow-mfp-m880",
    name: "HP Color LaserJet Enterprise Flow MFP M880 (A3)",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-enterprise-flow-mfp-m880.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-enterprise-mfp-m577",
    name: "HP Color LaserJet Enterprise MFP M577",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-enterprise-mfp-m577.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-enterprise-mfp-5800",
    name: "HP Color LaserJet Enterprise MFP 5800",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-enterprise-mfp-5800.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-enterprise-flow-mfp-m681",
    name: "HP Color LaserJet Enterprise Flow MFP M681",
    brand: "HP",
    category: "Photocopiers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-enterprise-flow-mfp-m681.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-enterprise-m606",
    name: "HP LaserJet Enterprise M606",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-m606.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-enterprise-m806",
    name: "HP LaserJet Enterprise M806 (A3)",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-enterprise-m806.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-enterprise-m553",
    name: "HP Color LaserJet Enterprise M553",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-enterprise-m553.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-cp5225",
    name: "HP Color LaserJet CP5225 (A3)",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-cp5225.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-pro-mfp-m521dn",
    name: "HP LaserJet Pro MFP M521dn",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-pro-mfp-m521dn.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-pro-mfp-m426",
    name: "HP LaserJet Pro MFP M426",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-pro-mfp-m426.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laserjet-pro-mfp-m476",
    name: "HP Color LaserJet Pro MFP M476",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laserjet-pro-mfp-m476.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-pro-mfp-m225",
    name: "HP LaserJet Pro MFP M225",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-pro-mfp-m225.jpg",
    inStock: true,
  },
  {
    id: "hp-color-laser-mfp-179fnw",
    name: "HP Color Laser MFP 179fnw",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-color-laser-mfp-179fnw.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-m1536dnf-mfp",
    name: "HP LaserJet Pro M1536dnf MFP",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-m1536dnf-mfp.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-pro-m203dn",
    name: "HP LaserJet Pro M203dn",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-pro-m203dn.jpg",
    inStock: true,
  },
  {
    id: "hp-laserjet-p1606dn",
    name: "HP LaserJet Pro P1606dn",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laserjet-p1606dn.jpg",
    inStock: true,
  },
  {
    id: "hp-designjet-plotter",
    name: "HP DesignJet 24-inch Plotter",
    brand: "HP",
    category: "Printers",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-designjet-plotter.jpg",
    inStock: true,
  },
  {
    id: "hp-elitebook-x360",
    name: "HP EliteBook x360",
    brand: "HP",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-elitebook-x360.jpg",
    inStock: true,
  },
  {
    id: "hp-laptops-new-sealed",
    name: "HP Laptops (Brand New, Sealed)",
    brand: "HP",
    category: "Laptops",
    condition: "New",
    priceLabel: "Contact for pricing",
    image: "/images/products/hp-laptops-new-sealed.jpg",
    inStock: true,
  },
  {
    id: "dell-latitude-e-series",
    name: "Dell Latitude E-Series",
    brand: "Dell",
    category: "Laptops",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/dell-latitude-e-series.jpg",
    inStock: true,
  },
  {
    id: "lenovo-thinkpad-t-series",
    name: "Lenovo ThinkPad T-Series",
    brand: "Lenovo",
    category: "Laptops",
    condition: "Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/lenovo-thinkpad-t-series.jpg",
    inStock: true,
  },
  {
    id: "microsoft-surface-pro",
    name: "Microsoft Surface Pro",
    brand: "Microsoft",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/microsoft-surface-pro.jpg",
    inStock: true,
  },
  {
    id: "microsoft-surface-laptop",
    name: "Microsoft Surface Laptop",
    brand: "Microsoft",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/microsoft-surface-laptop.jpg",
    inStock: true,
  },
  {
    id: "apple-macbook-pro",
    name: "Apple MacBook Pro",
    brand: "Apple",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/apple-macbook-pro.jpg",
    inStock: true,
  },
  {
    id: "gaming-laptops",
    name: "Gaming Laptops (MSI, Lenovo Legion, ASUS ROG)",
    brand: "Various",
    category: "Laptops",
    condition: "New & Used",
    priceLabel: "Contact for pricing",
    image: "/images/products/gaming-laptops.jpg",
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
