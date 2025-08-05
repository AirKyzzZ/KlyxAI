/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'netlify.app', 'ai-klyx-fr.netlify.app'],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
  },
}

module.exports = nextConfig 