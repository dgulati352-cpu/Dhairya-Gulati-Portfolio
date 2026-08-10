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
  themeColor: "#FBF9F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dhairyagulati.co.in"),
  title: {
    default: "Dhairya — Mobile App & UI/UX Designer | Dhairya Gulati Portfolio",
    template: "%s | Dhairya Gulati",
  },
  description:
    "Official Website of Dhairya Gulati — Mobile App & UI/UX Designer based in Saharanpur, UP, India. Specializing in high-converting iOS & Android mobile applications, Figma UI/UX design systems, and digital product experiences.",
  keywords: [
    // Core Entity Variations
    "Dhairya",
    "dhairya",
    "dhairyagulati",
    "dhairya.co.in",
    "dhairyagulati.co.in",
    "Dhairya Gulati",
    "Dhairya Gulati Official",
    "Dhairya Gulati Website",
    "Dhairya Gulati Portfolio",
    "Dhairya Gulati UI UX",
    "Dhairya Gulati Designer",
    "Dhairya Gulati Mobile App",
    "Dhairya Gulati Saharanpur",
    "Dhairya Gulati UP",
    "Dhairya Gulati India",
    "Dhairya Gulati Chitkara",
    "Dhairya Gulati Chitkara University",
    "Dhairya Gulati LinkedIn",
    "Dhairya Gulati Instagram",
    "Dhairya Gulati Github",
    "Dhairya Gulati Behance",
    "Dhairya Gulati Dribbble",
    "dhairya gulati developer",
    "dhairya gulati design",
    // Single Name Search Intent Variations
    "Dhairya portfolio website",
    "Dhairya UI UX portfolio",
    "Dhairya app designer",
    "Dhairya product designer",
    "Dhairya Chitkara University",
    "Dhairya Chitkara",
    "Dhairya Saharanpur designer",
    "Dhairya designer India",
    "Dhairya iOS App Designer",
    "Dhairya Android App Designer",
    "Dhairya Figma Design Systems",
    "Dhairya Wireframing Prototyping",
    "Dhairya UX Strategy",
    "Dhairya Saharanpur UP",
    // Specialization & Location Long-tail Keywords
    "Mobile App Designer India",
    "UI/UX Designer Saharanpur",
    "Best Mobile App Designer Saharanpur",
    "Top UI UX Designer Saharanpur",
    "Figma UI UX Expert India",
    "Product Designer Portfolio India",
    "Freelance Mobile App Designer India",
    "App UI UX Design Studio Saharanpur",
    "Figma UI UX Designer Chitkara University",
    "iOS Mobile App UI UX Designer India",
    "Android App Design Specialist UP India",
    "High Converting Mobile App Designer",
    "Enterprise & Local Business App UI UX",
  ],
  authors: [{ name: "Dhairya Gulati", url: "https://dhairyagulati.co.in" }],
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
    canonical: "https://dhairyagulati.co.in",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Saharanpur",
    "geo.position": "29.9640;77.5460",
    "ICBM": "29.9640, 77.5460",
  },
  openGraph: {
    title: "Dhairya Gulati — Official Website & Mobile App UI/UX Portfolio",
    description:
      "Official Website of Dhairya Gulati: Crafting premium mobile app designs and UI/UX interfaces that scale local businesses and modern brands.",
    url: "https://dhairyagulati.co.in",
    siteName: "Dhairya Gulati — Official Website",
    locale: "en_US",
    alternateLocale: ["en_IN"],
    type: "profile",
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
    title: "Dhairya Gulati — Official Website & UI/UX Designer",
    description:
      "Official Website of Dhairya Gulati — Mobile App & UI/UX Designer based in Saharanpur, UP, India.",
    images: ["https://dhairyagulati.co.in/portrait.png"],
    creator: "@dhairyagulati",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "design",
};

