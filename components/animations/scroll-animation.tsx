"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface ScrollAnimationProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
}

export function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "translate-y-20 opacity-0"
        case "down":
          return "-translate-y-20 opacity-0"
        case "left":
          return "translate-x-20 opacity-0"
        case "right":
          return "-translate-x-20 opacity-0"
        case "fade":
          return "opacity-0"
        default:
          return "translate-y-20 opacity-0"
      }
    }
    return "translate-y-0 translate-x-0 opacity-100"
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getDirectionClass()}`}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  )
}

