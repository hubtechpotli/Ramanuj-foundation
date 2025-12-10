import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { UsersList } from '@/components/admin/users-list'

export default async function AdminUsersPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/')
  }

  // TODO: Add admin role check here if needed
  // For now, any authenticated user can view this page

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">All Users</h1>
        <UsersList />
      </div>
    </div>
  )
}

