import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, User, MessageCircle, Eye } from 'lucide-react'
import { format } from 'date-fns'

export function BlogCard({ post, index }) {
  return (
    <motion.article
      className="card group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {post.coverImage && (
        <div className="relative overflow-hidden border-b-2 border-retro-black-900">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-retro-black-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 text-retro-white-50">
              <span className="font-bold text-sm">{post.category}</span>
            </div>
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 text-xs font-bold bg-retro-gray-200 text-retro-black-900 border border-retro-black-900">
            {post.category}
          </span>
          {post.featured && (
            <span className="px-2 py-1 text-xs font-bold bg-yellow-200 text-yellow-800 border border-yellow-600">
              Featured
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-retro-black-900 group-hover:text-retro-gray-700 transition-colors">
          <Link to={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {post.excerpt && (
          <p className="text-retro-gray-700 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-sm text-retro-gray-600 mb-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{format(new Date(post.createdAt), 'MMM dd, yyyy')}</span>
          </div>
          {post.readTime && (
            <div className="flex items-center">
              <Clock size={14} className="mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          )}
        </div>

        <div className="flex justify-between items-center pt-4 border-t-2 border-retro-gray-200">
          <Link
            to={`/blog/${post.slug}`}
            className="retro-box px-4 py-2 text-retro-black-900 font-bold hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200 bg-retro-gray-200"
          >
            Read More
          </Link>

          <div className="flex items-center gap-3 text-sm text-retro-gray-600">
            <div className="flex items-center">
              <Eye size={14} className="mr-1" />
              <span>{post.views}</span>
            </div>
            <div className="flex items-center">
              <MessageCircle size={14} className="mr-1" />
              <span>{post._count?.comments || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}