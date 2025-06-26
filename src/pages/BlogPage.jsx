import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from '../components/BlogCard'
import { Search } from 'lucide-react'
import { dbHelpers } from '../lib/database'

export function BlogPage() {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const categories = ['All', 'TECH', 'DESIGN', 'TUTORIAL', 'PERSONAL', 'NEWS']

  useEffect(() => {
    document.title = 'Blog | Ridha Fahmi J Portfolio'
    fetchPosts()
  }, [])

  useEffect(() => {
    filterPosts()
  }, [posts, activeFilter, searchTerm])

  const fetchPosts = async () => {
    try {
      // Try to fetch from database first, fallback to mock data
      let postsData
      try {
        postsData = await dbHelpers.getAllPosts(true)
      } catch (error) {
        console.log('Database not available, using mock data')
        // Mock data fallback
        postsData = [
          {
            id: '1',
            title: 'Building Modern Web Applications with React and TypeScript',
            slug: 'building-modern-web-apps-react-typescript',
            excerpt: 'Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and modern tooling.',
            content: '# Building Modern Web Applications\n\nThis is a comprehensive guide...',
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
            id: '2',
            title: 'The Future of Web Development: Trends to Watch in 2024',
            slug: 'future-web-development-trends-2024',
            excerpt: 'Explore the latest trends and technologies shaping the future of web development, from AI integration to new frameworks.',
            content: '# The Future of Web Development\n\nWeb development is evolving...',
            coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
            published: true,
            featured: false,
            views: 890,
            readTime: 6,
            tags: ['Web Development', 'Trends', 'Future'],
            category: 'TECH',
            createdAt: new Date('2024-01-10'),
            author: {
              name: 'Ridha Fahmi J',
              email: 'ridhofahmij225@gmail.com',
              avatar: null
            },
            _count: { comments: 3 }
          },
          {
            id: '3',
            title: 'Design Systems: Creating Consistent User Experiences',
            slug: 'design-systems-consistent-user-experiences',
            excerpt: 'Learn how to build and maintain design systems that ensure consistency across your digital products.',
            content: '# Design Systems\n\nConsistency is key...',
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
      
      setPosts(postsData)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching posts:', error)
      setIsLoading(false)
    }
  }

  const filterPosts = () => {
    let filtered = posts

    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(post => post.category === activeFilter)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    setFilteredPosts(filtered)
  }

  if (isLoading) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-retro-black-900"></div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4 text-retro-black-900">Blog</h1>
          <p className="text-retro-gray-700 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
            Stay updated with the latest trends and best practices.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-retro-gray-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="retro-input pl-12"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 text-sm font-bold border-2 border-retro-black-900 transition-all duration-200 ${
                  activeFilter === category
                    ? 'bg-retro-black-900 text-retro-white-50'
                    : 'bg-retro-white-50 text-retro-black-900 hover:bg-retro-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-retro-black-900 mb-2">No posts found</h3>
            <p className="text-retro-gray-700 mb-6">
              {searchTerm
                ? `No posts match your search for "${searchTerm}"`
                : `No posts found in the ${activeFilter} category`}
            </p>
            <button
              onClick={() => {
                setActiveFilter('All')
                setSearchTerm('')
              }}
              className="btn btn-primary"
            >
              Show All Posts
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}