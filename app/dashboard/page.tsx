import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { DashboardContent } from '@/components/dashboard/dashboard-content'
import { createServerClient } from '@/lib/supabase/server'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/')
  }

  const user = await currentUser()

  // Sync user to Supabase users table (server-side)
  if (userId && user) {
    try {
      const supabase = createServerClient()
      const email = user.emailAddresses[0]?.emailAddress || user.primaryEmailAddress?.emailAddress || ''
      const firstName = user.firstName || ''
      const lastName = user.lastName || ''
      const imageUrl = user.imageUrl || ''

      await supabase
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
    } catch (error) {
      // Silently fail - user sync will also happen in client component
      console.error('Error syncing user:', error)
    }
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <DashboardContent userEmail={user?.emailAddresses[0]?.emailAddress || ''} />
      <Footer />
    </div>
  )
}

