import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import "katex/dist/katex.min.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteNav } from "@/components/site-nav"
import { SiteFooter } from "@/components/site-footer"
import { Analytics } from "@/components/analytics"
import { siteConfig } from "@/lib/site-config"

const inter = Inter({ subsets: ["latin"], variable: "--font-body" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: [
    "deep learning",
    "neural networks",
    "machine learning",
    "PyTorch",
    "transformers",
    "course",
    "UVA",
    "Shakeri Lab",
  ],
  authors: [{ name: siteConfig.instructor.name, url: siteConfig.instructor.url }],
  openGraph: {
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-card.png", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/og-card.png"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#002862] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteNav />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
