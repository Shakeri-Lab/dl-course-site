import { modules } from "@/lib/module-data"
import { moduleMetadata } from "@/lib/metadata"
import { ModuleTemplate } from "@/components/module-template"

export const metadata = moduleMetadata(8)

export default function Page() {
  return <ModuleTemplate data={modules[8]} />
}
