import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Learning Resources",
  description:
    "Curated books, courses, tutorials, and research tools that complement the DS 6050 deep learning course.",
  path: "/resources/",
})

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
