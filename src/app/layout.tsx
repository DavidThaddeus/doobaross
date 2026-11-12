import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import BackToTop from "@/components/BackToTop";
import { business } from "@/lib/site-config";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.doobarosstech.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${business.name} | Office Equipment Sales & Repairs, Ikeja Lagos`,
    template: `%s | ${business.name}`,
  },
  description:
    "Office equipment sales, repairs, installation and supply in Computer Village, Ikeja, Lagos, covering printers, photocopiers, laptops and networking equipment. Nationwide delivery.",
  keywords: [
    "office equipment Lagos",
    "printer repair Computer Village",
    "photocopier repair Ikeja",
    "Doobaross Technologies",
    "computer village Ikeja office equipment",
    "nationwide equipment delivery Nigeria",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: business.name,
    title: `${business.name} | Office Equipment Sales & Repairs, Ikeja Lagos`,
    description:
      "Office equipment sales, repairs, installation and supply based in Computer Village, Ikeja, Lagos. Nationwide delivery.",
    url: siteUrl,
    images: [{ url: "/images/founder-at-work.jpg", width: 1274, height: 1668, alt: business.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Office Equipment Sales & Repairs`,
    description:
      "Office equipment sales, repairs, installation and supply based in Computer Village, Ikeja, Lagos. Nationwide delivery.",
    images: ["/images/founder-at-work.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: business.name,
  image: [`${siteUrl}/images/founder-at-work.jpg`, `${siteUrl}/images/printer-repair.jpg`],
  logo: `${siteUrl}/images/logo-full.png`,
  description:
    "Office equipment sales, repairs, installation and supply in Computer Village, Ikeja, Lagos, covering printers, photocopiers, laptops and networking equipment.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6, Oshitelu Street, Opp GT Bank, Computer Village",
    addressLocality: "Ikeja",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  telephone: business.phones.map((p) => `+234${p.slice(1)}`),
  email: business.email,
  url: siteUrl,
  sameAs: [business.facebook],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  identifier: `RC ${business.rcNumber}`,
  areaServed: "NG",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-text">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
        <BackToTop />
      </body>
    </html>
  );
}
