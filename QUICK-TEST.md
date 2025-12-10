# Quick Test - 5 Minutes

## Test User Sync (No Webhook Needed)

### 1. Start Your App
```bash
npm run dev
```

### 2. Sign Up/In
- Go to your app
- Click "Sign Up" or "Sign In"
- Complete authentication with Clerk

### 3. Visit Dashboard
- Go to: `http://localhost:3000/dashboard`
- User will automatically sync to Supabase!

### 4. Verify in Supabase
1. Open Supabase Dashboard
2. Go to **Table Editor**
3. Click on **users** table
4. **You should see your user!** ✅

## Test Donation

### 1. Make a Donation
- Go to: `http://localhost:3000/donate`
- Fill the form
- Complete payment (or test mode)

### 2. Verify in Supabase
1. Go to **donations** table
2. **You should see your donation!** ✅

## That's It!

Everything works without webhooks. Webhooks are just for automatic syncing when you have a production domain.

