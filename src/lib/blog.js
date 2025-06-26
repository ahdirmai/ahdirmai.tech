import { prisma } from './prisma'

export const getAllPosts = async (published = true) => {
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
}

export const getPostBySlug = async (slug) => {
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
}

export const getFeaturedPosts = async (limit = 3) => {
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
      }
    },
    orderBy: {
      createdAt: 'desc'
    },
    take: limit
  })
}

export const getPostsByCategory = async (category) => {
  return await prisma.post.findMany({
    where: { 
      published: true,
      category: category.toUpperCase()
    },
    include: {
      author: {
        select: {
          name: true,
          email: true,
          avatar: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const createPost = async (postData) => {
  return await prisma.post.create({
    data: {
      ...postData,
      slug: generateSlug(postData.title)
    }
  })
}

export const updatePost = async (id, postData) => {
  return await prisma.post.update({
    where: { id },
    data: postData
  })
}

export const deletePost = async (id) => {
  return await prisma.post.delete({
    where: { id }
  })
}

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-')
}