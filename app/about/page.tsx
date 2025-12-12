import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { PaymentQRSection } from "@/components/payment-qr-section"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Lightbulb, Award, Shield } from "lucide-react"
import Image from "next/image"
import { ScrollAnimation } from "@/components/animations/scroll-animation"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-3 md:mb-4">About Us</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center text-muted-foreground max-w-3xl mx-auto px-2">
            Dedicated to serving humanity with compassion and cultural values
          </p>
        </div>
      </section>

      {/* Preface Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="relative h-[250px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/spiritual-teaching.png" alt="Spiritual Teaching" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">Preface</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                <p>
                  Ramanuj Sewa Foundation was established in 2022 with a vision to serve humanity and protect our sacred
                  cows. Our foundation is rooted in the timeless values of compassion, service, and cultural
                  preservation.
                </p>
                <p>
                  We believe that true service comes from the heart and is guided by the principle of "सेवा ही धर्म है"
                  (Service is the highest duty). Through our various initiatives, we aim to uplift the underprivileged,
                  preserve traditional education, promote health and wellness, and protect cows.
                </p>
                <p>
                  Every day, we work towards creating a society where no one is left behind, where cultural values are
                  cherished, and where every life - human and animal - is treated with dignity and respect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Another Folder Images */}
      <section className="w-full py-0 bg-background">
        <div className="w-full">
          <ScrollAnimation direction="up" delay={0}>
            <div className="relative w-full h-auto">
              <Image
                src="/another folder/image.png"
                alt="Gallery Image"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <Eye className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Vision</h3>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  To create a compassionate society where every individual has access to education, healthcare, and
                  dignity, while preserving our cultural heritage and protecting all living beings, especially our
                  sacred cows.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 md:p-6 lg:p-8">
                <Target className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Mission</h3>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed">
                  To serve underprivileged families through girls' marriage support, provide value-based education
                  through Gurukuls, conduct free health camps, and maintain well-equipped gau shalas for the welfare of
                  cows.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 md:mb-8 lg:mb-12">Problem → Solution</h2>
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <Card>
              <CardContent className="p-4 md:p-6">
                <h4 className="font-bold text-base md:text-lg text-foreground mb-1 md:mb-2">Problem:</h4>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-3 md:mb-4">
                  Many underprivileged families struggle to arrange marriages for their daughters due to financial
                  constraints.
                </p>
                <h4 className="font-bold text-base md:text-lg text-primary mb-1 md:mb-2">Our Solution:</h4>
                <p className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  We provide financial assistance and support to ensure dignified marriages, helping families celebrate
                  this important milestone without burden.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Problem:</h4>
                <p className="text-muted-foreground mb-4">
                  Modern education often neglects cultural values and spiritual wisdom, leading to a disconnect from our
                  heritage.
                </p>
                <h4 className="font-bold text-lg text-primary mb-2">Our Solution:</h4>
                <p className="text-muted-foreground">
                  Our Gurukul programs blend traditional value-based education with modern learning, nurturing
                  well-rounded individuals grounded in cultural wisdom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Problem:</h4>
                <p className="text-muted-foreground mb-4">
                  Rural communities lack access to basic healthcare services, leading to preventable health issues.
                </p>
                <h4 className="font-bold text-lg text-primary mb-2">Our Solution:</h4>
                <p className="text-muted-foreground">
                  We organize regular health camps including eye check-ups and blood donation drives, bringing essential
                  healthcare to underserved areas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-lg text-foreground mb-2">Problem:</h4>
                <p className="text-muted-foreground mb-4">
                  Abandoned and injured cows suffer without proper shelter, food, or medical care.
                </p>
                <h4 className="font-bold text-lg text-primary mb-2">Our Solution:</h4>
                <p className="text-muted-foreground">
                  Our gau shalas provide comprehensive care including shelter, nutritious food, and veterinary treatment
                  for rescued cows, ensuring their well-being and dignity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Girls' Marriage Support Gallery Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-3 md:mb-4">Girls' Marriage Support</h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Supporting underprivileged families in arranging dignified marriages for their daughters. Every contribution helps create beautiful memories and ensures no family struggles alone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/girl marriage/image.png"
                alt="Girls' Marriage Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/girl marriage/a.png"
                alt="Marriage Support Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/girl marriage/b.png"
                alt="Wedding Ceremony Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/girl marriage/c.png"
                alt="Marriage Assistance"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              We provide financial assistance, help with wedding arrangements, and support for essential household items. Our goal is to ensure every daughter gets a dignified marriage, regardless of her family's financial situation.
            </p>
          </div>
        </div>
      </section>

      {/* Gau Sewa Gallery Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-3 md:mb-4">Gau Sewa - Our Cow Shelter</h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
              Providing compassionate care and protection for our sacred cows. See our gau shala facilities and the loving environment we create for rescued cows.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/Gau seva/gaushala.png"
                alt="Gau Shala - Cow Shelter"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/Gau seva/Gausevamatavya.png"
                alt="Gau Seva Matavya"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/Gau seva/fhhfhf.png"
                alt="Gau Seva Activities"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <Image
                src="/Gau seva/ghdh.png"
                alt="Gau Seva Care"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Our gau shalas are equipped with modern facilities, providing safe shelter, nutritious food, clean water, and comprehensive veterinary care. We ensure every cow receives the love, respect, and care they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Registration Certificate Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="w-12 h-12 text-primary" />
                <Award className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Government Approved & Registered</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Ramanuj Sewa Foundation is a legally registered charitable organization, approved by the government. 
                We operate with complete transparency and compliance with all regulatory requirements.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={200}>
            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="relative w-full h-auto min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-primary/5 to-accent/5">
                  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
                    <div className="relative w-full max-w-4xl mx-auto">
                      <Image
                        src="/Certificate/image.png"
                        alt="Ramanuj Sewa Foundation - Government Registration Certificate"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-lg shadow-xl object-contain"
                        priority
                      />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6 bg-card border-t border-border/50">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Registered Foundation</h3>
                      <p className="text-sm text-muted-foreground">
                        Legally registered and government approved charitable organization
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Award className="w-5 h-5" />
                      <span>Verified & Trusted</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* QR Code Full Width Section */}
      <section className="w-full py-8 md:py-12 bg-background">
        <div className="w-full">
          <div className="relative w-full h-auto">
            <Image
              src="/Payment/WhatsApp Image 2025-12-10 at 12.19.10_67ac99e5.jpg"
              alt="Payment QR Code - Scan to Donate"
              width={1200}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Leadership & Recognition Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Leadership & Recognition</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our foundation is honored to be recognized by esteemed leaders and dignitaries
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Photo 1: Haryana State President */}
            <ScrollAnimation direction="up" delay={200}>
              <div className="w-full">
                <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/maharaj ji photo/WhatsApp Image 2025-12-10 at 12.20.06_c9d2bde7.jpg"
                    alt="हरियाणा प्रदेश अध्यक्ष मोहनलाल बडोली जी के साथ देवी प्रीति रामानुज जी"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                    <p className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-lg">
                      हरियाणा प्रदेश अध्यक्ष मोहनलाल बडोली जी के साथ देवी प्रीति रामानुज जी
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Photo 2: Dr. Arvind Sharma MLA */}
            <ScrollAnimation direction="up" delay={400}>
              <div className="w-full">
                <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/maharaj ji photo/WhatsApp Image 2025-12-10 at 12.20.45_d28d21bb.jpg"
                    alt="डॉ अरविंद शर्मा विधायक के साथ देवी प्रीति रामानुज जी"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6">
                    <p className="text-white text-lg md:text-xl font-semibold text-center drop-shadow-lg">
                      डॉ अरविंद शर्मा विधायक के साथ देवी प्रीति रामानुज जी
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">Our unique approach to service and compassion</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Holistic Approach</h4>
                <p className="text-sm text-muted-foreground">
                  We don't just address symptoms - we tackle root causes by combining spiritual wisdom with practical
                  solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Cultural Values</h4>
                <p className="text-sm text-muted-foreground">
                  Every initiative is grounded in traditional Indian values while embracing modern methods and best
                  practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Transparent Operations</h4>
                <p className="text-sm text-muted-foreground">
                  We maintain complete transparency in our operations, ensuring donors know exactly how their
                  contributions are making an impact.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-2">Community-Driven</h4>
                <p className="text-sm text-muted-foreground">
                  We work closely with local communities, understanding their unique needs and empowering them to
                  participate in their own development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Support Our Mission
            </h2>
            <div className="w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-muted-foreground">Your contribution helps us continue our seva</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <PaymentQRSection />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
