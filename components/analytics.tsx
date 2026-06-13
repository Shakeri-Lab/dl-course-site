import Script from "next/script"
import { siteConfig } from "@/lib/site-config"

// Privacy-friendly analytics via GoatCounter (no cookies, GDPR-safe, free).
// Disabled until siteConfig.goatcounter is set to a GoatCounter site code.
export function Analytics() {
  if (!siteConfig.goatcounter) return null
  return (
    <Script
      data-goatcounter={`https://${siteConfig.goatcounter}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
      strategy="afterInteractive"
    />
  )
}
