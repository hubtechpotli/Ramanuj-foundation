import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { PaymentQRSection } from "@/components/payment-qr-section"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, GraduationCap, Eye, Droplet, Cog as Cow, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services: Array<{
    icon: any
    title: string
    description: string
    details: string[]
    image: string
    gallery?: string[]
  }> = [
    {
      icon: Heart,
      title: "Girls' Marriage Assistance",
      description: "Supporting underprivileged families in providing dignified marriages for their daughters.",
      details: [
        "Financial assistance for marriage expenses",
        "Help with wedding arrangements",
        "Support for essential household items",
        "Guidance and counseling for families",
      ],
      image: "/girl marriage/image.png",
      gallery: [
        "/girl marriage/image.png",
        "/girl marriage/a.png",
        "/girl marriage/b.png",
        "/girl marriage/c.png",
      ],
    },
    {
      icon: GraduationCap,
      title: "Gurukuls & Value-Based Education",
      description: "Traditional education system combining spiritual wisdom with modern learning.",
      details: [
        "Vedic studies and spiritual teachings",
        "Modern academic curriculum",
        "Character building and moral values",
        "Scholarships for deserving students",
      ],
      image: "/images/gurukul-teaching.png",
    },
    {
      icon: Eye,
      title: "Eye Check-up Camps",
      description: "Free eye examinations and treatment for rural and underserved communities.",
      details: [
        "Comprehensive eye examinations",
        "Free spectacles for those in need",
        "Cataract surgery arrangements",
        "Awareness about eye health",
      ],
      image: "/eye-checkup-medical-camp-village.jpg",
    },
    {
      icon: Droplet,
      title: "Blood Donation Drives",
      description: "Organizing blood donation camps to support those in medical need.",
      details: [
        "Regular blood donation camps",
        "Safe and hygienic collection process",
        "Collaboration with hospitals and blood banks",
        "Emergency blood requirement support",
      ],
      image: "/images/blood-donation.png",
    },
    {
      icon: Cow,
      title: "Cow Shelter / Gau Sewa",
      description: "Comprehensive care and protection for abandoned and injured cows.",
      details: [
        "Safe shelter for rescued cows",
        "Nutritious food and clean water",
        "Veterinary care and treatment",
        "Loving environment for cow welfare",
      ],
      image: "/Gau seva/gaushala.png",
      gallery: [
        "/Gau seva/gaushala.png",
        "/Gau seva/Gausevamatavya.png",
        "/Gau seva/fhhfhf.png",
        "/Gau seva/ghdh.png",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative spiritual-gradient py-8 md:py-12 lg:py-16 xl:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Our Services
          </h1>
          <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4 md:mb-6"></div>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            Transforming lives through compassionate service and cultural values
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`relative h-48 md:h-64 lg:h-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className={`p-4 md:p-6 lg:p-8 xl:p-12 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <service.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-3 md:mb-4" />
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">{service.title}</h2>
                      <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                      <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 md:gap-3">
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm lg:text-base text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/donate">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm">
                          Support This Cause
                          <Heart className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  {/* Image Gallery for Gau Sewa */}
                  {service.title === "Cow Shelter / Gau Sewa" && service.gallery && (
                    <div className="p-4 md:p-6 lg:p-8 bg-muted/50">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Gau Sewa Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {service.gallery.map((img, imgIndex) => (
                          <div key={imgIndex} className="relative h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                            <Image
                              src={img}
                              alt={`Gau Sewa ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {/* Image Gallery for Girls' Marriage Assistance */}
                  {service.title === "Girls' Marriage Assistance" && service.gallery && (
                    <div className="p-4 md:p-6 lg:p-8 bg-muted/50">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-4 md:mb-6 text-center">Girls' Marriage Support Gallery</h3>
                      <p className="text-xs md:text-sm lg:text-base text-center text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto px-2">
                        Supporting underprivileged families in arranging dignified marriages for their daughters. Every contribution helps create beautiful memories.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
                        {service.gallery.map((img, imgIndex) => (
                          <div key={imgIndex} className="relative h-40 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                            <Image
                              src={img}
                              alt={`Girls' Marriage Support ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4">Make a Difference Today</h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto opacity-90 px-2">
            Your contribution can help us expand our services and reach more people in need
          </p>
          <Link href="/donate">
            <Button size="lg" variant="secondary">
              Donate Now
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
