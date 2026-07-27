import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: "DS 6050",
    description: siteConfig.description,
    start_url: "/dl-course-site/",
    display: "standalone",
    background_color: "#f5ebe1",
    theme_color: "#002862",
    icons: [
      {
        src: "/dl-course-site/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
    ],
  }
}
