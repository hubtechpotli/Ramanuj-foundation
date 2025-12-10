import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { auth, currentUser } from '@clerk/nextjs/server'

// This endpoint syncs Clerk user data to Supabase users table
// Call this when user signs in or when you need to update user data
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await currentUser()

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const supabase = createServerClient()

    // Get user's primary email
    const email = user.emailAddresses[0]?.emailAddress || user.primaryEmailAddress?.emailAddress || ''
    const firstName = user.firstName || ''
    const lastName = user.lastName || ''
    const imageUrl = user.imageUrl || ''

    // Upsert user (insert or update if exists)
    const { data: dbUser, error } = await supabase
      .from('users')
      .upsert(
        {
          clerk_user_id: userId,
          email: email,
          first_name: firstName,
          last_name: lastName,
          image_url: imageUrl,
          last_sign_in_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: 'clerk_user_id',
          ignoreDuplicates: false,
        }
      )
      .select()
      .single()

    if (error) {
      console.error('Error syncing user:', error)
      return NextResponse.json({ error: 'Failed to sync user' }, { status: 500 })
    }

    return NextResponse.json({ user: dbUser }, { status: 200 })
  } catch (error) {
    console.error('Error in POST /api/users/sync:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Get all users (for admin purposes)
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '100')
    const offset = parseInt(searchParams.get('offset') || '0')

    const { data: users, error } = await supabase
      .from('users')
      .select('*')
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (error) {
      console.error('Error fetching users:', error)
      return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
    }

    return NextResponse.json({ users: users || [] }, { status: 200 })
  } catch (error) {
    console.error('Error in GET /api/users:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

