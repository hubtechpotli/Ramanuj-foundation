"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download, Receipt, Clock, CheckCircle, XCircle } from 'lucide-react'
import { format } from 'date-fns'
import type { Donation } from '@/lib/types/database'
import { ReceiptModal } from './receipt-modal'
import { useState } from 'react'

interface DonationHistoryProps {
  donations: Donation[]
  loading: boolean
}

const donationTypeLabels: Record<string, string> = {
  'gau-sewa': 'Gau Sewa',
  'girl-marriage-support': 'Girl Marriage Support',
  'gurukul-donation': 'Gurukul Donation',
  'health-camps': 'Health Camps',
  'general': 'General Donation',
}

const statusConfig = {
  completed: { label: 'Completed', icon: CheckCircle, className: 'bg-green-500/10 text-green-700 dark:text-green-400' },
  pending: { label: 'Pending', icon: Clock, className: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' },
  failed: { label: 'Failed', icon: XCircle, className: 'bg-red-500/10 text-red-700 dark:text-red-400' },
  refunded: { label: 'Refunded', icon: XCircle, className: 'bg-gray-500/10 text-gray-700 dark:text-gray-400' },
}

export function DonationHistory({ donations, loading }: DonationHistoryProps) {
  const [selectedReceipt, setSelectedReceipt] = useState<Donation | null>(null)

  if (loading) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">Loading donation history...</p>
        </CardContent>
      </Card>
    )
  }

  if (donations.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <Receipt className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Donations Yet</h3>
          <p className="text-muted-foreground">Your donation history will appear here once you make a donation.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {donations.map((donation) => {
          const StatusIcon = statusConfig[donation.payment_status].icon
          const statusInfo = statusConfig[donation.payment_status]

          return (
            <Card key={donation.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {donationTypeLabels[donation.donation_type] || donation.donation_type}
                      </h3>
                      <Badge className={statusInfo.className}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>
                        <span className="font-semibold text-foreground">Amount:</span> ₹{donation.amount.toLocaleString()}
                      </p>
                      <p>
                        <span className="font-semibold text-foreground">Date:</span>{' '}
                        {format(new Date(donation.created_at), 'PPP')}
                      </p>
                      {donation.phone && (
                        <p>
                          <span className="font-semibold text-foreground">Phone:</span> {donation.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    {donation.payment_status === 'completed' && (
                      <>
                        {donation.receipt_url ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(donation.receipt_url!, '_blank')}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Receipt
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" onClick={() => setSelectedReceipt(donation)}>
                            <Receipt className="w-4 h-4 mr-2" />
                            View Receipt
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {selectedReceipt && (
        <ReceiptModal donation={selectedReceipt} onClose={() => setSelectedReceipt(null)} />
      )}
    </>
  )
}

