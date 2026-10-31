import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alimohammadnia.ir",
      lastModified: new Date(),
    },
  ]
}
