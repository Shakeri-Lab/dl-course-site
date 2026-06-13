import katex from "katex"

type Segment = { type: "text" | "inline" | "display"; value: string }

// Splits a string on $$...$$ (display) and $...$ (inline) KaTeX delimiters.
function splitMath(text: string): Segment[] {
  const segments: Segment[] = []
  const pattern = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g
  let lastIndex = 0
  let match: RegExpExecArray | null
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: "text", value: text.slice(lastIndex, match.index) })
    }
    if (match[1] !== undefined) {
      segments.push({ type: "display", value: match[1] })
    } else {
      segments.push({ type: "inline", value: match[2] })
    }
    lastIndex = pattern.lastIndex
  }
  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) })
  }
  return segments
}

// Renders text with embedded LaTeX math at build time (server component).
export function MathText({ text }: { text: string }) {
  const segments = splitMath(text)
  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "text") return <span key={index}>{segment.value}</span>
        const html = katex.renderToString(segment.value, {
          displayMode: segment.type === "display",
          throwOnError: false,
        })
        return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />
      })}
    </>
  )
}
