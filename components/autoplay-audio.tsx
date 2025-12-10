"use client"

import { useEffect, useRef } from 'react'

export function AutoplayAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const hasStartedRef = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Function to start audio playback
    const startAudio = async () => {
      if (hasStartedRef.current) return
      
      try {
        await audio.play()
        hasStartedRef.current = true
        // Remove all event listeners after starting
        document.removeEventListener('click', startAudio)
        document.removeEventListener('touchstart', startAudio)
        document.removeEventListener('keydown', startAudio)
      } catch (error) {
        // If autoplay fails, wait for user interaction
        console.log('Audio autoplay prevented, waiting for user interaction')
      }
    }

    // Try to start immediately (may fail due to browser policies)
    startAudio()

    // Add event listeners for first user interaction
    document.addEventListener('click', startAudio, { once: true })
    document.addEventListener('touchstart', startAudio, { once: true })
    document.addEventListener('keydown', startAudio, { once: true })

    // Cleanup function
    return () => {
      document.removeEventListener('click', startAudio)
      document.removeEventListener('touchstart', startAudio)
      document.removeEventListener('keydown', startAudio)
    }
  }, [])

  return (
    <audio
      ref={audioRef}
      src="/Sweet Krishna Flute Music  Meditation Music  Relaxing Music  Melodious Music.mp3"
      loop
      preload="auto"
      className="hidden"
      aria-hidden="true"
    />
  )
}

