import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Check, ChevronDown, ExternalLink } from "lucide-react"
import { ModulePager } from "@/components/module-pager"
import { modules, type ModuleData, type ColabLink, type Reading } from "@/lib/module-data"

const CARD_CLASSES =
  "mb-12 border border-white/30 dark:border-white/10 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl shadow-[0_32px_60px_-38px_rgba(0,40,98,0.45)]"

const LINK_CLASSES =
  "text-[#002862] dark:text-[#7EB5F0] underline decoration-[#FFBA69]/70 underline-offset-4 hover:text-[#001a44] dark:hover:text-[#a8d0ff]"

const moduleOptions = Object.values(modules).sort((left, right) => left.moduleNumber - right.moduleNumber)

function getModuleLabel(module: ModuleData) {
  return module.metadata.title.replace(/^Module\s+/, "")
}

function ColabButtons({ links }: { links: ColabLink[] }) {
  return (
    <>
      {links.map((link) => (
        <div key={link.url} className="pt-2">
          <Button asChild variant={link.variant ?? "default"}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
              <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      ))}
    </>
  )
}

function ReadingsList({ readings }: { readings: Reading[] }) {
  return (
    <div>
      <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">Suggested reading</p>
      <ul className="list-disc pl-6 space-y-1 text-slate-600 dark:text-slate-300">
        {readings.map((reading) => (
          <li key={reading.url}>
            <a
              href={reading.url}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASSES}
            >
              {reading.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ModuleTemplate({ data }: { data: ModuleData }) {
  const hasSharedResources =
    data.d2lReference ||
    data.resourceDescription ||
    data.homeworkDescription ||
    (data.colabLinks && data.colabLinks.length > 0) ||
    (data.readings && data.readings.length > 0) ||
    data.pdfPreview

  return (
    <div className="relative min-h-screen bg-transparent pb-20">
      <div className="mx-auto w-full max-w-5xl px-6 pb-12 pt-5">
        <div className="mb-8 border-b border-white/40 pb-3 dark:border-white/10">
          <Breadcrumb className="text-sm">
            <BreadcrumbList className="gap-2 text-slate-500 dark:text-slate-400">
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="font-medium text-slate-500 hover:text-[#002862] dark:text-slate-400 dark:hover:text-[#7EB5F0]">
                  <Link href="/">Modules</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-slate-300 dark:text-slate-600" />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/75 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:text-[#002862] focus:outline-none focus:ring-2 focus:ring-[#FFBA69]/60 dark:border-white/10 dark:bg-gray-900/75 dark:text-slate-200 dark:hover:text-[#7EB5F0]"
                      aria-label="Open module navigation"
                    >
                      <span>{getModuleLabel(data)}</span>
                      <ChevronDown className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="start"
                    className="max-h-[70vh] w-[20rem] overflow-y-auto border-white/50 bg-white/95 p-1.5 dark:border-white/10 dark:bg-gray-900/95"
                  >
                    {moduleOptions.map((module) => {
                      const isCurrent = module.moduleNumber === data.moduleNumber

                      return (
                        <DropdownMenuItem
                          key={module.moduleNumber}
                          asChild
                          className={isCurrent ? "bg-slate-100 text-slate-900 focus:bg-slate-100 dark:bg-white/10 dark:text-white dark:focus:bg-white/10" : ""}
                        >
                          <Link
                            href={`/module/${module.moduleNumber}`}
                            className="flex items-center justify-between gap-3"
                            aria-current={isCurrent ? "page" : undefined}
                          >
                            <span>{getModuleLabel(module)}</span>
                            {isCurrent && <Check className="h-4 w-4 text-[#002862] dark:text-[#7EB5F0]" />}
                          </Link>
                        </DropdownMenuItem>
                      )
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Lectures */}
        {data.lectures.map((lecture, index) => (
          <Card key={index} className={CARD_CLASSES}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl dark:text-white">{lecture.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              {lecture.description && (
                <p className="text-slate-600 dark:text-slate-300">{lecture.description}</p>
              )}

              {/* YouTube video */}
              {lecture.videoId && (
                <div className="max-w-4xl mx-auto">
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${lecture.videoId}`}
                      title={lecture.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              )}

              {/* PDF slide preview */}
              {lecture.pdf && (
                <>
                  <div>
                    <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">Slide preview</p>
                    <div className="rounded-lg border border-white/60 dark:border-white/10 bg-white/80 dark:bg-gray-800/80 shadow-inner overflow-hidden">
                      <iframe
                        src={lecture.pdf}
                        title={`${lecture.title} slides`}
                        className="h-96 w-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="outline">
                      <a href={lecture.pdf} target="_blank" rel="noopener noreferrer">
                        View Slides
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                    {lecture.colabLinks && lecture.colabLinks.map((link) => (
                      <Button key={link.url} asChild variant={link.variant ?? "default"}>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.label}
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </>
              )}

              {/* Per-lecture readings */}
              {lecture.readings && lecture.readings.length > 0 && (
                <ReadingsList readings={lecture.readings} />
              )}
            </CardContent>
          </Card>
        ))}

        {/* Shared resources card */}
        {hasSharedResources && (
          <Card className={CARD_CLASSES}>
            <CardHeader>
              <CardTitle className="text-xl dark:text-white flex items-center">
                {data.resourceTitle ?? "📚 Resources & Lecture Code"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.d2lReference && (
                <p className="text-slate-600 dark:text-slate-300">
                  Recommended reading:{" "}
                  <a
                    href="https://d2l.ai/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={LINK_CLASSES}
                  >
                    Dive into Deep Learning
                  </a>{" "}
                  — D2L: <strong>{data.d2lReference}</strong>.
                </p>
              )}

              {data.resourceDescription && (
                <p className="text-slate-600 dark:text-slate-300">{data.resourceDescription}</p>
              )}

              {data.homeworkDescription && (
                <p className="text-slate-600 dark:text-slate-300">{data.homeworkDescription}</p>
              )}

              {data.pdfPreview && (
                <div className="pt-2">
                  <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                    {data.pdfPreview.title} preview:
                  </p>
                  <div className="rounded-lg border dark:border-white/10 overflow-hidden">
                    <iframe
                      src={data.pdfPreview.src}
                      title={data.pdfPreview.title}
                      className="w-full h-96"
                    />
                  </div>
                </div>
              )}

              {data.readings && data.readings.length > 0 && (
                <div className="space-y-1 text-slate-600 dark:text-slate-300">
                  <p className="font-medium">Suggested reading:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    {data.readings.map((reading) => (
                      <li key={reading.url}>
                        <a
                          href={reading.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={LINK_CLASSES}
                        >
                          {reading.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {data.colabLinks && data.colabLinks.length > 0 && (
                <ColabButtons links={data.colabLinks} />
              )}
            </CardContent>
          </Card>
        )}

        {/* Extra sections (e.g., Gemma fine-tuning) */}
        {data.extraSections?.map((section, index) => (
          <Card key={index} className={CARD_CLASSES}>
            <CardHeader>
              <CardTitle className="text-xl dark:text-white flex items-center">
                {section.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.description && (
                <p className="text-slate-600 dark:text-slate-300">{section.description}</p>
              )}
              <div className="grid gap-2">
                {section.links.map((link) => (
                  <Button key={link.url} asChild variant={link.variant ?? "default"}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        <ModulePager current={data.moduleNumber} />
      </div>
    </div>
  )
}
