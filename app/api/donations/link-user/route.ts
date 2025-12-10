import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { auth } from '@clerk/nextjs/server'

// This endpoint links guest donations to a user when they sign up/sign in
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()
    const { email } = await request.json()

    if (!userId || !email) {
      return NextResponse.json({ error: 'Missing user ID or email' }, { status: 400 })
    }

    const supabase = createServerClient()

    // Find all donations with this email that don't have a user_id
    const { data: donations, error } = await supabase
      .from('donations')
      .update({ user_id: userId })
      .eq('email', email)
      .is('user_id', null)
      .select()

    if (error) {
      console.error('Error linking donations:', error)
      return NextResponse.json({ error: 'Failed to link donations' }, { status: 500 })
    }

    return NextResponse.json({ 
      linked: donations?.length || 0,
      donations 
    }, { status: 200 })
  } catch (error) {
    console.error('Error in link-user:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

