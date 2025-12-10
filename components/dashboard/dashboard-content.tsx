"use client"

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { DonationForm } from '@/components/dashboard/donation-form'
import { DonationHistory } from '@/components/dashboard/donation-history'
import { PaymentQRSection } from '@/components/payment-qr-section'
import { UserButton } from '@clerk/nextjs'
import { Heart, History, TrendingUp, DollarSign, Cog as Cow, Users, BookOpen, Stethoscope, Sparkles, ArrowRight } from 'lucide-react'
import type { Donation, DonationType } from '@/lib/types/database'

interface DashboardContentProps {
  userEmail: string
}

const sevaTypes = [
  { value: 'gau-sewa' as DonationType, label: 'Gau Sewa', icon: Cow, description: 'Support cow shelter, food, and medical care', color: 'from-orange-500/20 to-amber-500/20' },
  { value: 'girl-marriage-support' as DonationType, label: 'Girl Marriage Support', icon: Users, description: 'Help families arrange dignified marriages', color: 'from-pink-500/20 to-rose-500/20' },
  { value: 'gurukul-donation' as DonationType, label: 'Gurukul Education', icon: BookOpen, description: 'Support value-based education programs', color: 'from-blue-500/20 to-indigo-500/20' },
  { value: 'health-camps' as DonationType, label: 'Health Camps', icon: Stethoscope, description: 'Fund eye check-ups and blood donation camps', color: 'from-green-500/20 to-emerald-500/20' },
  { value: 'general' as DonationType, label: 'General Donation', icon: Sparkles, description: 'Support all foundation activities', color: 'from-purple-500/20 to-violet-500/20' },
]

export function DashboardContent({ userEmail }: DashboardContentProps) {
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)
  const [totalDonated, setTotalDonated] = useState(0)
  const [selectedSeva, setSelectedSeva] = useState<DonationType | null>(null)

  useEffect(() => {
    syncUser()
    fetchDonations()
    linkGuestDonations()
  }, [])

  const syncUser = async () => {
    try {
      await fetch('/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
    } catch (error) {
      console.error('Error syncing user:', error)
    }
  }

  const fetchDonations = async () => {
    try {
      const response = await fetch('/api/donations')
      const data = await response.json()
      setDonations(data.donations || [])
      
      // Calculate total donated
      const total = (data.donations || []).reduce(
        (sum: number, donation: Donation) => 
          donation.payment_status === 'completed' ? sum + donation.amount : sum,
        0
      )
      setTotalDonated(total)
    } catch (error) {
      console.error('Error fetching donations:', error)
    } finally {
      setLoading(false)
    }
  }

  const linkGuestDonations = async () => {
    if (!userEmail) return
    
    try {
      await fetch('/api/donations/link-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      })
      // Refresh donations after linking
      fetchDonations()
    } catch (error) {
      console.error('Error linking donations:', error)
    }
  }

  const handleDonationSuccess = () => {
    fetchDonations()
  }

  return (
    <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8">
      {/* Header */}
      <div className="mb-4 md:mb-6 lg:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mb-3 md:mb-4">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">Dashboard</h1>
            <p className="text-xs md:text-sm text-muted-foreground">Manage your donations and track your impact</p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-6 lg:mb-8">
        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Donated</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">₹{totalDonated.toLocaleString()}</p>
              </div>
              <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Total Donations</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {donations.filter(d => d.payment_status === 'completed').length}
                </p>
              </div>
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {donations.filter(d => d.payment_status === 'pending').length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-primary flex-shrink-0" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="donate" className="space-y-6">
        <TabsList>
          <TabsTrigger value="donate" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Make Donation
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="w-4 h-4" />
            Donation History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="donate" className="space-y-4 md:space-y-6 lg:space-y-8">
          {!selectedSeva ? (
            <>
              <div className="text-center mb-4 md:mb-6 lg:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1 md:mb-2">Choose Your Seva</h2>
                <p className="text-xs md:text-sm text-muted-foreground">Select a seva to make your donation</p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {sevaTypes.map((seva) => (
                  <Card
                    key={seva.value}
                    className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-primary/50 group"
                    onClick={() => setSelectedSeva(seva.value)}
                  >
                    <CardContent className="p-4 md:p-6">
                      <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${seva.color} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                        <seva.icon className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary" />
                      </div>
                      <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground mb-1 md:mb-2 group-hover:text-primary transition-colors">{seva.label}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">{seva.description}</p>
                      <Button size="sm" className="w-full text-xs md:text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Donate Now
                        <ArrowRight className="ml-2 w-3 h-3 md:w-4 md:h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <Button variant="ghost" size="sm" onClick={() => setSelectedSeva(null)} className="gap-2 text-xs md:text-sm">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 rotate-180" />
                  Back to Seva Selection
                </Button>
                <div className="flex-1">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground">
                    {sevaTypes.find(s => s.value === selectedSeva)?.label}
                  </h2>
                </div>
              </div>
              <DonationForm 
                onSuccess={handleDonationSuccess} 
                userEmail={userEmail}
                selectedSeva={selectedSeva}
                onBack={() => setSelectedSeva(null)}
              />
            </>
          )}
        </TabsContent>

        <TabsContent value="history">
          <DonationHistory donations={donations} loading={loading} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

