import { supabase } from './supabase'
import { prisma } from './prisma'

export const signIn = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Check if user exists in our database
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      // Create user in our database if doesn't exist
      await prisma.user.create({
        data: {
          email,
          name: data.user.user_metadata?.name || email.split('@')[0],
          role: email === import.meta.env.VITE_ADMIN_EMAIL ? 'ADMIN' : 'USER'
        }
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

export const isAdmin = async () => {
  const user = await getCurrentUser()
  if (!user) return false
  
  const dbUser = await prisma.user.findUnique({
    where: { email: user.email }
  })
  
  return dbUser?.role === 'ADMIN'
}