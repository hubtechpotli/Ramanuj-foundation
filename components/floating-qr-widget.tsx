"use client"

import { useState } from "react"
import { X, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { PaymentQRSection } from "@/components/payment-qr-section"

export function FloatingQRWidget() {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    return (
      <div className="fixed bottom-4 right-4 z-50 w-full max-w-md animate-in slide-in-from-bottom-5">
        <Card className="border-2 border-primary shadow-2xl max-h-[90vh] overflow-y-auto">
          <CardHeader className="sticky top-0 bg-background z-10 border-b flex flex-row items-center justify-between space-y-0 pb-4">
            <CardTitle className="text-xl">Donate Now</CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex justify-center mb-4">
              <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20">
                <Image
                  src="/Payment/WhatsApp Image 2025-12-09 at 15.32.00_c0b88593.jpg"
                  alt="Payment QR Code"
                  fill
                  className="object-contain bg-white p-2"
                />
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Bank: IDBI Bank</p>
                <p className="font-mono font-bold text-primary">0729102000004930</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground mb-1">IFSC: IBKL0000729</p>
              </div>
              <p className="text-xs text-muted-foreground text-center pt-2 border-t">
                Scan QR or transfer to bank account
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Button
      onClick={() => setIsOpen(true)}
      className="fixed bottom-4 right-4 z-50 h-16 w-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl hover:shadow-primary/50 transition-all transform hover:scale-110"
      size="lg"
    >
      <QrCode className="h-8 w-8" />
    </Button>
  )
}

