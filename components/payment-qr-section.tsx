"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, Phone, Youtube, Facebook, Instagram, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { toast } from "sonner"

export function PaymentQRSection() {
  const [copied, setCopied] = useState<string | null>(null)

  const bankDetails = {
    bankName: "IDBI Bank",
    accountNumber: "0729102000004930",
    ifscCode: "IBKL0000729",
    accountHolder: "Ramanuj Sewa Foundation (Regd.)",
  }

  const contactNumbers = [
    { number: "9053212446", whatsapp: "919053212446", isPrimary: true },
    { number: "8572865019", whatsapp: "918572865019", isPrimary: false }
  ]
      const socialMedia = {
        youtube: [
          { name: "Devi Preety Ramanuj", url: "https://youtube.com/@devi_preety_ramanuj?si=segdtk-mieqenWDF" },
          { name: "Bhajan Sadhana", url: "https://youtube.com/@devi_preety_ramanuj?si=segdtk-mieqenWDF" },
        ],
        facebook: "https://www.facebook.com/share/1A1nedNctp/",
        instagram: "https://www.instagram.com/preety_ramanuj_ji?utm_source=qr&igsh=azNwbmMwNXF0Z2px",
      }

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      toast.success(`${label} copied to clipboard!`)
      setTimeout(() => setCopied(null), 2000)
    } catch (error) {
      toast.error("Failed to copy")
    }
  }

  const whatsappMessage = encodeURIComponent(
    `नमस्ते 🙏\n\nमैंने रामानुज सेवा फाउंडेशन को दान किया है। कृपया मुझे receipt भेजें।\n\nधन्यवाद!`
  )

  return (
    <div className="space-y-4 md:space-y-6">
      {/* QR Code Section - Prominent */}
      <Card className="border-2 border-primary/30 shadow-2xl">
        <CardHeader className="p-4 md:p-6 bg-gradient-to-r from-primary/10 to-accent/5">
          <CardTitle className="text-xl md:text-2xl lg:text-3xl text-center text-foreground font-bold">
            📱 QR Code से दान करें
          </CardTitle>
          <p className="text-center text-sm md:text-base text-primary font-semibold mt-2">
            जय गुरुदेव !! गो सेवा ही, गोपाल सेवा है। 🙏
          </p>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6 p-4 md:p-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-2xl border-4 border-primary/30 bg-white p-3">
              <Image
                src="/Payment/WhatsApp Image 2025-12-09 at 15.32.00_c0b88593.jpg"
                alt="Payment QR Code"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Quick WhatsApp Share Button */}
            <a
              href={`https://wa.me/919053212446?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-md inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm md:text-base px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              Payment Screenshot Share करें - Receipt के लिए
            </a>
          </div>
          
          <div className="bg-primary/5 rounded-lg p-3 md:p-4 text-center border border-primary/20">
            <p className="text-xs md:text-sm text-muted-foreground mb-2">
              गौ मात्र माता ही नहीं, अपितु सम्पूर्ण मनोवृत्तियों की दाता भी है।
            </p>
            <p className="text-xs md:text-sm font-semibold text-foreground">
              आप अपने या अपने माता पिता एवं अपने पूर्वजों के नाम से गौशाला में दान देकर पुण्य के भागीदार बन सकते हैं।
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Bank Details Section */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl lg:text-2xl text-center text-foreground">
            Bank Account Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
          <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-lg p-4 md:p-6 space-y-3 md:space-y-4">
            <div>
              <label className="text-xs md:text-sm font-semibold text-muted-foreground">Account Holder Name</label>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm md:text-base lg:text-lg font-bold text-foreground break-all pr-2">{bankDetails.accountHolder}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.accountHolder, "Account Name")}
                  className="h-8 w-8 p-0"
                >
                  {copied === "Account Name" ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-muted-foreground">Bank Name</label>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm md:text-base lg:text-lg font-semibold text-foreground">{bankDetails.bankName}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.bankName, "Bank Name")}
                  className="h-8 w-8 p-0"
                >
                  {copied === "Bank Name" ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-muted-foreground">Account Number</label>
              <div className="flex items-center justify-between mt-1">
                <p className="text-base md:text-lg lg:text-xl font-bold text-primary font-mono break-all pr-2">{bankDetails.accountNumber}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.accountNumber, "Account Number")}
                  className="h-8 w-8 p-0"
                >
                  {copied === "Account Number" ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>

            <div>
              <label className="text-xs md:text-sm font-semibold text-muted-foreground">IFSC Code</label>
              <div className="flex items-center justify-between mt-1">
                <p className="text-base md:text-lg lg:text-xl font-bold text-primary font-mono break-all pr-2">{bankDetails.ifscCode}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(bankDetails.ifscCode, "IFSC Code")}
                  className="h-8 w-8 p-0"
                >
                  {copied === "IFSC Code" ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Contact & Social Media */}
      <Card className="border-2 border-primary/20">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl lg:text-2xl text-center text-foreground">Contact & Social Media</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
          {/* Contact Numbers */}
          <div>
            <label className="text-xs md:text-sm font-semibold text-muted-foreground mb-2 block">Contact Numbers</label>
            <div className="space-y-2">
              {contactNumbers.map((contact, index) => (
                <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg p-2 md:p-3">
                  <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <a
                        href={`https://wa.me/${contact.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm md:text-base lg:text-lg font-semibold text-foreground hover:text-primary transition-colors flex items-center gap-1 md:gap-2 break-all"
                      >
                        +91 {contact.number}
                        {contact.isPrimary && (
                          <span className="text-xs bg-[#25D366] text-white px-1.5 py-0.5 rounded-full whitespace-nowrap">WhatsApp</span>
                        )}
                      </a>
                      {contact.isPrimary && (
                        <p className="text-xs text-muted-foreground mt-1">Click to chat on WhatsApp</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(contact.number, `Phone ${index + 1}`)}
                    className="h-8 w-8 p-0"
                  >
                    {copied === `Phone ${index + 1}` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <label className="text-xs md:text-sm font-semibold text-muted-foreground mb-2 md:mb-3 block">Follow Us</label>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <a
                href={socialMedia.youtube[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg p-2 md:p-3 transition-colors border border-red-500/20"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5 text-red-500 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground">YouTube</span>
              </a>
              <a
                href={socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-lg p-2 md:p-3 transition-colors border border-blue-500/20"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5 text-blue-500 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground">Facebook</span>
              </a>
              <a
                href={socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 md:gap-2 bg-pink-500/10 hover:bg-pink-500/20 rounded-lg p-2 md:p-3 transition-colors border border-pink-500/20"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5 text-pink-500 flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground">Instagram</span>
              </a>
              <div className="bg-muted/50 rounded-lg p-2 md:p-3 flex items-center gap-1.5 md:gap-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <span className="text-xs md:text-sm font-medium text-foreground">Haryana, India</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

