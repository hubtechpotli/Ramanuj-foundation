import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t-2 border-border/50">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-base md:text-lg lg:text-xl mb-3 md:mb-4 text-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ramanuj Sewa Foundation
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-3 md:mb-4">
              करुणा और सांस्कृतिक मूल्यों के माध्यम से मानवता की सेवा। वंचित परिवारों का समर्थन, शिक्षा को बढ़ावा देना, और गायों की रक्षा करना।
            </p>
            <p className="text-primary font-semibold text-xs md:text-sm">सेवा ही धर्म है</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4 text-foreground">त्वरित लिंक</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  हमारी सेवाएं
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">
                  दान करें
                </Link>
              </li>
              <li>
                <Link href="/bhagwat-katha" className="text-sm text-muted-foreground hover:text-primary">
                  भागवत कथा
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4 text-foreground">हमारी सेवाएं</h3>
            <ul className="space-y-1.5 md:space-y-2">
              <li className="text-xs md:text-sm text-muted-foreground">गौ सेवा</li>
              <li className="text-xs md:text-sm text-muted-foreground">कन्या विवाह सहायता</li>
              <li className="text-xs md:text-sm text-muted-foreground">गुरुकुल शिक्षा</li>
              <li className="text-xs md:text-sm text-muted-foreground">स्वास्थ्य शिविर</li>
            </ul>
          </div>

          {/* Contact & Payment QR */}
          <div>
            <h3 className="font-bold text-sm md:text-base lg:text-lg mb-3 md:mb-4 text-foreground">संपर्क करें</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Haryana, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <a
                  href="https://wa.me/919053212446"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline flex items-center gap-2"
                >
                  +91 90532 12446
                  <span className="text-xs bg-[#25D366] text-white px-2 py-0.5 rounded-full">WhatsApp</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <span>info@ramanujsewa.org</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/share/1A1nedNctp/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/preety_ramanuj_ji?utm_source=qr&igsh=azNwbmMwNXF0Z2px" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram size={20} />
              </a>
              <a href="https://youtube.com/@devi_preety_ramanuj?si=segdtk-mieqenWDF" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Youtube size={20} />
              </a>
            </div>
            
            {/* Payment QR Code */}
            <div className="mt-4 md:mt-6">
              <h3 className="font-bold text-sm md:text-base lg:text-lg mb-2 md:mb-3 text-foreground">QR कोड से दान करें</h3>
              <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-lg overflow-hidden shadow-lg border-2 border-primary/20 bg-white p-2">
                <Image
                  src="/Payment/WhatsApp Image 2025-12-09 at 15.32.00_c0b88593.jpg"
                  alt="Payment QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                स्कैन करके दान करें
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border/50 mt-6 md:mt-12 pt-4 md:pt-8 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} रामानुज सेवा फाउंडेशन। सभी अधिकार सुरक्षित।
          </p>
          <p className="text-xs md:text-sm text-primary mt-2 font-medium">
            🙏 सेवा के लिए बनाया गया | भक्ति के साथ सेवा
          </p>
        </div>
      </div>
    </footer>
  )
}
