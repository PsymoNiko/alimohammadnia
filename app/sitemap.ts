import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://alimohammadnia.ir",
      lastModified: new Date(),
    },
  ]
}
