"use client"

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { toast } from 'sonner'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

function CheckoutForm({ clientSecret, donationId }: { clientSecret: string; donationId: string }) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    try {
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment/success?donationId=${donationId}`,
        },
      })

      if (error) {
        toast.error(error.message || 'Payment failed')
      } else {
        toast.success('Payment successful!')
      }
    } catch (error) {
      console.error('Payment error:', error)
      toast.error('Payment processing failed')
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />
      <Button type="submit" disabled={!stripe || processing} className="w-full" size="lg">
        {processing ? 'Processing...' : 'Complete Payment'}
      </Button>
    </form>
  )
}

export default function PaymentPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [donationId, setDonationId] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const donationIdParam = searchParams.get('donationId')
    
    if (!donationIdParam) {
      // Try to get from sessionStorage
      const stored = typeof window !== 'undefined' ? sessionStorage.getItem('paymentIntent') : null
      if (stored) {
        const data = JSON.parse(stored)
        setClientSecret(data.clientSecret)
        setDonationId(data.donationId)
        setLoading(false)
        return
      }
      toast.error('No donation found')
      router.push('/donate')
      return
    }

    setDonationId(donationIdParam)

    // Fetch payment intent
    const fetchPaymentIntent = async () => {
      try {
        const response = await fetch(`/api/payments/get-intent?donationId=${donationIdParam}`)
        const data = await response.json()
        
        if (data.clientSecret) {
          setClientSecret(data.clientSecret)
        } else {
          toast.error('Payment intent not found')
          router.push('/donate')
        }
      } catch (error) {
        console.error('Error fetching payment intent:', error)
        toast.error('Failed to load payment form')
        router.push('/donate')
      } finally {
        setLoading(false)
      }
    }

    fetchPaymentIntent()
  }, [searchParams, router])

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">Loading payment form...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  if (!clientSecret || !donationId) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-red-500">Payment session expired. Please start again.</p>
              <Button onClick={() => router.push('/donate')} className="mt-4">
                Go to Donation Page
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Complete Your Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm clientSecret={clientSecret} donationId={donationId} />
            </Elements>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

