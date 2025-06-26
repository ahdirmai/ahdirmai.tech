import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis

export const prisma = globalForPrisma.prisma || new PrismaClient({
  log: ['query', 'error', 'warn'],
})

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

// Database helper functions
export const dbHelpers = {
  // Blog functions
  async getAllPosts(published = true) {
    return await prisma.post.findMany({
      where: published ? { published: true } : {},
      include: {
        author: {
          select: {
            name: true,
            email: true,
            avatar: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  },

  async getPostBySlug(slug) {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: {
        author: {
          select: {
            name: true,
            email: true,
            avatar: true
          }
        },
        comments: {
          where: { approved: true },
          include: {
            author: {
              select: {
                name: true,
                avatar: true
              }
            }
          },
          orderBy: {
            createdAt: 'desc'
          }
        }
      }
    })

    if (post) {
      // Increment view count
      await prisma.post.update({
        where: { slug },
        data: { views: { increment: 1 } }
      })
    }

    return post
  },

  async getFeaturedPosts(limit = 3) {
    return await prisma.post.findMany({
      where: { 
        published: true,
        featured: true 
      },
      include: {
        author: {
          select: {
            name: true,
            email: true,
            avatar: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    })
  },

  // Project functions
  async getAllProjects() {
    return await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  },

  async getProjectBySlug(slug) {
    return await prisma.project.findUnique({
      where: { slug }
    })
  },

  async getFeaturedProjects(limit = 3) {
    return await prisma.project.findMany({
      where: { featured: true },
      orderBy: {
        createdAt: 'desc'
      },
      take: limit
    })
  },

  // User functions
  async getUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    })
  },

  async createUser(userData) {
    return await prisma.user.create({
      data: userData
    })
  },

  // Contact functions
  async createContact(contactData) {
    return await prisma.contact.create({
      data: contactData
    })
  },

  async getAllContacts() {
    return await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
  }
}