import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { auth } from '@clerk/nextjs/server'
import { DonationFormData } from '@/lib/types/database'

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    const body: DonationFormData = await request.json()

    const supabase = createServerClient()

    // Create donation record
    const { data: donation, error } = await supabase
      .from('donations')
      .insert({
        user_id: userId || null,
        email: body.email,
        name: body.name,
        phone: body.phone || null,
        donation_type: body.donation_type,
        amount: body.amount,
        message: body.message || null,
        payment_status: 'pending',
      })
      .select()
      .single()

    if (error) {
      console.error('Error creating donation:', error)
      return NextResponse.json({ error: 'Failed to create donation' }, { status: 500 })
    }

    return NextResponse.json({ donation }, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/donations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()
    const { searchParams } = new URL(request.url)
    const email = searchParams.get('email')

    const supabase = createServerClient()

    let query = supabase
      .from('donations')
      .select('*')
      .order('created_at', { ascending: false })

    // If user is authenticated, get their donations by user_id
    if (userId) {
      query = query.eq('user_id', userId)
    } else if (email) {
      // If not authenticated but has email, get donations by email
      query = query.eq('email', email)
    } else {
      return NextResponse.json({ donations: [] }, { status: 200 })
    }

    const { data: donations, error } = await query

    if (error) {
      console.error('Error fetching donations:', error)
      return NextResponse.json({ error: 'Failed to fetch donations' }, { status: 500 })
    }

    return NextResponse.json({ donations: donations || [] }, { status: 200 })
  } catch (error) {
    console.error('Error in GET /api/donations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

