"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function QRBanner() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if banner was closed in this session
    const bannerClosed = sessionStorage.getItem('qr-banner-closed')
    if (!bannerClosed) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Store in sessionStorage so it doesn't show again in this session
    sessionStorage.setItem('qr-banner-closed', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 animate-in fade-in duration-300">
      <div className="relative bg-background rounded-lg shadow-2xl max-w-md w-full mx-4 border-2 border-primary/20 animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleClose}
          className="absolute -top-3 -right-3 z-10 h-10 w-10 rounded-full bg-background border-2 border-primary/20 shadow-lg hover:bg-primary/10 hover:border-primary/50 transition-all"
          aria-label="Close banner"
        >
          <X className="h-5 w-5 text-foreground" />
        </Button>

        {/* QR Code Image */}
        <div className="relative w-full h-auto rounded-lg overflow-hidden">
          <Image
            src="/Payment/WhatsApp Image 2025-12-10 at 12.19.10_67ac99e5.jpg"
            alt="Payment QR Code - Scan to Donate"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Optional: Add a small text below */}
        <div className="p-4 text-center bg-primary/5 border-t border-border/50">
          <p className="text-sm font-semibold text-foreground mb-1">Scan to Donate</p>
          <p className="text-xs text-muted-foreground">Support our mission with your contribution</p>
        </div>
      </div>
    </div>
  )
}

