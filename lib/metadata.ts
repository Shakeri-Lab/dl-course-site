import type { Metadata } from "next"
import { modules } from "@/lib/module-data"
import { siteConfig } from "@/lib/site-config"

// Per-page metadata with canonical + Open Graph/Twitter, resolved against
// metadataBase (set in app/layout.tsx). `path` must end with a trailing slash
// to match the exported site's URLs.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: siteConfig.title,
      type: "article",
      images: [{ url: "/images/og-card.png", width: 1200, height: 630, alt: siteConfig.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-card.png"],
    },
  }
}

export function moduleMetadata(moduleNumber: number): Metadata {
  const data = modules[moduleNumber]
  return pageMetadata({
    title: data.metadata.title,
    description: data.metadata.description,
    path: `/module/${moduleNumber}/`,
  })
}
