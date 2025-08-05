import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// Create a mock client for build time if environment variables are not available
const createSupabaseClient = () => {
  if (typeof window === 'undefined' || !supabaseUrl || !supabaseAnonKey) {
    // Return a mock client for build time or when env vars are missing
    return {
      auth: {
        signUp: async () => ({ data: null, error: null }),
        signInWithPassword: async () => ({ data: null, error: null }),
        signInWithOAuth: async () => ({ data: null, error: null }),
        signOut: async () => ({ error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        onAuthStateChange: (callback) => {
          // Mock subscription
          return { data: { subscription: { unsubscribe: () => {} } } }
        }
      },
      from: () => ({
        insert: () => ({ select: async () => ({ data: null, error: null }) }),
        select: () => ({ eq: () => ({ order: () => ({ data: null, error: null }) }) }),
        update: () => ({ eq: () => ({ select: async () => ({ data: null, error: null }) }) }),
        delete: () => ({ eq: () => ({ select: async () => ({ data: null, error: null }) }) })
      })
    }
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const supabase = createSupabaseClient()

// Fonctions utilitaires pour l'authentification
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  return { data, error }
}

export const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`
    }
  })
  return { data, error }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  return { user, error }
}

// Fonctions pour les sites web
export const createSite = async (siteData) => {
  const { data, error } = await supabase
    .from('sites')
    .insert([siteData])
    .select()
  return { data, error }
}

export const getUserSites = async (userId) => {
  const { data, error } = await supabase
    .from('sites')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
  return { data, error }
}

export const updateSite = async (siteId, updates) => {
  const { data, error } = await supabase
    .from('sites')
    .update(updates)
    .eq('id', siteId)
    .select()
  return { data, error }
}

export const getSiteById = async (siteId) => {
  const { data, error } = await supabase
    .from('sites')
    .select('*')
    .eq('id', siteId)
    .single()
  return { data, error }
}

export const deleteSite = async (siteId) => {
  const { data, error } = await supabase
    .from('sites')
    .delete()
    .eq('id', siteId)
    .select()
  return { data, error }
}

// Fonctions pour les utilisateurs
export const createUserProfile = async (profile) => {
  const { data, error } = await supabase
    .from('profiles')
    .insert([profile])
    .select()
  return { data, error }
}

export const getUserProfile = async (userId) => {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()
  return { data, error }
}

export const updateUserProfile = async (userId, updates) => {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', userId)
    .select()
  return { data, error }
} 