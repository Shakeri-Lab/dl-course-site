import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about the DS 6050 deep learning course: structure, technical setup, assignments, and getting help.",
  path: "/faq/",
})

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
