import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center text-foreground mb-3 md:mb-4">Contact Us</h1>
          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center text-muted-foreground max-w-3xl mx-auto px-2">
            Get in touch with us for any queries, support, or collaboration opportunities
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 md:mb-6 lg:mb-8">Get In Touch</h2>
              <div className="space-y-4 md:space-y-6">
                <Card>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-foreground mb-1">Address</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">Haryana, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-foreground mb-1">Phone & WhatsApp</h3>
                        <a
                          href="https://wa.me/919053212446"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base lg:text-lg font-semibold text-primary hover:underline flex items-center gap-1 md:gap-2"
                        >
                          +91 90532 12446
                          <span className="text-xs bg-[#25D366] text-white px-1.5 py-0.5 rounded-full">WhatsApp</span>
                        </a>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">Click to chat on WhatsApp • Available 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm md:text-base text-foreground mb-1">Email</h3>
                        <p className="text-xs md:text-sm text-muted-foreground break-all">info@ramanujsewa.org</p>
                        <p className="text-xs md:text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-6 md:mt-8">
                <h3 className="font-bold text-sm md:text-base text-foreground mb-3 md:mb-4">Follow Us</h3>
                <div className="flex gap-3 md:gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="text-primary" size={18} />
                  </a>
                  <a
                    href="https://www.instagram.com/preety_ramanuj_ji?utm_source=qr&igsh=azNwbmMwNXF0Z2px"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="text-primary" size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Youtube className="text-primary" size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl lg:text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-xs md:text-sm">Full Name</Label>
                    <Input id="name" placeholder="Enter your name" className="mt-2 text-sm md:text-base" />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-xs md:text-sm">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2 text-sm md:text-base" />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" className="mt-2 text-sm md:text-base" />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-xs md:text-sm">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" className="mt-2 text-sm md:text-base" />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-xs md:text-sm">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className="mt-2 min-h-[100px] md:min-h-[120px] text-sm md:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm"
                    size="default"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-foreground mb-6 md:mb-8">Our Location</h2>
          <div className="max-w-4xl mx-auto h-[250px] md:h-[350px] lg:h-[400px] bg-background rounded-lg flex items-center justify-center">
            <p className="text-xs md:text-sm text-muted-foreground px-4">Map integration will be added with exact address</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