// JSON-LD Structured Data for Google Knowledge Graph, AI Overviews & Entity Authority
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://dhairyagulati.co.in/#person",
  name: "Dhairya Gulati",
  givenName: "Dhairya",
  familyName: "Gulati",
  alternateName: [
    "Dhairya",
    "dhairya",
    "dhairyagulati",
    "dhairya.co.in",
    "dhairyagulati.co.in",
    "Dhairya Gulati",
    "Dhairya Gulati UI/UX",
    "Dhairya Gulati Designer",
    "Dhairya Gulati Official",
    "Dhairya Gulati Portfolio",
    "Dhairya Chitkara",
    "Dhairya Saharanpur"
  ],
  disambiguatingDescription:
    "Dhairya Gulati (commonly searched as Dhairya) is an Indian Mobile App & UI/UX Designer based in Saharanpur, UP, India, educated at Chitkara University. Official website: dhairyagulati.co.in.",
  url: "https://dhairyagulati.co.in",
  mainEntityOfPage: "https://dhairyagulati.co.in",
  image: "https://dhairyagulati.co.in/portrait.png",
  jobTitle: "Mobile App & UI/UX Designer",
  worksFor: {
    "@type": "Organization",
    name: "Dhairya Gulati UI/UX Design Studio",
    url: "https://dhairyagulati.co.in"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Chitkara University",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressCountry: "India"
    }
  },
  description:
    "Official Website & Profile of Dhairya Gulati — Mobile App & UI/UX Designer based in Saharanpur, UP, India, educated at Chitkara University. Specializing in high-converting iOS & Android mobile applications, Figma UI/UX design systems, and digital product experiences.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "India",
  },
  email: "dhairyagulati352@gmail.com",
  telephone: "+918791416116",
  knowsAbout: [
    "UI/UX Design",
    "Mobile App Design",
    "Figma",
    "Framer",
    "Adobe XD",
    "User Research",
    "Product Design",
    "Prototyping",
    "Design Systems",
    "iOS App Design",
    "Android App Design",
    "Interaction Design",
    "Information Architecture",
    "Usability Testing"
  ],
  sameAs: [
    "https://linkedin.com/in/dhairyagulati",
    "https://www.linkedin.com/in/dhairyagulati",
    "https://instagram.com/dg_fotography",
    "https://www.instagram.com/dg_fotography",
    "https://github.com/dgulati352-cpu",
    "https://dribbble.com/dhairyagulati",
    "https://behance.net/dhairyagulati",
  ],
};

const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://dhairyagulati.co.in/#profilepage",
  url: "https://dhairyagulati.co.in",
  name: "Dhairya Gulati — Official Website & Mobile App UI/UX Portfolio",
  description: "Official profile page and website of Dhairya Gulati, Mobile App & UI/UX Designer based in Saharanpur, UP, India.",
  mainEntity: {
    "@id": "https://dhairyagulati.co.in/#person",
  },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://dhairyagulati.co.in/#service",
  name: "Dhairya Gulati — Mobile App & UI/UX Design Studio",
  url: "https://dhairyagulati.co.in",
  image: "https://dhairyagulati.co.in/portrait.png",
  logo: "https://dhairyagulati.co.in/logo-icon.svg",
  description:
    "Official Mobile App & UI/UX Design studio offering custom mobile app design, Figma prototyping, design systems, and digital product strategy for local enterprises and global startups.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Saharanpur",
    addressRegion: "Uttar Pradesh",
    addressCountry: "India",
  },
  telephone: "+918791416116",
  email: "dhairyagulati352@gmail.com",
  areaServed: ["India", "Worldwide"],
  priceRange: "$$",
  founder: {
    "@id": "https://dhairyagulati.co.in/#person",
  },
  sameAs: [
    "https://linkedin.com/in/dhairyagulati",
    "https://www.instagram.com/dg_fotography",
    "https://github.com/dgulati352-cpu",
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Dhairya Gulati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dhairya Gulati is a Mobile App & UI/UX Designer based in Saharanpur, Uttar Pradesh, India, educated at Chitkara University. He specializes in designing high-converting iOS and Android mobile apps, Figma design systems, and digital product experiences.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Dhairya Gulati provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dhairya Gulati provides Mobile App Design (iOS & Android), Figma UI/UX Design Systems, Interactive Prototyping, Wireframing, Conversion-driven Web Design, and User Research.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Dhairya Gulati located and where was he educated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dhairya Gulati is located in Saharanpur, Uttar Pradesh, India and studied at Chitkara University, Chandigarh, India.",
      },
    },
    {
      "@type": "Question",
      name: "What tools and software does Dhairya Gulati use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dhairya Gulati uses Figma, Framer, Adobe XD, Adobe Illustrator, and Adobe Photoshop.",
      },
    },
    {
      "@type": "Question",
      name: "How can clients contact Dhairya Gulati?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clients can contact Dhairya Gulati via email at dhairyagulati352@gmail.com, telephone at +91 8791416116, or visit his official website at https://dhairyagulati.co.in.",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dhairyagulati.co.in/#website",
  name: "Dhairya Gulati — Official Website",
  alternateName: ["Dhairya Gulati Portfolio", "Dhairya Gulati UI/UX"],
  url: "https://dhairyagulati.co.in",
  publisher: {
    "@id": "https://dhairyagulati.co.in/#person",
  },
  author: {
    "@id": "https://dhairyagulati.co.in/#person",
  },
  inLanguage: "en-US",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Dhairya Gulati Official Website",
      item: "https://dhairyagulati.co.in",
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FBF9F5] text-[#1A1714] font-sans selection:bg-[#C15F3C]/20 selection:text-[#C15F3C]">
        {children}
      </body>
    </html>
  );
}
