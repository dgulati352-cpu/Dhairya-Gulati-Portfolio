import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://dhairyagulati.co.in/";
const PERSON_ID = `${SITE_URL}#person`;
const WEBSITE_ID = `${SITE_URL}#website`;
const PROFILE_IMAGE = `${SITE_URL}portrait.png`;

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
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dhairya Gulati | Mobile App & UI/UX Designer in Saharanpur",
    template: "%s | Dhairya Gulati",
  },
  description:
    "Portfolio of Dhairya Gulati, a mobile app and UI/UX designer based in Saharanpur, Uttar Pradesh, India. Explore selected digital product concepts, mobile app interfaces, and Figma-based design work.",
  keywords: [
    "Dhairya Gulati",
    "Dhairya Gulati portfolio",
    "UI/UX designer in Saharanpur",
    "mobile app designer India",
    "product design portfolio",
    "Figma UI/UX design",
    "iOS and Android app design",
  ],
  authors: [{ name: "Dhairya Gulati", url: SITE_URL }],
  creator: "Dhairya Gulati",
  publisher: "Dhairya Gulati",
  applicationName: "Dhairya Gulati Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  verification: {
    google: "kfvam7jVLk0t4dU15AnqtasxtDRbF50Q7ZHxXDPDb3U",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Dhairya Gulati | Mobile App & UI/UX Designer",
    description:
      "Explore the portfolio and selected mobile app and digital product design work of Dhairya Gulati, based in Saharanpur, India.",
    url: SITE_URL,
    siteName: "Dhairya Gulati Portfolio",
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: PROFILE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dhairya Gulati — Mobile App & UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhairya Gulati | Mobile App & UI/UX Designer",
    description:
      "Portfolio of Dhairya Gulati, a mobile app and UI/UX designer based in Saharanpur, India.",
    images: [PROFILE_IMAGE],
    creator: "@dhairyagulati",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  category: "design",
};

// Keep identity data concise, consistent, and grounded in the public portfolio.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Dhairya Gulati",
  alternateName: "Dhairya",
  url: SITE_URL,
  image: PROFILE_IMAGE,
  jobTitle: "Mobile App & UI/UX Designer",
  description:
    "Dhairya Gulati is a mobile app and UI/UX designer based in Saharanpur, Uttar Pradesh, India.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Chitkara University",
  },
  knowsAbout: [
    "UI/UX design",
    "Mobile app design",
    "Figma",
    "Product design",
    "Wireframing",
    "Interactive prototyping",
    "Design systems",
    "iOS app design",
    "Android app design",
  ],
  sameAs: [
    "https://www.linkedin.com/in/dhairyagulati",
    "https://www.instagram.com/dg_fotography",
    "https://github.com/dgulati352-cpu",
    "https://dribbble.com/dhairyagulati",
    "https://www.behance.net/dhairyagulati",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Dhairya Gulati Portfolio",
  url: SITE_URL,
  inLanguage: "en-IN",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebPage", "ProfilePage"],
  "@id": `${SITE_URL}#profilepage`,
  url: SITE_URL,
  name: "Dhairya Gulati | Mobile App & UI/UX Designer in Saharanpur",
  description:
    "Portfolio and profile of Dhairya Gulati, a mobile app and UI/UX designer based in Saharanpur, Uttar Pradesh, India.",
  inLanguage: "en-IN",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  mainEntity: { "@id": PERSON_ID },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: PROFILE_IMAGE,
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
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-[#1A1714] font-sans selection:bg-[#C15F3C]/20 selection:text-[#C15F3C]">
        {children}
      </body>
    </html>
  );
}
