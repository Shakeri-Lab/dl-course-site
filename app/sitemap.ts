import type { MetadataRoute } from "next"
import { modules } from "@/lib/module-data"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/start-here", "/syllabus", "/resources", "/setup", "/faq"].map((route) => ({
    url: `${siteConfig.url}${route}/`,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }))

  const moduleRoutes = Object.keys(modules).map((id) => ({
    url: `${siteConfig.url}/module/${id}/`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }))

  return [...staticRoutes, ...moduleRoutes]
}
