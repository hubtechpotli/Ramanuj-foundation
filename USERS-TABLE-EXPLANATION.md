# Users Table Implementation

## ✅ What's Been Added

### 1. **Users Table** (`users`)
Tracks all users who sign in to your website, even if they haven't made a donation yet.

**Fields:**
- `id` - Unique UUID
- `clerk_user_id` - Clerk user ID (unique, indexed)
- `email` - User email (indexed)
- `first_name` - User's first name
- `last_name` - User's last name
- `image_url` - Profile image from Clerk
- `created_at` - When user first signed up
- `updated_at` - Last update timestamp
- `last_sign_in_at` - Last sign-in time

### 2. **Donations Table** (Updated)
Still tracks all donations (both guest and authenticated):
- Guest donations: `user_id = NULL`
- Authenticated donations: `user_id = Clerk user ID`

## 🔄 How It Works

### When User Signs In:
1. User signs in with Clerk
2. Dashboard automatically calls `/api/users/sync`
3. User data is saved/updated in `users` table
4. `last_sign_in_at` is updated

### When User Makes Donation:
1. **Guest Donation**: Saved to `donations` table with `user_id = NULL`
2. **Authenticated Donation**: Saved to `donations` table with `user_id = Clerk user ID`

### Linking Guest Donations:
- When user signs in, system checks for donations with matching email
- Updates those donations to include `user_id`
- User can now see all their donations in dashboard

## 📊 Database Structure

```
users table:
├── id (UUID)
├── clerk_user_id (TEXT, unique) ← Links to donations.user_id
├── email (TEXT)
├── first_name (TEXT)
├── last_name (TEXT)
├── image_url (TEXT)
├── created_at (TIMESTAMP)
├── updated_at (TIMESTAMP)
└── last_sign_in_at (TIMESTAMP)

donations table:
├── id (UUID)
├── user_id (TEXT, nullable) ← References users.clerk_user_id
├── email (TEXT)
├── name (TEXT)
├── phone (TEXT)
├── donation_type (TEXT)
├── amount (DECIMAL)
├── payment_status (TEXT)
├── payment_intent_id (TEXT)
├── receipt_url (TEXT)
├── created_at (TIMESTAMP)
└── updated_at (TIMESTAMP)
```

## 🎯 Use Cases

### 1. Track All Signed-In Users
- View all users at `/admin/users`
- See when they joined
- See their last sign-in time
- View their profile information

### 2. Track All Donations
- View all donations (guest + authenticated)
- Filter by user_id for authenticated donations
- Filter by email for guest donations
- Link guest donations when user signs in

### 3. User Analytics
- Total users count
- Users who have donated vs. haven't
- Sign-in frequency
- User engagement metrics

## 🔐 Security

- RLS enabled on both tables
- Service role key used in API routes
- Authorization handled via Clerk authentication
- Users can only see their own data (filtered in API)

## 📝 API Endpoints

### `/api/users/sync` (POST)
- Syncs Clerk user data to Supabase
- Called automatically when user accesses dashboard
- Creates or updates user record

### `/api/users/sync` (GET)
- Fetches all users (for admin view)
- Supports pagination with `limit` and `offset` params

## 🚀 Next Steps

1. **Run the updated migration** in Supabase SQL Editor
2. **Test user sync**: Sign in and check if user appears in `users` table
3. **View users**: Visit `/admin/users` to see all signed-in users
4. **Monitor**: Check both tables to see users and their donations

## 📈 Benefits

✅ **Complete User Tracking**: Know who's using your site
✅ **Donation Analytics**: See which users donate
✅ **User Engagement**: Track sign-in frequency
✅ **Data Linking**: Connect guest donations to users
✅ **Admin Dashboard**: View all users in one place

