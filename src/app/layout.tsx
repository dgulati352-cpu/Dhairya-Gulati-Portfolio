import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dhairya Gulati — Mobile App & UI/UX Designer",
  description: "Personal brand positioning: Dhairya Gulati designs digital experiences that help local businesses grow. Mobile App & UI/UX Designer based in Saharanpur, Uttar Pradesh, India.",
  keywords: ["Dhairya Gulati", "UI/UX Design", "Mobile App Designer", "Freelance Designer India", "App Design Studio", "Framer Designer", "Figma Expert"],
  authors: [{ name: "Dhairya Gulati" }],
  openGraph: {
    title: "Dhairya Gulati — Mobile App & UI/UX Designer",
    description: "Dhairya Gulati designs digital experiences that help local businesses grow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050816] text-white font-sans selection:bg-[#3B82F6]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

