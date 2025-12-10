"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Heart, MessageCircle, ArrowRight, Cog as Cow, Users, BookOpen, Stethoscope, Sparkles } from 'lucide-react'
import { toast } from 'sonner'
import type { DonationType } from '@/lib/types/database'
import { PaymentQRSection } from '@/components/payment-qr-section'

const donationSchema = z.object({
  donation_type: z.enum(['gau-sewa', 'girl-marriage-support', 'gurukul-donation', 'health-camps', 'general']),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  message: z.string().optional(),
})

type DonationFormData = z.infer<typeof donationSchema>

interface DonationFormProps {
  onSuccess: () => void
  userEmail: string
  selectedSeva: DonationType
  onBack?: () => void
}

const donationTypes = [
  { value: 'gau-sewa', label: 'Gau Sewa Donation', icon: Cow, suggested: [500, 1000, 2000, 5000] },
  { value: 'girl-marriage-support', label: 'Girl Marriage Support', icon: Users, suggested: [2000, 5000, 10000, 25000] },
  { value: 'gurukul-donation', label: 'Gurukul Donation', icon: BookOpen, suggested: [1000, 2500, 5000, 10000] },
  { value: 'health-camps', label: 'Health Camps Donation', icon: Stethoscope, suggested: [500, 1000, 2500, 5000] },
  { value: 'general', label: 'General Donation', icon: Sparkles, suggested: [500, 1000, 2500, 5000] },
]

export function DonationForm({ onSuccess, userEmail, selectedSeva, onBack }: DonationFormProps) {
  const [showPayment, setShowPayment] = useState(false)
  const [donationAmount, setDonationAmount] = useState<number | null>(null)
  const [donationMessage, setDonationMessage] = useState<string>('')
  
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DonationFormData & { donationId?: string }>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      email: userEmail,
      donation_type: selectedSeva,
    },
  })

  const amount = watch('amount')
  const message = watch('message')

  const onSubmit = async (data: DonationFormData) => {
    try {
      // Create donation record
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          message: data.message || '',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create donation')
      }

      setDonationAmount(data.amount)
      setDonationMessage(data.message || '')
      setShowPayment(true)
      toast.success('Donation details saved! Please complete payment using QR code or bank transfer below.')
      onSuccess()
      
      // Scroll to payment section
      setTimeout(() => {
        const paymentSection = document.getElementById('payment-section')
        if (paymentSection) {
          paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 500)
    } catch (error: any) {
      toast.error(error.message || 'Failed to save donation details')
    }
  }

  if (showPayment) {
    return (
      <div className="space-y-4 md:space-y-6">
        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="text-lg md:text-xl lg:text-2xl text-center text-foreground">
              🙏 Thank You for Your Donation
            </CardTitle>
            <p className="text-xs md:text-sm text-center text-muted-foreground mt-1 md:mt-2">
              Your donation details have been saved. Please complete the payment using the QR code or bank details below.
            </p>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6">
            <div className="bg-muted/50 p-3 md:p-4 rounded-lg border border-border text-center">
              <p className="text-xs md:text-sm text-muted-foreground mb-1">Donation Amount</p>
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-primary">₹{donationAmount?.toLocaleString()}</p>
              {donationMessage && (
                <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-border">
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">Your Message</p>
                  <p className="text-xs md:text-sm text-foreground italic">"{donationMessage}"</p>
                </div>
              )}
            </div>
            
            <div className="bg-primary/10 rounded-lg p-3 md:p-4 border border-primary/20">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                <p className="font-semibold text-xs md:text-sm lg:text-base text-foreground">Send Payment Screenshot on WhatsApp</p>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                After making the payment, please share the transaction screenshot on WhatsApp for your receipt.
              </p>
              <a
                href={`https://wa.me/919053212446?text=${encodeURIComponent(`Radhey Radhey 🙏\n\nI have made a donation of ₹${donationAmount?.toLocaleString()} for ${selectedSeva}.\n\nPlease find the payment screenshot attached.\n\nRadhey Radhey`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-xs md:text-sm py-2 px-4 md:py-3 md:px-6 rounded-lg shadow-md transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Send Screenshot on WhatsApp
              </a>
              <p className="text-xs text-center text-muted-foreground mt-2 md:mt-3">
                WhatsApp: +91 90532 12446
              </p>
            </div>
          </CardContent>
        </Card>

        <div id="payment-section" className="scroll-mt-20">
          <PaymentQRSection />
        </div>

        <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-4 md:p-6 text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-1 md:mb-2">🙏 Radhey Radhey 🙏</p>
            <p className="text-xs md:text-sm text-muted-foreground">
              Thank you for your generous contribution. Your seva will make a difference in many lives.
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Card className="border-2 border-primary/20 shadow-xl">
      <CardHeader className="p-4 md:p-6">
        <CardTitle className="text-lg md:text-xl lg:text-2xl text-center">Make Your Donation</CardTitle>
        <p className="text-xs md:text-sm text-center text-muted-foreground mt-1 md:mt-2">
          Fill in the details below to proceed with your donation
        </p>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            <div>
              <Label htmlFor="name" className="text-xs md:text-sm">Full Name *</Label>
              <Input id="name" {...register('name')} className="mt-1 md:mt-2 text-xs md:text-sm" placeholder="Enter your full name" />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email" className="text-xs md:text-sm">Email Address *</Label>
              <Input id="email" type="email" {...register('email')} className="mt-1 md:mt-2 text-xs md:text-sm" placeholder="Enter your email" />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="phone" className="text-xs md:text-sm">Phone Number *</Label>
            <Input id="phone" type="tel" {...register('phone')} className="mt-1 md:mt-2 text-xs md:text-sm" placeholder="Enter your phone number" />
            {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="amount" className="text-xs md:text-sm">How much would you like to donate? (₹) *</Label>
            <Input
              id="amount"
              type="number"
              {...register('amount', { valueAsNumber: true })}
              className="mt-1 md:mt-2 text-xs md:text-sm"
              placeholder="Enter donation amount"
            />
            {errors.amount && <p className="text-xs text-red-500 mt-1">{errors.amount.message}</p>}
          </div>

          <div>
            <Label htmlFor="message" className="text-xs md:text-sm">Message (Optional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              className="mt-1 md:mt-2 text-xs md:text-sm"
              placeholder="Add a message or prayer for your donation..."
              rows={3}
            />
          </div>

          <Button type="submit" size="default" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all text-xs md:text-sm">
            <Heart className="mr-2" size={16} fill="currentColor" />
            Proceed to Payment
            <ArrowRight className="ml-2" size={14} />
          </Button>

          <div className="bg-primary/5 rounded-lg p-3 md:p-4 text-center border border-primary/20">
            <p className="text-xs md:text-sm font-semibold text-foreground mb-1 md:mb-2">
              After submitting, you will see QR code and bank details for payment
            </p>
            <p className="text-xs text-muted-foreground">
              Please send payment screenshot on WhatsApp: +91 90532 12446
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

