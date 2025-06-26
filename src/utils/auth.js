import { supabase } from '../lib/supabase'
import { dbHelpers } from '../lib/database'

export const signInWithEmail = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Check if user exists in our database
    let user = await dbHelpers.getUserByEmail(email)

    if (!user) {
      // Create user in our database if doesn't exist
      user = await dbHelpers.createUser({
        email,
        name: data.user.user_metadata?.name || email.split('@')[0],
        role: email === import.meta.env.VITE_ADMIN_EMAIL ? 'ADMIN' : 'USER'
      })
    }

    return { user: data.user, error: null }
  } catch (error) {
    return { user: null, error: error.message }
  }
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  return { error }
}

export const getCurrentUser = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export const onAuthStateChange = (callback) => {
  return supabase.auth.onAuthStateChange(callback)
}

export const isAdmin = async () => {
  const user = await getCurrentUser()
  if (!user) return false
  
  const dbUser = await dbHelpers.getUserByEmail(user.email)
  return dbUser?.role === 'ADMIN'
}

// Legacy auth functions for backward compatibility
export const AUTH_KEY = 'portfolio_admin_auth'

export const setAuthToken = (token) => {
  localStorage.setItem(AUTH_KEY, token)
}

export const getAuthToken = () => {
  return localStorage.getItem(AUTH_KEY)
}

export const removeAuthToken = () => {
  localStorage.removeItem(AUTH_KEY)
}

export const isAuthenticated = async () => {
  try {
    const user = await getCurrentUser()
    return !!user
  } catch (error) {
    return false
  }
}

export const createAuthToken = (email) => {
  const payload = {
    email,
    exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours
    iat: Math.floor(Date.now() / 1000)
  }
  
  const header = btoa(JSON.stringify({ alg: 'none', typ: 'JWT' }))
  const payloadEncoded = btoa(JSON.stringify(payload))
  return `${header}.${payloadEncoded}.signature`
}