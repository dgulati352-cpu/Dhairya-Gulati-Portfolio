import type { MetadataRoute } from "next";

const SITE_URL = "https://dhairyagulati.co.in/";

export default function sitemap(): MetadataRoute.Sitemap {
  // This is a single-page portfolio. Section anchors are not separate indexable URLs.
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
