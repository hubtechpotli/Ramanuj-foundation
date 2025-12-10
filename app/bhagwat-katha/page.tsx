import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Calendar, MapPin, Users, Phone, MessageCircle } from "lucide-react"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import Image from "next/image"

export default function BhagwatKathaPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Authentic Scriptures",
      description: "Traditional recitation from Shreemad Bhagwatam",
    },
    {
      icon: Users,
      title: "Experienced Kathakar",
      description: "Learned scholars with deep spiritual knowledge",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Organize according to your preferred dates",
    },
    {
      icon: MapPin,
      title: "Any Location",
      description: "We come to your venue anywhere in Haryana",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-8 md:py-12 lg:py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-4">Shreemad Bhagwat Katha</h1>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-2">
              Experience the divine wisdom and spiritual bliss of Bhagwat Katha
            </p>
            <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 max-w-md mx-auto">
              <CardContent className="p-4 md:p-6">
                <div className="text-center mb-3 md:mb-4">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">देवी प्रीति रामानुज जी</h3>
                  <p className="text-sm md:text-base lg:text-lg text-primary font-semibold mb-1 md:mb-2">
                    Katha karwane ke liye sampark kare
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                    Contact Devi Preety Ramanuj Ji for organizing Katha
                  </p>
                </div>
                <a
                  href="https://wa.me/919053212446?text=Namaste%20🙏%20I%20want%20to%20book%20Bhagwat%20Katha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button size="sm" className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all text-xs md:text-sm">
                    <MessageCircle className="mr-2" size={16} />
                    WhatsApp: +91 90532 12446
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Bhagwat Katha */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <ScrollAnimation direction="right" delay={0}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-2xl ring-2 md:ring-4 ring-primary/20 hover-lift">
                <Image 
                  src="/maharaj ji photo/WhatsApp Image 2025-12-04 at 13.02.44_b67265a9.jpg" 
                  alt="देवी प्रीति रामानुज जी - Devi Preety Ramanuj Ji" 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="left" delay={200}>
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6">About Bhagwat Katha</h2>
                <div className="space-y-3 md:space-y-4 text-xs md:text-sm lg:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
                  <p>
                    Shreemad Bhagwat Katha is a sacred recitation and discourse on the Bhagwat Purana, one of the most
                    revered scriptures in Hindu tradition. It narrates the divine pastimes of Lord Krishna and provides
                    profound spiritual wisdom.
                  </p>
                  <p>
                    Our foundation organizes authentic Bhagwat Katha programs conducted by learned scholars who bring
                    alive the timeless teachings through engaging storytelling and deep spiritual insights.
                  </p>
                  <p>
                    Whether for family celebrations, community gatherings, or spiritual events, we help you organize
                    memorable Bhagwat Katha programs that inspire and transform.
                  </p>
                </div>
                
                {/* Contact Information */}
                <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">देवी प्रीति रामानुज जी</h3>
                      <p className="text-lg text-primary font-semibold mb-4">
                        Katha karwane ke liye sampark kare
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Contact Devi Preety Ramanuj Ji for organizing Katha
                      </p>
                    </div>
                    <a
                      href="https://wa.me/919053212446?text=Namaste%20🙏%20I%20want%20to%20book%20Bhagwat%20Katha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all">
                        <MessageCircle className="mr-2" size={20} />
                        WhatsApp: +91 90532 12446
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 md:mb-8 lg:mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="p-4 md:p-6 text-center">
                  <feature.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary mx-auto mb-3 md:mb-4" />
                  <h3 className="text-sm md:text-base font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">Book Bhagwat Katha</CardTitle>
              <p className="text-xs md:text-sm text-center text-muted-foreground mt-2">
                Fill in your details and we'll get in touch with you
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 md:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="name" className="text-xs md:text-sm">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="mt-2 text-sm md:text-base" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" className="mt-2 text-sm md:text-base" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-xs md:text-sm">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" className="mt-2 text-sm md:text-base" />
                </div>

                <div>
                  <Label htmlFor="location" className="text-xs md:text-sm">Event Location</Label>
                  <Input id="location" placeholder="City, Village, or Address" className="mt-2 text-sm md:text-base" />
                </div>

                <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <Label htmlFor="date" className="text-xs md:text-sm">Preferred Date</Label>
                    <Input id="date" type="date" className="mt-2 text-sm md:text-base" />
                  </div>
                  <div>
                    <Label htmlFor="duration" className="text-xs md:text-sm">Duration (Days)</Label>
                    <Input id="duration" type="number" placeholder="e.g., 7" className="mt-2 text-sm md:text-base" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-xs md:text-sm">Additional Details</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your event, expected attendees, special requirements, etc."
                    className="mt-2 min-h-[80px] md:min-h-[100px] text-sm md:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm"
                  size="default"
                >
                  <Phone className="mr-2" size={16} />
                  Submit Request
                </Button>

                <div className="text-center">
                  <p className="text-xs md:text-sm text-muted-foreground mb-2">Or contact us directly on WhatsApp</p>
                  <a
                    href="https://wa.me/919053212446?text=Namaste%20🙏%20I%20want%20to%20book%20Bhagwat%20Katha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button variant="outline" className="w-full gap-2 bg-transparent border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white text-xs md:text-sm">
                      <MessageCircle size={14} />
                      WhatsApp: +91 90532 12446
                    </Button>
                  </a>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
