"use client"

import { useEffect, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function ImpactCounter() {
  const stats = [
    { value: 500, suffix: "+", label: "Cows Rescued" },
    { value: 200, suffix: "+", label: "Students Supported" },
    { value: 50, suffix: "+", label: "Health Camps" },
    { value: 100, suffix: "+", label: "Marriages Supported" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
            <Counter end={stat.value} suffix={stat.suffix} />
          </p>
          <p className="text-sm text-muted-foreground">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
