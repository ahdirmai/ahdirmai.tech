import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BlogCard } from '../components/BlogCard'
import { Search } from 'lucide-react'
import { getAllPosts } from '../data/blog'

export function BlogPage() {
  const [posts] = useState(getAllPosts(true))
  const [filteredPosts, setFilteredPosts] = useState([])
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', 'TECH', 'DESIGN', 'TUTORIAL', 'PERSONAL', 'NEWS']

  useEffect(() => {
    document.title = 'Blog | Ridha Fahmi J Portfolio'
  }, [])

  useEffect(() => {
    filterPosts()
  }, [posts, activeFilter, searchTerm])

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