"use client"

import { MessageCircle, X, Heart, Users, BookOpen, Stethoscope, Phone } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Heart, label: "Donate for Gau Sewa", message: "I want to donate for Gau Sewa" },
    { icon: Users, label: "Support Girls' Marriage", message: "I want to support girls' marriage" },
    { icon: BookOpen, label: "Join Gurukul", message: "I want to know about Gurukul programs" },
    { icon: Stethoscope, label: "Health Camps", message: "I want information about health camps" },
    { icon: Phone, label: "Contact for Bhagwat Katha", message: "I want to book Bhagwat Katha" },
  ]

  const handleMenuClick = (message: string) => {
    const whatsappNumber = "919053212446" // +91 90532 12446
    const encodedMessage = encodeURIComponent(`Namaste 🙏 ${message}`)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 p-4 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-foreground">Ramanuj Sewa Foundation</h3>
              <p className="text-xs text-muted-foreground">Serving Humanity & Gau Mata</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuClick(item.message)}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left"
              >
                <item.icon size={20} className="text-primary flex-shrink-0" />
                <span className="text-sm text-foreground">{item.label}</span>
              </button>
            ))}
          </div>
        </Card>
      )}

      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-2xl bg-[#25D366] hover:bg-[#20BA5A] text-white"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
    </div>
  )
}
