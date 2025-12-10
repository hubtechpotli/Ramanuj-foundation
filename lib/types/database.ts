export type DonationType = 
  | 'gau-sewa'
  | 'girl-marriage-support'
  | 'gurukul-donation'
  | 'health-camps'
  | 'general'

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'

export interface User {
  id: string
  clerk_user_id: string
  email: string
  first_name: string | null
  last_name: string | null
  image_url: string | null
  created_at: string
  updated_at: string
  last_sign_in_at: string | null
}

export interface Donation {
  id: string
  user_id: string | null // Clerk user ID, null if guest donation
  email: string
  name: string
  phone: string | null
  donation_type: DonationType
  amount: number
  message: string | null
  payment_status: PaymentStatus
  payment_intent_id: string | null // Stripe payment intent ID
  receipt_url: string | null
  created_at: string
  updated_at: string
}

export interface DonationFormData {
  donation_type: DonationType
  name: string
  email: string
  phone: string
  amount: number
  message?: string
}
