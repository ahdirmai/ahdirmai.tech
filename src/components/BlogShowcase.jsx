import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { dbHelpers } from '../lib/database'

export function BlogShowcase() {
  const [featuredPosts, setFeaturedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedPosts()
  }, [])

  const fetchFeaturedPosts = async () => {
    try {
      // Try to fetch from database first, fallback to mock data
      let postsData
      try {
        postsData = await dbHelpers.getFeaturedPosts(2)
      } catch (error) {
        console.log('Database not available, using mock data')
        // Mock data fallback
        postsData = [
          {
            id: '1',
            title: 'Building Modern Web Applications with React and TypeScript',
            slug: 'building-modern-web-apps-react-typescript',
            excerpt: 'Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and modern tooling.',
            coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
            published: true,
            featured: true,
            views: 1250,
            readTime: 8,
            tags: ['React', 'TypeScript', 'Web Development'],
            category: 'TECH',
            createdAt: new Date('2024-01-15'),
            author: {
              name: 'Ridha Fahmi J',
              email: 'ridhofahmij225@gmail.com',
              avatar: null
            },
            _count: { comments: 5 }
          },
          {
            id: '3',
            title: 'Design Systems: Creating Consistent User Experiences',
            slug: 'design-systems-consistent-user-experiences',
            excerpt: 'Learn how to build and maintain design systems that ensure consistency across your digital products.',
            coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
            published: true,
            featured: true,
            views: 675,
            readTime: 10,
            tags: ['Design', 'UI/UX', 'Design Systems'],
            category: 'DESIGN',
            createdAt: new Date('2024-01-05'),
            author: {
              name: 'Ridha Fahmi J',
              email: 'ridhofahmij225@gmail.com',
              avatar: null
            },
            _count: { comments: 8 }
          }
        ]
      }
      
      setFeaturedPosts(postsData)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching featured posts:', error)
      setIsLoading(false)
    }
  }

  if (isLoading) {
    return (
      <section className="py-20 bg-retro-gray-100">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-retro-black-900"></div>
          </div>
        </div>
      </section>
    )
  }

  if (featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-retro-gray-100">
      <div className="container">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="section-title mb-3">Latest Blog Posts</h2>
            <p className="text-retro-gray-700 max-w-2xl">
              Insights, tutorials, and thoughts about web development, design, and technology.
            </p>
          </div>

          <Link
            to="/blog"
            className="mt-6 md:mt-0 inline-flex items-center text-retro-black-900 font-bold hover:text-retro-gray-700 transition-colors"
          >
            View All Posts
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}