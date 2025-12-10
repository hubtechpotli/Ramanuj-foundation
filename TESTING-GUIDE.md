# Testing Guide - No Domain Required

## ✅ Good News: You Don't Need Webhooks to Test!

The dashboard sync works **automatically** when users visit `/dashboard`. Webhooks are optional and only needed for automatic syncing without visiting the dashboard.

## 🚀 Quick Test (No Setup Required)

### Step 1: Start Your Development Server

```bash
npm run dev
```

### Step 2: Test User Sync

1. **Sign up** a new user in your app (via Clerk sign-up)
2. **Sign in** with that user
3. **Visit** `/dashboard` page
4. **Check Supabase** → Go to Table Editor → `users` table
5. **You should see** your user there! ✅

### Step 3: Test Donation Flow

1. **Make a donation** (as guest or signed-in user)
2. **Check Supabase** → `donations` table
3. **Verify** donation appears with correct data

## 📋 Complete Testing Checklist

### ✅ User Management
- [ ] Sign up new user → Check Supabase `users` table
- [ ] Sign in existing user → Check `last_sign_in_at` updates
- [ ] Visit dashboard → User syncs automatically
- [ ] View `/admin/users` → See all users

### ✅ Donation Flow (Guest)
- [ ] Visit `/donate` page
- [ ] Fill donation form (without signing in)
- [ ] Complete payment
- [ ] Check Supabase `donations` table → `user_id` should be `NULL`
- [ ] Verify email is saved

### ✅ Donation Flow (Authenticated)
- [ ] Sign in to your app
- [ ] Visit `/dashboard`
- [ ] Make donation from dashboard
- [ ] Check Supabase `donations` table → `user_id` should match Clerk user ID
- [ ] Verify donation appears in dashboard history

### ✅ Linking Guest Donations
- [ ] Make a guest donation with email: `test@example.com`
- [ ] Sign up/sign in with same email: `test@example.com`
- [ ] Visit dashboard
- [ ] Check Supabase `donations` table → `user_id` should now be populated
- [ ] Verify donation appears in dashboard history

## 🔧 Testing Webhooks Locally (Optional)

If you want to test webhooks without a domain, use **ngrok**:

### Step 1: Install ngrok

Download from: https://ngrok.com/download

Or use npm:
```bash
npm install -g ngrok
```

### Step 2: Start Your App

```bash
npm run dev
```

Your app runs on: `http://localhost:3000`

### Step 3: Start ngrok

In a new terminal:
```bash
ngrok http 3000
```

You'll get a URL like: `https://abc123.ngrok.io`

### Step 4: Set Up Clerk Webhook

1. Go to Clerk Dashboard → **Webhooks**
2. Click **Add Endpoint**
3. Enter URL: `https://abc123.ngrok.io/api/webhooks/clerk`
4. Select events:
   - ✅ `user.created`
   - ✅ `user.updated`
5. Click **Create**
6. Copy the **Signing Secret** (starts with `whsec_`)

### Step 5: Add to Environment

Add to `.env.local`:
```bash
CLERK_WEBHOOK_SECRET=whsec_your_secret_here
```

### Step 6: Test Webhook

1. **Sign up** a new user
2. **Check Supabase** → User should appear automatically (even without visiting dashboard)
3. **Update user profile** in Clerk
4. **Check Supabase** → User should be updated

## 🐛 Troubleshooting

### Users Not Appearing in Supabase

1. **Check browser console** for errors
2. **Check server logs** for sync errors
3. **Verify Supabase connection** in `.env.local`
4. **Check RLS policies** in Supabase

### Donations Not Saving

1. **Check API route** `/api/donations` is working
2. **Verify Stripe keys** are set
3. **Check Supabase** `donations` table exists
4. **Verify RLS policies** allow inserts

### Webhook Not Working

1. **Check ngrok** is running
2. **Verify webhook URL** in Clerk dashboard
3. **Check webhook secret** in `.env.local`
4. **Check Clerk webhook logs** in dashboard

## 📊 Verify Everything Works

### Check Supabase Tables

1. **Users Table**:
   ```sql
   SELECT * FROM users ORDER BY created_at DESC;
   ```

2. **Donations Table**:
   ```sql
   SELECT * FROM donations ORDER BY created_at DESC;
   ```

3. **Check Linking**:
   ```sql
   SELECT d.*, u.email as user_email 
   FROM donations d 
   LEFT JOIN users u ON d.user_id = u.clerk_user_id;
   ```

## 🎯 Production Deployment

When you're ready for production:

1. **Deploy your app** (Vercel, Netlify, etc.)
2. **Get your production URL**: `https://yourdomain.com`
3. **Set up webhook** in Clerk:
   - URL: `https://yourdomain.com/api/webhooks/clerk`
   - Events: `user.created`, `user.updated`
4. **Add webhook secret** to production environment variables
5. **Test** by signing up a new user

## 💡 Pro Tips

1. **Dashboard sync works immediately** - no webhook needed for testing
2. **Webhooks are optional** - they just make syncing automatic
3. **Test locally first** - use ngrok for webhook testing
4. **Check Supabase logs** - see what's happening in real-time
5. **Use Clerk dashboard** - verify users are created there first

## ✅ Summary

**For Testing Right Now:**
- ✅ Just visit `/dashboard` after signing in
- ✅ User will sync automatically
- ✅ No webhook setup needed
- ✅ Everything works!

**For Production Later:**
- Set up webhook when you have a domain
- Webhooks make syncing automatic
- But dashboard sync still works as backup

