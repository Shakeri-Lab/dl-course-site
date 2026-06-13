"use client"

import { useState } from "react"
import { Play } from "lucide-react"

// Lightweight YouTube facade: renders only a thumbnail until the user clicks,
// then swaps in the real iframe. Avoids loading the YouTube SDK for every
// embed on initial page load.
export function LiteYouTube({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: "56.25%" }}>
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute top-0 left-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute top-0 left-0 h-full w-full cursor-pointer border-0 bg-black p-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- remote thumbnail, images are unoptimized anyway */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            srcSet={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg 1280w`}
            sizes="(max-width: 896px) 100vw, 896px"
            alt={title}
            loading="lazy"
            className="absolute top-0 left-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-black/70 transition-all group-hover:scale-110 group-hover:bg-[#FF0000]/90 group-focus-visible:ring-4 group-focus-visible:ring-white/70">
              <Play className="ml-1 h-7 w-7 fill-white text-white" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
