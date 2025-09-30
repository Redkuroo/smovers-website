import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com";
  return [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/acceptable-use`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
