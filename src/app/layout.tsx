import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#15130F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dhairyagulati.co.in"),
  title: {
    default: "Dhairya Gulati — Mobile App & UI/UX Designer | Portfolio",
    template: "%s | Dhairya Gulati",
  },
  description:
    "Official Portfolio of Dhairya Gulati — Mobile App & UI/UX Designer based in Saharanpur, UP, India. Specializing in high-converting mobile applications, Figma UI/UX designs, and digital brand experiences for startups and local businesses.",
  keywords: [
    "Dhairya Gulati",
    "Dhairya Gulati Portfolio",
    "Dhairya Gulati Designer",
    "Mobile App Designer India",
    "UI/UX Designer Saharanpur",
    "Product Designer Portfolio",
    "Figma UI UX Expert India",
    "App UI UX Design Studio",
  ],
  authors: [{ name: "Dhairya Gulati", url: "https://dhairyagulati.co.in" }],
  creator: "Dhairya Gulati",
  publisher: "Dhairya Gulati",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://dhairyagulati.co.in",
  },
  openGraph: {
    title: "Dhairya Gulati — Mobile App & UI/UX Designer Portfolio",
    description:
      "Crafting premium mobile app designs and UI/UX interfaces that scale local businesses and modern brands.",
    url: "https://dhairyagulati.co.in",
    siteName: "Dhairya Gulati Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dhairyagulati.co.in/portrait.png",
        width: 1200,
        height: 630,
        alt: "Dhairya Gulati — Mobile App & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhairya Gulati — Mobile App & UI/UX Designer",
    description:
      "Mobile App & UI/UX Designer based in Saharanpur, UP, India. Creating digital experiences that scale businesses.",
    images: ["https://dhairyagulati.co.in/portrait.png"],
    creator: "@dhairyagulati",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "design",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dhairya Gulati",
  alternateName: ["Dhairya", "Dhairya Gulati UI/UX"],
  url: "https://dhairyagulati.co.in",
  image: "https://dhairyagulati.co.in/portrait.png",
  jobTitle: "Mobile App & UI/UX Designer",
  description:
    "Mobile App & UI/UX Designer crafting user-centric mobile applications and high-converting digital products.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "India",
  },
  knowsAbout: [
    "UI/UX Design",
    "Mobile App Design",
    "Figma",
    "User Research",
    "Product Design",
    "Prototyping",
    "Design Systems",
  ],
  sameAs: [
    "https://linkedin.com/in/dhairyagulati",
    "https://github.com/dgulati352-cpu",
    "https://dribbble.com/dhairyagulati",
    "https://behance.net/dhairyagulati",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dhairya Gulati Portfolio",
  url: "https://dhairyagulati.co.in",
  author: {
    "@type": "Person",
    name: "Dhairya Gulati",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#15130F] text-[#F3EFEA] font-sans selection:bg-[#C15F3C]/30 selection:text-[#F3EFEA]">
        {children}
      </body>
    </html>
  );
}
