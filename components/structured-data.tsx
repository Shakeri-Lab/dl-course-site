import { modules, type ModuleData } from "@/lib/module-data"
import { siteConfig } from "@/lib/site-config"

function JsonLd({ data }: { data: object }) {
  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

const provider = {
  "@type": "CollegeOrUniversity",
  name: "University of Virginia, School of Data Science",
  sameAs: "https://datascience.virginia.edu/",
}

const instructor = {
  "@type": "Person",
  name: siteConfig.instructor.name,
  url: siteConfig.instructor.url,
}

// schema.org/Course markup for the homepage — enables course rich results.
export function CourseJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: `${siteConfig.courseCode}: ${siteConfig.courseName}`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    provider,
    instructor,
    isAccessibleForFree: true,
    educationalLevel: "Graduate",
    inLanguage: "en",
    teaches: Object.values(modules).map((m) => m.metadata.title.replace(/^Module \d+ – /, "")),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT6H",
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
  }
  return <JsonLd data={data} />
}

// VideoObject per lecture + BreadcrumbList for a module page.
export function ModuleJsonLd({ data }: { data: ModuleData }) {
  const pageUrl = `${siteConfig.url}/module/${data.moduleNumber}/`
  const videos = data.lectures
    .filter((lecture) => lecture.videoId)
    .map((lecture) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: lecture.title,
      description: lecture.description ?? data.metadata.description,
      thumbnailUrl: `https://i.ytimg.com/vi/${lecture.videoId}/hqdefault.jpg`,
      embedUrl: `https://www.youtube.com/embed/${lecture.videoId}`,
      contentUrl: `https://www.youtube.com/watch?v=${lecture.videoId}`,
      publisher: provider,
    }))
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Modules", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: data.metadata.title, item: pageUrl },
    ],
  }
  return (
    <>
      <JsonLd data={breadcrumb} />
      {videos.map((video, index) => (
        <JsonLd key={index} data={video} />
      ))}
    </>
  )
}
