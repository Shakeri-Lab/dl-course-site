import { modules } from "@/lib/module-data"
import { ModuleTemplate } from "@/components/module-template"

export const metadata = modules[8].metadata

export default function Page() {
  return <ModuleTemplate data={modules[8]} />
}
