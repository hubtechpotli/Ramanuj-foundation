import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DonationFormPublic } from "@/components/donation-form-public"
import { PaymentQRSection } from "@/components/payment-qr-section"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { FloatingParticles } from "@/components/animations/floating-particles"
import { Cog as Cow, Users, BookOpen, Stethoscope, Sparkles } from "lucide-react"

export default function DonatePage() {
  const donationTypes = [
    {
      icon: Cow,
      title: "Gau Sewa Donation",
      description: "Support cow shelter, food, and medical care",
      suggested: [500, 1000, 2000, 5000],
    },
    {
      icon: Users,
      title: "Girl Marriage Support",
      description: "Help families arrange dignified marriages",
      suggested: [2000, 5000, 10000, 25000],
      image: "/girl marriage/image.png",
    },
    {
      icon: BookOpen,
      title: "Gurukul Donation",
      description: "Support value-based education programs",
      suggested: [1000, 2500, 5000, 10000],
    },
    {
      icon: Stethoscope,
      title: "Health Camps Donation",
      description: "Fund eye check-ups and blood donation camps",
      suggested: [500, 1000, 2500, 5000],
    },
    {
      icon: Sparkles,
      title: "General Donation",
      description: "Support all foundation activities",
      suggested: [500, 1000, 2500, 5000],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative primary-gradient text-primary-foreground py-6 md:py-8 lg:py-12 overflow-hidden animate-gradient">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] animate-gradient" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="inline-block mb-3 md:mb-4 fade-in">
              <span className="text-3xl md:text-4xl lg:text-5xl animate-pulse">🙏</span>
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 md:mb-4 fade-in" style={{ animationDelay: '0.2s' }}>
              दान करें - Make a Donation
            </h1>
            <p className="text-xs md:text-sm lg:text-base opacity-95 max-w-2xl mx-auto leading-relaxed fade-in px-2" style={{ animationDelay: '0.4s' }}>
              आपका योगदान जीवन बदलता है। हर रुपया किसी की यात्रा में फर्क लाता है।
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Quick Donation - QR Code First */}
      <section className="py-6 md:py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up" delay={0}>
            <div id="payment-section" className="max-w-4xl mx-auto scroll-mt-20">
              <PaymentQRSection />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-8 md:py-12 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                Choose Your Cause
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">Select a cause close to your heart</p>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 lg:mb-16">
            {donationTypes.map((type, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 overflow-hidden hover-lift card-3d animated-border">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/5 p-4 md:p-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-primary-gradient flex items-center justify-center mb-3 md:mb-4 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 glow-primary">
                        <type.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                        {type.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 leading-relaxed">{type.description}</p>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {type.suggested.map((amount) => (
                          <span key={amount} className="px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-primary/10 text-primary font-semibold text-xs md:text-sm rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:scale-105 transition-all">
                            ₹{amount.toLocaleString()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          {/* Donation Form - Optional for Receipt */}
          <ScrollAnimation direction="up" delay={400}>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">
                  Receipt के लिए Details भरें (Optional)
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Payment screenshot WhatsApp पर share करें | Receipt के लिए details भरें
                </p>
              </div>
              <DonationFormPublic />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Receipt Information */}
      <section className="py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">After Your Donation</h2>
            <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground">What happens next?</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl transform hover:-translate-y-1">
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">1</span>
                </div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">Instant Receipt</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Get an auto-generated PDF receipt immediately after payment</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl transform hover:-translate-y-1">
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">2</span>
                </div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">Email & WhatsApp</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Receipt automatically sent to your email and WhatsApp</p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl transform hover:-translate-y-1">
              <CardContent className="p-4 md:p-6 lg:p-8 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">3</span>
                </div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3">Track Donations</h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Access your complete donation history anytime in your dashboard</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
