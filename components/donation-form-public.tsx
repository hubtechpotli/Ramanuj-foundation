"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Heart, Cog as Cow, Users, BookOpen, Stethoscope, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import type { DonationType } from '@/lib/types/database'

const donationSchema = z.object({
  donation_type: z.enum(['gau-sewa', 'girl-marriage-support', 'gurukul-donation', 'health-camps', 'general']),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
})

type DonationFormData = z.infer<typeof donationSchema>

const donationTypes = [
  { value: 'gau-sewa', label: 'Gau Sewa Donation', icon: Cow, suggested: [500, 1000, 2000, 5000] },
  { value: 'girl-marriage-support', label: 'Girl Marriage Support', icon: Users, suggested: [2000, 5000, 10000, 25000] },
  { value: 'gurukul-donation', label: 'Gurukul Donation', icon: BookOpen, suggested: [1000, 2500, 5000, 10000] },
  { value: 'health-camps', label: 'Health Camps Donation', icon: Stethoscope, suggested: [500, 1000, 2500, 5000] },
  { value: 'general', label: 'General Donation', icon: Sparkles, suggested: [500, 1000, 2500, 5000] },
]

export function DonationFormPublic() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<DonationFormData>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      donation_type: 'general',
    },
  })

  const selectedType = watch('donation_type')

  const onSubmit = async (data: DonationFormData) => {
    setLoading(true)
    try {
      // Create donation record
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to create donation')
      }

      toast.success('Donation details saved! Please complete payment using QR code or bank transfer below.')
      
      // Scroll to payment section
      setTimeout(() => {
        const paymentSection = document.getElementById('payment-section')
        if (paymentSection) {
          paymentSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 500)
    } catch (error: any) {
      toast.error(error.message || 'Failed to save donation details')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Complete Your Donation</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <Label>Select Donation Type</Label>
            <RadioGroup
              value={selectedType}
              onValueChange={(value) => setValue('donation_type', value as DonationType)}
              className="mt-3 space-y-3"
            >
              {donationTypes.map((type) => (
                <div key={type.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={type.value} id={type.value} />
                  <Label htmlFor={type.value} className="font-normal cursor-pointer flex items-center gap-2">
                    <type.icon className="w-4 h-4" />
                    {type.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" {...register('name')} className="mt-2" placeholder="Enter your name" />
              {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input id="email" type="email" {...register('email')} className="mt-2" placeholder="your@email.com" />
              {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" type="tel" {...register('phone')} className="mt-2" placeholder="+91 XXXXXXXXXX" />
            {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>}
          </div>

          <div>
            <Label htmlFor="amount">Donation Amount (₹) *</Label>
            <Input
              id="amount"
              type="number"
              {...register('amount', { valueAsNumber: true })}
              className="mt-2"
              placeholder="Enter amount"
            />
            {errors.amount && <p className="text-sm text-red-500 mt-1">{errors.amount.message}</p>}
            
            {selectedType && (
              <div className="mt-3 flex flex-wrap gap-2">
                {donationTypes.find(t => t.value === selectedType)?.suggested.map((suggestedAmount) => (
                  <Button
                    key={suggestedAmount}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setValue('amount', suggestedAmount)}
                  >
                    ₹{suggestedAmount}
                  </Button>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            {loading ? 'Saving Details...' : (
              <>
                <Heart className="mr-2" size={24} fill="currentColor" />
                Save Donation Details
              </>
            )}
          </Button>

          <div className="bg-primary/5 rounded-lg p-4 text-center border border-primary/20">
            <p className="text-sm font-semibold text-foreground mb-2">
              After submitting, please complete payment using QR code or bank transfer below
            </p>
            <p className="text-xs text-muted-foreground">
              Share payment screenshot on WhatsApp for receipt. Sign in with the same email to view your donation history.
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

