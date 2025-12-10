# Environment Variables Guide

## 📝 .env.local File Format

Create a file named `.env.local` in your project root with the following format:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxx
CLERK_SECRET_KEY=sk_test_xxxxx

# Stripe Payment
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

## 🔑 How to Get Supabase Keys

### Step 1: Go to Supabase Dashboard
1. Visit: https://supabase.com/dashboard
2. Select your project (or create one)

### Step 2: Get API Keys
1. Go to **Settings** (gear icon in sidebar)
2. Click **API** in the settings menu
3. You'll see:

#### Project URL
- **Label**: Project URL
- **Value**: `https://xxxxxxxxxxxxx.supabase.co`
- **Use for**: `NEXT_PUBLIC_SUPABASE_URL`

#### Anon/Public Key
- **Label**: `anon` `public`
- **Value**: Long JWT token starting with `eyJ...`
- **Use for**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Note**: Safe to expose in client-side code

#### Service Role Key
- **Label**: `service_role` `secret`
- **Value**: Long JWT token starting with `eyJ...`
- **Use for**: `SUPABASE_SERVICE_ROLE_KEY`
- **⚠️ WARNING**: Keep this SECRET! Never expose in client-side code!

## 📋 Complete .env.local Example

```bash
# ============================================
# Supabase Configuration
# ============================================
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTY0NTI4OTYwMCwiZXhwIjoxOTYwODY1NjAwfQ.example-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiY2RlZmdoaWprbG1ub3AiLCJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQ1Mjg5NjAwLCJleHAiOjE5NjA4NjU2MDB9.example-service-role-key-here

# ============================================
# Clerk Authentication
# ============================================
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
CLERK_SECRET_KEY=sk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890

# ============================================
# Stripe Payment
# ============================================
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
STRIPE_SECRET_KEY=sk_test_51AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
STRIPE_WEBHOOK_SECRET=whsec_1234567890abcdefghijklmnopqrstuvwxyz

# ============================================
# Optional: Clerk Webhook
# ============================================
# CLERK_WEBHOOK_SECRET=whsec_1234567890abcdefghijklmnopqrstuvwxyz
```

## ✅ Important Notes

### Variable Naming
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Variables without `NEXT_PUBLIC_` are server-side only

### Security
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Safe to expose (has RLS protection)
- ❌ `SUPABASE_SERVICE_ROLE_KEY` - **NEVER expose** (bypasses RLS)
- ❌ `CLERK_SECRET_KEY` - **NEVER expose** (server-side only)
- ❌ `STRIPE_SECRET_KEY` - **NEVER expose** (server-side only)

### File Location
- Create `.env.local` in the **root** of your project (same level as `package.json`)
- The file is automatically ignored by git (already in `.gitignore`)

### Format Rules
- No spaces around `=`
- No quotes needed (unless value has spaces)
- One variable per line
- Comments start with `#`

## 🧪 Test Your Configuration

After setting up `.env.local`:

1. **Restart your dev server**:
   ```bash
   npm run dev
   ```

2. **Check for errors**:
   - If you see "Missing Supabase environment variables", check your keys
   - Make sure there are no extra spaces or quotes

3. **Test connection**:
   - Visit `/dashboard` after signing in
   - Check Supabase dashboard → Table Editor → `users` table
   - User should appear!

## 📸 Visual Guide

In Supabase Dashboard → Settings → API:

```
┌─────────────────────────────────────────┐
│ Project URL                             │
│ https://xxxxx.supabase.co               │ ← NEXT_PUBLIC_SUPABASE_URL
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ anon public                             │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ ← NEXT_PUBLIC_SUPABASE_ANON_KEY
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ service_role secret                      │
│ eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... │ ← SUPABASE_SERVICE_ROLE_KEY
└─────────────────────────────────────────┘
```

## 🔍 Quick Checklist

- [ ] Created `.env.local` file in project root
- [ ] Added `NEXT_PUBLIC_SUPABASE_URL` (starts with `https://`)
- [ ] Added `NEXT_PUBLIC_SUPABASE_ANON_KEY` (long JWT token)
- [ ] Added `SUPABASE_SERVICE_ROLE_KEY` (long JWT token)
- [ ] No spaces around `=`
- [ ] No quotes around values
- [ ] Restarted dev server after adding variables

