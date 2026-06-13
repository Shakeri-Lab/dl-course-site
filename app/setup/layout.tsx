import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Environment Setup",
  description:
    "Set up Python, PyTorch, Jupyter, and Google Colab for the DS 6050 deep learning course — with troubleshooting tips.",
  path: "/setup/",
})

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return children
}
