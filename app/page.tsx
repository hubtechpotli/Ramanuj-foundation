import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { PaymentQRSection } from "@/components/payment-qr-section"
import { ImpactCounter } from "@/components/impact-counter"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { FloatingParticles } from "@/components/animations/floating-particles"
import { Heart, GraduationCap, Stethoscope, Cog as Cow, ArrowRight, Sparkles, Shield, Award, Eye, Droplet, BookOpen, MessageCircle, Youtube, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: Heart,
      title: "Girls' Marriage Support",
      description: "Supporting underprivileged families in arranging dignified marriages for their daughters.",
      image: "/girl marriage/image.png",
    },
    {
      icon: GraduationCap,
      title: "Gurukul Education",
      description: "Value-based traditional education combining spiritual wisdom with modern learning.",
      image: "/images/gurukul-teaching.png",
    },
    {
      icon: Stethoscope,
      title: "Health Camps",
      description: "Free eye check-ups and blood donation drives for rural and underserved communities.",
      image: "/images/blood-donation.png",
    },
    {
      icon: Cow,
      title: "Gau Sewa",
      description: "Providing shelter, food, and medical care to abandoned and injured cows.",
      image: "/Gau seva/gaushala.png",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Modern & Spiritual Design */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[90vh] flex items-end md:items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/Gau seva/mata.png" 
            alt="Gau Mata - Cow Mother" 
            fill 
            className="object-cover object-center md:object-center" 
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/70 md:from-black/70 md:via-black/50 md:to-black/60"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,165,0,0.15),transparent_60%)]"></div>
        </div>
        
        <FloatingParticles />
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.1),transparent_50%)] animate-gradient z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,200,0,0.08),transparent_50%)] animate-gradient z-10" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 pt-32 pb-8 md:py-16 md:py-24 lg:py-32 relative z-20 w-full">
          <div className="max-w-4xl">
            <ScrollAnimation direction="right" delay={0}>
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block fade-in">
                  <span className="text-xs md:text-sm font-semibold text-primary bg-primary/20 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/30 shadow-xl text-white">
                    <Sparkles className="inline w-3 h-3 md:w-4 md:h-4 mr-2 animate-pulse" />
                    2022 से भक्ति के साथ सेवा
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight slide-up drop-shadow-2xl">
                  Ramanuj Sewa
                  <span className="block text-primary mt-1 md:mt-2 text-gradient-animate drop-shadow-lg">Foundation</span>
              </h1>
                <p className="text-xl md:text-3xl lg:text-4xl text-primary font-bold mb-2 md:mb-4 fade-in drop-shadow-xl" style={{ animationDelay: '0.2s' }}>
                  सेवा ही धर्म है
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 fade-in" style={{ animationDelay: '0.4s' }}>
                  <Link href="/donate" className="w-full sm:w-auto">
                    <Button size="default" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 magnetic group">
                      <Heart className="mr-2 group-hover:scale-110 transition-transform" size={18} fill="currentColor" />
                    अभी दान करें
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </Link>
                  <Link href="/about" className="w-full sm:w-auto">
                    <Button size="default" variant="outline" className="w-full sm:w-auto text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3 h-auto border-2 border-white/50 bg-white/10 hover:bg-white/20 hover:border-white/70 hover:shadow-lg transition-all duration-300 magnetic text-white backdrop-blur-md font-semibold">
                    अधिक जानें
                  </Button>
                </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Gau Sewa Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Cow className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                गौ सेवा - Gau Sewa
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                गो सेवा ही, गोपाल सेवा है
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                गौ मात्र माता ही नहीं, अपितु सम्पूर्ण मनोवृत्तियों की दाता भी है
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-5xl mx-auto mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center font-semibold text-foreground">
                      गौ धन सेवा में पूरा भारतवर्ष अपना सहयोग दे रहा है
                    </p>
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                      रामानुज सेवा फाउंडेशन अपनी अच्छी तरह से बनाए गए गौशालाओं (गाय आश्रयों) के माध्यम से हमारी पवित्र गायों की सुरक्षा और देखभाल के लिए समर्पित है। हम मानते हैं कि गायों की सेवा (गौ सेवा) भगवान कृष्ण (गोपाल) की सेवा के समान है, क्योंकि गायों को हमारी संस्कृति में पवित्र माना जाता है और अक्सर "गौ माता" (माँ गाय) कहा जाता है।
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हमारी प्रतिबद्धता
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>त्यागी और घायल गायों के लिए सुरक्षित आश्रय प्रदान करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>सभी गायों के लिए पौष्टिक भोजन और स्वच्छ पानी सुनिश्चित करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>व्यापक पशु चिकित्सा देखभाल और चिकित्सा उपचार</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>गाय कल्याण के लिए एक प्यार भरा और सम्मानजनक वातावरण बनाना</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          आप कैसे मदद कर सकते हैं
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आप अपने या अपने माता पिता एवं अपने पूर्वजों के नाम से गौशाला में दान देकर पुण्य के भागीदार बन सकते हैं</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आप अपने नाम से या अपने माता-पिता और पूर्वजों के नाम से दान कर सकते हैं</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>हर योगदान हमें अपनी पवित्र गायों की बेहतर देखभाल प्रदान करने में मदद करता है</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आपका समर्थन हमें जरूरतमंद अधिक गायों को बचाने और उनकी देखभाल करने में सक्षम बनाता है</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-8 text-center">
                      <Link href="/donate">
                        <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base px-4 py-2.5 md:px-6 md:py-3 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 magnetic group">
                          <Heart className="mr-2 group-hover:scale-110 transition-transform" size={18} fill="currentColor" />
                          गौ सेवा का समर्थन करें
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Gau Sewa Photo Gallery */}
          <ScrollAnimation direction="up" delay={400}>
            <div className="text-center mb-4 md:mb-8">
              <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-2 md:mb-4">हमारी गौशाला - फोटो गैलरी</h3>
              <p className="text-xs md:text-sm text-muted-foreground">हमारी सुविधाएं और हमारी देखभाल देखें</p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { src: "/Gau seva/gaushala.png", alt: "Gau Shala - Cow Shelter" },
              { src: "/Gau seva/Gausevamatavya.png", alt: "Gau Seva Matavya" },
              { src: "/Gau seva/fhhfhf.png", alt: "Gau Seva Activities" },
              { src: "/Gau seva/ghdh.png", alt: "Gau Seva Care" },
            ].map((image, index) => (
              <ScrollAnimation key={index} direction="up" delay={500 + index * 100}>
                <div className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Bhagwat Katha Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <BookOpen className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                Shreemad Bhagwat Katha
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                देवी प्रीति रामानुज जी - Devi Preety Ramanuj Ji
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                भागवत कथा की दिव्य बुद्धि और आध्यात्मिक आनंद का अनुभव करें
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-6xl mx-auto mb-6 md:mb-12">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
                {/* Maharaj Ji Image */}
                <ScrollAnimation direction="right" delay={300}>
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

                {/* Information Card */}
                <ScrollAnimation direction="left" delay={300}>
                  <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5 h-full">
                    <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                      <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                        <div className="text-center mb-4 md:mb-6">
                          <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-1 md:mb-2">देवी प्रीति रामानुज जी</h3>
                          <p className="text-sm md:text-base lg:text-lg xl:text-xl text-primary font-semibold mb-2 md:mb-4">
                            Katha karwane ke liye sampark kare
                          </p>
                          <p className="text-xs md:text-sm lg:text-base text-muted-foreground mb-3 md:mb-6">
                            कथा आयोजित करने के लिए देवी प्रीति रामानुज जी से संपर्क करें
                          </p>
                          <a
                            href="https://wa.me/919053212446?text=Namaste%20🙏%20I%20want%20to%20book%20Bhagwat%20Katha"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block"
                          >
                            <Button size="sm" className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all magnetic group text-xs md:text-sm">
                              <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                              WhatsApp: +91 90532 12446
                            </Button>
                          </a>
                        </div>
                        
                        <div className="border-t border-border/50 pt-4 md:pt-6">
                          <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-foreground mb-2 md:mb-4">भागवत कथा के बारे में</h3>
                          <div className="space-y-2 md:space-y-4 text-xs md:text-sm lg:text-base xl:text-lg">
                            <p>
                              श्रीमद भागवत कथा भागवत पुराण पर एक पवित्र पाठ और प्रवचन है, जो हिंदू परंपरा में सबसे प्रतिष्ठित शास्त्रों में से एक है। यह भगवान कृष्ण की दिव्य लीलाओं का वर्णन करती है और गहन आध्यात्मिक ज्ञान प्रदान करती है।
                            </p>
                            <p>
                              हमारा फाउंडेशन विद्वान विद्वानों द्वारा आयोजित प्रामाणिक भागवत कथा कार्यक्रम आयोजित करता है जो आकर्षक कहानी कहने और गहन आध्यात्मिक अंतर्दृष्टि के माध्यम से कालातीत शिक्षाओं को जीवंत करते हैं।
                            </p>
                            <p>
                              चाहे पारिवारिक उत्सव, सामुदायिक सभाएं, या आध्यात्मिक कार्यक्रम हों, हम आपको प्रेरणादायक और परिवर्तनकारी यादगार भागवत कथा कार्यक्रम आयोजित करने में मदद करते हैं।
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Girls' Marriage Assistance Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Heart className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                कन्या विवाह सहायता
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                सम्मानजनक विवाह का समर्थन
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                वंचित परिवारों को अपनी बेटियों के लिए सुंदर और सम्मानजनक विवाह आयोजित करने में मदद करना
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-5xl mx-auto mb-6 md:mb-12">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center font-semibold text-foreground">
                      हर बेटी एक सुंदर और सम्मानजनक विवाह की हकदार है, चाहे उसके परिवार की वित्तीय स्थिति कुछ भी हो
                    </p>
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                      रामानुज सेवा फाउंडेशन भारतीय संस्कृति में विवाह के महत्व और कई परिवारों के सामने आने वाली वित्तीय चुनौतियों को समझता है। हमारे कन्या विवाह सहायता कार्यक्रम के माध्यम से, हम वंचित परिवारों को व्यापक सहायता प्रदान करते हैं, यह सुनिश्चित करते हुए कि हर बेटी अपने विशेष दिन को गरिमा और खुशी के साथ मना सके।
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हमारी सहायता में शामिल है
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>विवाह व्यय और समारोहों के लिए वित्तीय सहायता</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>विवाह व्यवस्था और योजना में सहायता</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आवश्यक घरेलू सामान और दहेज विकल्पों के लिए सहायता</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>इस महत्वपूर्ण समय के दौरान परिवारों के लिए मार्गदर्शन और परामर्श</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          आपके समर्थन का प्रभाव
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>परिवारों और उनकी बेटियों के लिए सुंदर यादें बनाना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>वंचित परिवारों पर वित्तीय बोझ कम करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>यह सुनिश्चित करना कि इस महत्वपूर्ण मील के पत्थर के दौरान कोई परिवार अकेले संघर्ष न करे</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>विवाह समारोहों में गरिमा और सम्मान को बढ़ावा देना</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-8 text-center">
                      <Link href="/donate">
                        <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm lg:text-base px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-auto shadow-xl md:shadow-2xl glow-primary-hover transition-all duration-300 magnetic group">
                          <Heart className="mr-2 group-hover:scale-110 transition-transform" size={16} fill="currentColor" />
                          कन्या विवाह का समर्थन करें
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>

          {/* Girls' Marriage Photo Gallery */}
          <ScrollAnimation direction="up" delay={400}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">कन्या विवाह सहायता - फोटो गैलरी</h3>
              <p className="text-muted-foreground">हमारे द्वारा बनाए गए सुंदर उत्सव देखें</p>
            </div>
          </ScrollAnimation>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { src: "/girl marriage/image.png", alt: "Girls' Marriage Support" },
              { src: "/girl marriage/a.png", alt: "Marriage Support Activities" },
              { src: "/girl marriage/b.png", alt: "Wedding Ceremony Support" },
              { src: "/girl marriage/c.png", alt: "Marriage Assistance" },
            ].map((image, index) => (
              <ScrollAnimation key={index} direction="up" delay={500 + index * 100}>
                <div className="group relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Gurukuls & Value-Based Education Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <GraduationCap className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                गुरुकुल और मूल्य-आधारित शिक्षा
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                आधुनिक शिक्षा के साथ पारंपरिक शिक्षा
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                आध्यात्मिक ज्ञान के साथ आधुनिक शिक्षा को जोड़ने वाली पारंपरिक शिक्षा प्रणाली
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                      हमारे गुरुकुल कार्यक्रम प्राचीन भारतीय शिक्षा के कालातीत ज्ञान को आधुनिक शैक्षणिक उत्कृष्टता के साथ मिलाते हैं। हम सांस्कृतिक मूल्यों में निहित व्यक्तियों को पोषित करने में विश्वास करते हैं जबकि समकालीन चुनौतियों के लिए सुसज्जित होते हैं।
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हम क्या प्रदान करते हैं
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>वैदिक अध्ययन और आध्यात्मिक शिक्षाएं</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आधुनिक शैक्षणिक पाठ्यक्रम</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>चरित्र निर्माण और नैतिक मूल्य</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>योग्य छात्रों के लिए छात्रवृत्ति</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हमारा मिशन
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>पारंपरिक ज्ञान और बुद्धि को संरक्षित करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>छात्रों को शैक्षणिक उत्कृष्टता के लिए तैयार करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>मजबूत नैतिक और नैतिक मूल्यों को स्थापित करना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>सांस्कृतिक आधार के साथ भविष्य के नेताओं का निर्माण करना</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-8 text-center">
                      <Link href="/donate">
                        <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm lg:text-base px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-auto shadow-xl md:shadow-2xl glow-primary-hover transition-all duration-300 magnetic group">
                          <GraduationCap className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                          इस कारण का समर्थन करें
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Eye Check-up Camps Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Eye className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                आंख जांच शिविर
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                समुदायों में दृष्टि देखभाल लाना
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                ग्रामीण और वंचित समुदायों के लिए मुफ्त आंख जांच और उपचार
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                      दृष्टि एक अनमोल उपहार है, और हर किसी को गुणवत्तापूर्ण आंखों की देखभाल तक पहुंच का अधिकार है। हमारे आंख जांच शिविर ग्रामीण और वंचित समुदायों में सीधे आवश्यक आंखों की स्वास्थ्य सेवाएं लाते हैं, यह सुनिश्चित करते हुए कि दृष्टि समस्याओं का जल्दी पता लगाया जाए और प्रभावी ढंग से इलाज किया जाए।
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Eye className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हमारी सेवाएं
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>व्यापक आंख जांच</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>जरूरतमंदों के लिए मुफ्त चश्मा</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>मोतियाबिंद सर्जरी व्यवस्था</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आंखों के स्वास्थ्य के बारे में जागरूकता</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          सामुदायिक प्रभाव
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>दृष्टि समस्याओं का जल्दी पता लगाना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>बेहतर दृष्टि के माध्यम से जीवन की गुणवत्ता में सुधार</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>समय पर उपचार के माध्यम से अंधता को रोकना</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आंखों की देखभाल के बारे में समुदायों को शिक्षित करना</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-8 text-center">
                      <Link href="/donate">
                        <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm lg:text-base px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-auto shadow-xl md:shadow-2xl glow-primary-hover transition-all duration-300 magnetic group">
                          <Eye className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                          इस कारण का समर्थन करें
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Blood Donation Drives Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Droplet className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                रक्तदान अभियान
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-primary font-bold mb-3 md:mb-6">
                रक्तदान के माध्यम से जीवन बचाना
              </p>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                चिकित्सा आवश्यकता में लोगों का समर्थन करने के लिए रक्तदान शिविर आयोजित करना
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-primary/20 shadow-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="p-4 md:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 md:space-y-6 text-muted-foreground leading-relaxed">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                      रक्तदान सेवा के सबसे निस्वार्थ कार्यों में से एक है। एक दान तीन जीवन बचा सकता है। हमारा फाउंडेशन नियमित रूप से रक्तदान शिविर आयोजित करता है, जिससे लोगों के लिए इस जीवन रक्षक कारण में योगदान देना और गंभीर चिकित्सा आवश्यकता में लोगों की मदद करना आसान हो जाता है।
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-8">
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Droplet className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          हमारी पहल
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>नियमित रक्तदान शिविर</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>सुरक्षित और स्वच्छ संग्रह प्रक्रिया</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>अस्पतालों और रक्त बैंकों के साथ सहयोग</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>आपातकालीन रक्त आवश्यकता सहायता</span>
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-2 md:space-y-3">
                        <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                          यह क्यों महत्वपूर्ण है
                        </h3>
                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm lg:text-base">
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>हर दान कई जीवन बचा सकता है</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>गंभीर स्थितियों में रोगियों का समर्थन</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>नियमित रक्तदान की संस्कृति का निर्माण</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>रक्तदान के महत्व के बारे में जागरूकता पैदा करना</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-8 text-center">
                      <Link href="/donate">
                        <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm lg:text-base px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-auto shadow-xl md:shadow-2xl glow-primary-hover transition-all duration-300 magnetic group">
                          <Droplet className="mr-2 group-hover:scale-110 transition-transform" size={16} />
                          इस कारण का समर्थन करें
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Leadership & Recognition Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Award className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
                <Shield className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 text-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                नेतृत्व और मान्यता
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                हमारा फाउंडेशन सम्मानित नेताओं और गणमान्य व्यक्तियों द्वारा मान्यता प्राप्त करने पर गौरवान्वित है
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8 max-w-6xl mx-auto">
            {/* Photo 0: Additional Recognition */}
            <ScrollAnimation direction="up" delay={100}>
              <div className="w-full">
                <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl ring-4 ring-primary/20 hover-lift">
                  <Image
                    src="/maharaj ji photo/WhatsApp Image 2025-12-10 at 12.19.10_0ebb0793.jpg"
                    alt="देवी प्रीति रामानुज जी के साथ सम्मान समारोह"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-3 md:p-4 lg:p-6">
                    <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold text-center drop-shadow-lg">
                      देवी प्रीति रामानुज जी - Leadership & Recognition
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Photo 1: Haryana State President */}
            <ScrollAnimation direction="up" delay={200}>
              <div className="w-full">
                <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl ring-2 md:ring-4 ring-primary/20 hover-lift">
                  <Image
                    src="/maharaj ji photo/WhatsApp Image 2025-12-10 at 12.20.06_c9d2bde7.jpg"
                    alt="हरियाणा प्रदेश अध्यक्ष मोहनलाल बडोली जी के साथ देवी प्रीति रामानुज जी"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-3 md:p-4 lg:p-6">
                    <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold text-center drop-shadow-lg">
                      हरियाणा प्रदेश अध्यक्ष मोहनलाल बडोली जी के साथ देवी प्रीति रामानुज जी
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Photo 2: Dr. Arvind Sharma MLA */}
            <ScrollAnimation direction="up" delay={400}>
              <div className="w-full">
                <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-2xl ring-2 md:ring-4 ring-primary/20 hover-lift">
                  <Image
                    src="/maharaj ji photo/WhatsApp Image 2025-12-10 at 12.20.45_d28d21bb.jpg"
                    alt="डॉ अरविंद शर्मा विधायक के साथ देवी प्रीति रामानुज जी"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-contain"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-3 md:p-4 lg:p-6">
                    <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg font-semibold text-center drop-shadow-lg">
                      डॉ अरविंद शर्मा विधायक के साथ देवी प्रीति रामानुज जी
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* YouTube Subscribe Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 rounded-full border border-primary/20 shadow-sm">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary" />
                <span className="text-xs md:text-sm font-semibold text-primary">Subscribe Us on YouTube</span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mt-3 md:mt-4 mb-2 md:mb-3 text-gradient-animate">
                Join Our YouTube Community
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">
                Watch satsangs, katha, and seva updates. Like & Subscribe to stay connected.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollAnimation direction="right" delay={150}>
              <div className="relative w-full h-auto rounded-xl overflow-hidden shadow-2xl ring-4 ring-primary/15 hover-lift">
                <Image
                  src="/youtube/Screenshot 2025-12-10 133717.png"
                  alt="YouTube Channel Preview"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-contain bg-card"
                  priority
                />
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="left" delay={250}>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  नीचे दिए गए बटन पर टैप करके हमारे YouTube चैनल को खोलें। वीडियो को लाइक करके और सब्सक्राइब करके अपना समर्थन दिखाएं ताकि आप सेवा, गौ सेवा, और भागवत कथा पर अपडेट न चूकें।
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://youtube.com/@devi_preety_ramanuj?si=segdtk-mieqenWDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 rounded-lg shadow-lg transition-all"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube पर सब्सक्राइब करें
                  </a>
                  <a
                    href="https://youtube.com/@devi_preety_ramanuj?si=segdtk-mieqenWDF"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-4 py-3 rounded-lg border border-primary/30 transition-all"
                  >
                    <ThumbsUp className="w-5 h-5" />
                    लाइक और समर्थन करें
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation direction="up" delay={0}>
              <div className="text-center mb-6 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-3 md:mb-6 text-gradient-animate">
                  हमारे फाउंडेशन के बारे में
                </h2>
                <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-4 md:mb-8 animate-pulse-glow"></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation direction="up" delay={200}>
              <div className="bg-card rounded-2xl p-4 md:p-6 lg:p-8 xl:p-12 shadow-2xl border border-border/50 hover-lift glass backdrop-blur-sm">
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed text-center">
              रामानुज सेवा फाउंडेशन एक हरियाणा-आधारित धर्मार्थ संगठन है जो वंचित परिवारों को उत्थान, मूल्य-आधारित शिक्षा को बढ़ावा देने, मुफ्त स्वास्थ्य शिविर आयोजित करने, और अच्छी तरह से बनाए गए गौशालाओं के माध्यम से गायों की रक्षा के लिए समर्पित है। 2022 में स्थापित, हम सांस्कृतिक और आध्यात्मिक मूल्यों द्वारा निर्देशित करुणा के साथ सेवा करते हैं।
            </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <FloatingParticles />
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                हमारी मुख्य सेवाएं
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">करुणामय सेवा के माध्यम से जीवन को बदलना</p>
          </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <ScrollAnimation key={index} direction="up" delay={index * 100}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 overflow-hidden hover-lift card-3d animated-border">
                <CardContent className="p-0">
                    <div className="relative h-56 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                        className="object-cover group-hover:scale-125 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 glow-primary">
                          <service.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-white text-sm font-medium">{service.description}</p>
                      </div>
                  </div>
                    <div className="p-4 md:p-6 bg-card">
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed group-hover:hidden transition-opacity">
                        {service.description}
                      </p>
                  </div>
                </CardContent>
              </Card>
              </ScrollAnimation>
            ))}
          </div>
          <ScrollAnimation direction="up" delay={400}>
          <div className="text-center mt-6 md:mt-12">
            <Link href="/services">
                <Button size="default" variant="outline" className="text-xs md:text-sm lg:text-base px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 h-auto border-2 hover:bg-primary hover:text-primary-foreground transition-all magnetic glow-primary-hover group">
                View All Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={14} />
              </Button>
            </Link>
          </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Impact Counter */}
      <section className="py-8 md:py-12 lg:py-20 primary-gradient text-primary-foreground relative overflow-hidden animate-gradient">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15),transparent_70%)] animate-gradient" style={{ animationDelay: '1s' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 md:mb-4 fade-in">Our Impact</h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl opacity-90 max-w-2xl mx-auto fade-in px-2" style={{ animationDelay: '0.2s' }}>
                Making a real difference in people's lives through dedicated service
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={300}>
          <ImpactCounter />
          </ScrollAnimation>
        </div>
      </section>

      {/* CTA Section - Prominent Donation Call */}
      <section className="py-8 md:py-12 lg:py-16 xl:py-24 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,165,0,0.2),transparent_50%)] animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,200,0,0.15),transparent_50%)] animate-gradient" style={{ animationDelay: '1.5s' }}></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="max-w-3xl mx-auto">
              <div className="inline-block mb-4 md:mb-6 fade-in">
                <span className="text-4xl md:text-5xl lg:text-6xl animate-pulse">🙏</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-tight fade-in" style={{ animationDelay: '0.2s' }}>
                Your Contribution Can
                <span className="block text-primary mt-1 md:mt-2 text-gradient-animate">Transform Lives</span>
          </h2>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed fade-in px-2" style={{ animationDelay: '0.4s' }}>
                Donate today and become a part of this divine service. Every contribution makes a difference in someone's life.
          </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center fade-in" style={{ animationDelay: '0.6s' }}>
          <Link href="/donate">
                  <Button size="default" className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm md:text-base lg:text-lg xl:text-xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 xl:py-7 h-auto shadow-xl md:shadow-2xl glow-primary-hover transition-all duration-300 magnetic group animate-pulse-glow">
                    <Heart className="mr-2 md:mr-3 group-hover:scale-125 transition-transform" size={20} fill="currentColor" />
              Make a Donation
                    <ArrowRight className="ml-2 md:ml-3 group-hover:translate-x-2 transition-transform" size={18} />
            </Button>
          </Link>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mt-6 md:mt-8 fade-in px-2" style={{ animationDelay: '0.8s' }}>
                Secure payment • Instant receipt • 100% transparent
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Registration Certificate Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Shield className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
                <Award className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                सरकारी अनुमोदित और पंजीकृत
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto px-2">
                रामानुज सेवा फाउंडेशन एक कानूनी रूप से पंजीकृत धर्मार्थ संगठन है, जिसे सरकार द्वारा अनुमोदित किया गया है।
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={200}>
            <Card className="border-2 border-primary/20 shadow-2xl overflow-hidden hover-lift">
              <CardContent className="p-0">
                <div className="relative w-full bg-gradient-to-br from-primary/5 to-accent/5 p-2 md:p-4 lg:p-8">
                  <div className="relative w-full max-w-4xl mx-auto">
                    <Image
                      src="/Certificate/image.png"
                      alt="Ramanuj Sewa Foundation - Government Registration Certificate"
                      width={1200}
                      height={800}
                      className="w-full h-auto rounded-lg shadow-xl object-contain"
                    />
                  </div>
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-primary/90 backdrop-blur-sm rounded-full p-2 md:p-3 shadow-lg">
                    <Shield className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-4 md:p-6 bg-card border-t border-border/50">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
                    <div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 md:mb-2">Registered Foundation</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Legally registered and government approved charitable organization
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
                      <Award className="w-4 h-4 md:w-5 md:h-5" />
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
      <section className="w-full py-4 md:py-6 lg:py-8 xl:py-12 bg-background">
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

      {/* Payment Section */}
      <section className="py-8 md:py-12 lg:py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,165,0,0.03),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollAnimation direction="up" delay={0}>
            <div className="text-center mb-6 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-2 md:mb-4 text-gradient-animate">
                Make Your Donation
              </h2>
              <div className="w-16 md:w-24 h-1 bg-primary-gradient mx-auto rounded-full mb-2 md:mb-4 animate-pulse-glow"></div>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground px-2">Scan QR code or transfer directly to our bank account</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation direction="up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <PaymentQRSection />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
      <WhatsAppWidget />
    </div>
  )
}
