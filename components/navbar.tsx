"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"
import { useState } from "react"
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "होम" },
    { href: "/about", label: "हमारे बारे में" },
    { href: "/services", label: "सेवाएं" },
    { href: "/bhagwat-katha", label: "भागवत कथा" },
    { href: "/contact", label: "संपर्क करें" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 border-b border-border/50 shadow-lg glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-xl overflow-hidden shadow-xl group-hover:scale-110 transition-all duration-300 ring-2 ring-primary/30 group-hover:ring-primary/60 glow-primary-hover">
              <Image
                src="/logo/image.png"
                alt="Ramanuj Sewa Foundation Logo"
                fill
                className="object-contain p-1 group-hover:rotate-3 transition-transform duration-300"
              />
            </div>
            <div className="hidden md:block">
              <p className="font-bold text-sm md:text-base lg:text-lg text-foreground group-hover:text-primary transition-colors">Ramanuj Sewa Foundation</p>
              <p className="text-xs text-primary font-medium group-hover:scale-105 transition-transform">सेवा ही धर्म है</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link href="/donate">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                <Heart className="mr-2" size={16} fill="currentColor" />
                दान करें
              </Button>
            </Link>
            {/* Authentication Section */}
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="outline" size="sm">लॉग इन</Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground" size="sm">साइन अप</Button>
                </SignUpButton>
              </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">डैशबोर्ड</Button>
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">दान करें</Button>
            </Link>
            {/* Mobile Authentication Section */}
            <div className="mt-6 pt-4 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase mb-3">खाता</p>
              <SignedOut>
                <div className="space-y-2">
                  <SignInButton mode="modal">
                    <Button variant="outline" className="w-full" onClick={() => setMobileMenuOpen(false)}>लॉग इन</Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => setMobileMenuOpen(false)}>साइन अप</Button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full mb-2">डैशबोर्ड</Button>
                </Link>
                <div className="flex justify-center">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
