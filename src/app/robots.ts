import type { MetadataRoute } from "next";

const SITE_ORIGIN = "https://dhairyagulati.co.in";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        // Search crawler used to surface public pages in ChatGPT Search.
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
