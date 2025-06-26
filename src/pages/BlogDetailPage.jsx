import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Eye, MessageCircle, Share2 } from 'lucide-react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import { getPostBySlug, getAllPosts } from '../data/blog'

export function BlogDetailPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    const foundPost = getPostBySlug(slug)
    setPost(foundPost)
    
    if (foundPost) {
      document.title = `${foundPost.title} | Ridha Fahmi J Blog`
      
      // Get related posts (same category, excluding current post)
      const allPosts = getAllPosts(true)
      const related = allPosts
        .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
        .slice(0, 2)
      setRelatedPosts(related)
    }
    
    window.scrollTo(0, 0)
  }, [slug])

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (!post) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-retro-black-900 mb-4">Post Not Found</h1>
        <p className="text-retro-gray-700 mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
        <Link to="/blog" className="btn btn-primary">
          <ArrowLeft size={18} className="mr-2" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-retro-gray-700 hover:text-retro-black-900 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-retro-gray-200 text-retro-black-900 text-sm font-bold border border-retro-black-900">
                {post.category}
              </span>
              {post.featured && (
                <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-sm font-bold border border-yellow-600">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-retro-black-900">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-retro-gray-700 mb-6">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>{format(new Date(post.createdAt), 'MMMM dd, yyyy')}</span>
              </div>
              {post.readTime && (
                <div className="flex items-center">
                  <Clock size={18} className="mr-2" />
                  <span>{post.readTime} min read</span>
                </div>
              )}
              <div className="flex items-center">
                <Eye size={18} className="mr-2" />
                <span>{post.views} views</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-retro-gray-100 text-retro-gray-700 text-xs font-medium border border-retro-gray-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={handleShare}
                className="retro-box px-4 py-2 bg-retro-gray-200 hover:bg-retro-gray-300 transition-colors flex items-center"
              >
                <Share2 size={16} className="mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Cover Image */}
          {post.coverImage && (
            <motion.div
              className="mb-12 retro-box shadow-retro-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto"
              />
            </motion.div>
          )}

          {/* Article Content */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none mb-12">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                className="text-retro-gray-800 leading-relaxed"
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Comments Section */}
            {post.comments && post.comments.length > 0 && (
              <div className="border-t-2 border-retro-gray-200 pt-12">
                <h3 className="text-2xl font-bold mb-8 text-retro-black-900 flex items-center">
                  <MessageCircle size={24} className="mr-2" />
                  Comments ({post.comments.length})
                </h3>

                <div className="space-y-6">
                  {post.comments.map((comment) => (
                    <div key={comment.id} className="card p-6">
                      <div className="flex items-start space-x-4">
                        <div className="retro-box w-12 h-12 flex items-center justify-center bg-retro-gray-200 flex-shrink-0">
                          <User size={20} className="text-retro-black-900" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-bold text-retro-black-900">
                              {comment.author.name}
                            </span>
                            <span className="text-sm text-retro-gray-600">
                              {format(new Date(comment.createdAt), 'MMM dd, yyyy')}
                            </span>
                          </div>
                          <p className="text-retro-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="border-t-2 border-retro-gray-200 pt-12 mt-12">
                <h3 className="text-2xl font-bold mb-8 text-retro-black-900">
                  Related Posts
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="card p-4 group hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
                    >
                      <img
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        className="w-full h-32 object-cover mb-4 border-2 border-retro-black-900"
                      />
                      <h4 className="font-bold text-retro-black-900 group-hover:text-retro-gray-700 transition-colors">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}