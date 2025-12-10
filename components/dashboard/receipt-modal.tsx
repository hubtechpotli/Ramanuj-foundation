"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Download, X } from 'lucide-react'
import { format } from 'date-fns'
import type { Donation } from '@/lib/types/database'
import { useRef } from 'react'

interface ReceiptModalProps {
  donation: Donation
  onClose: () => void
}

const donationTypeLabels: Record<string, string> = {
  'gau-sewa': 'Gau Sewa Donation',
  'girl-marriage-support': 'Girl Marriage Support',
  'gurukul-donation': 'Gurukul Donation',
  'health-camps': 'Health Camps Donation',
  'general': 'General Donation',
}

export function ReceiptModal({ donation, onClose }: ReceiptModalProps) {
  const receiptRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    if (!receiptRef.current) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Donation Receipt - ${donation.id}</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 40px; max-width: 600px; margin: 0 auto; }
            .header { text-align: center; margin-bottom: 30px; }
            .header h1 { margin: 0; color: #333; }
            .header p { margin: 5px 0; color: #666; }
            .details { margin: 30px 0; }
            .detail-row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #333; }
            .detail-value { color: #666; }
            .amount { font-size: 24px; font-weight: bold; color: #22c55e; text-align: center; margin: 20px 0; }
            .footer { margin-top: 40px; text-align: center; color: #999; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Ramanuj Sewa Foundation</h1>
            <p>सेवा ही धर्म है</p>
            <p>Donation Receipt</p>
          </div>
          <div class="details">
            <div class="detail-row">
              <span class="detail-label">Receipt ID:</span>
              <span class="detail-value">${donation.id}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Date:</span>
              <span class="detail-value">${format(new Date(donation.created_at), 'PPP')}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Donation Type:</span>
              <span class="detail-value">${donationTypeLabels[donation.donation_type] || donation.donation_type}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Donor Name:</span>
              <span class="detail-value">${donation.name}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${donation.email}</span>
            </div>
            ${donation.phone ? `
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${donation.phone}</span>
            </div>
            ` : ''}
            <div class="amount">
              Amount: ₹${donation.amount.toLocaleString()}
            </div>
            <div class="detail-row">
              <span class="detail-label">Payment Status:</span>
              <span class="detail-value">${donation.payment_status.toUpperCase()}</span>
            </div>
          </div>
          <div class="footer">
            <p>Thank you for your generous contribution!</p>
            <p>This is an official receipt for your donation.</p>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(receiptHTML)
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Donation Receipt</DialogTitle>
        </DialogHeader>
        <div ref={receiptRef} className="space-y-6 p-6 bg-muted/50 rounded-lg">
          {/* Header */}
          <div className="text-center border-b pb-4">
            <h2 className="text-2xl font-bold text-foreground">Ramanuj Sewa Foundation</h2>
            <p className="text-primary font-semibold mt-1">सेवा ही धर्म है</p>
            <p className="text-muted-foreground mt-2">Donation Receipt</p>
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Receipt ID:</span>
              <span className="text-muted-foreground">{donation.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Date:</span>
              <span className="text-muted-foreground">{format(new Date(donation.created_at), 'PPP')}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Donation Type:</span>
              <span className="text-muted-foreground">
                {donationTypeLabels[donation.donation_type] || donation.donation_type}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Donor Name:</span>
              <span className="text-muted-foreground">{donation.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Email:</span>
              <span className="text-muted-foreground">{donation.email}</span>
            </div>
            {donation.phone && (
              <div className="flex justify-between">
                <span className="font-semibold text-foreground">Phone:</span>
                <span className="text-muted-foreground">{donation.phone}</span>
              </div>
            )}
            <div className="border-t pt-3 mt-3">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Donation Amount</p>
                <p className="text-3xl font-bold text-primary">₹{donation.amount.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold text-foreground">Payment Status:</span>
              <span className="text-muted-foreground capitalize">{donation.payment_status}</span>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t pt-4 text-center text-sm text-muted-foreground">
            <p>Thank you for your generous contribution!</p>
            <p className="mt-1">This is an official receipt for your donation.</p>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" onClick={onClose}>
            <X className="w-4 h-4 mr-2" />
            Close
          </Button>
          <Button onClick={handleDownload}>
            <Download className="w-4 h-4 mr-2" />
            Download Receipt
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

