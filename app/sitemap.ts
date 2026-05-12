import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://heartage.health", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://heartage.health/login", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
