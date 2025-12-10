"use client"

import { useEffect, useRef, useState } from "react"

export function GauSewaVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Try to play the video
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video autoplay prevented:", error)
        })
      }

      // Handle video load errors
      video.addEventListener('error', (e) => {
        console.error("Video error:", e)
        setVideoError(true)
      })

      video.addEventListener('loadeddata', () => {
        console.log("Video loaded successfully")
        setVideoError(false)
      })
    }
  }, [])

  // Video path - Next.js public folder paths don't need encoding for special chars
  const videoPath = "/Gau seva/Gau mata video _ gaushala #priyanshfunnycartoons #gaushala #gaumata #cow.mp4"

  return (
    <div className="relative w-full aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden" style={{ minHeight: '400px' }}>
      <video
        ref={videoRef}
        src={videoPath}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        style={{ 
          display: 'block', 
          width: '100%', 
          height: '100%',
          backgroundColor: 'transparent'
        }}
        onError={(e) => {
          console.error("Video failed to load:", e)
          setVideoError(true)
        }}
        onLoadedData={() => {
          console.log("Video loaded successfully")
          setVideoError(false)
        }}
      >
        Your browser does not support the video tag.
      </video>
      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
          <p className="text-muted-foreground">Video unavailable</p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none"></div>
    </div>
  )
}

