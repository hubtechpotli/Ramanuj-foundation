import Stripe from 'stripe'

// Gracefully handle missing key so build doesn't fail when Stripe isn't configured
const stripeSecretKey = process.env.STRIPE_SECRET_KEY

export const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, { apiVersion: '2024-12-18.acacia' })
  : null

