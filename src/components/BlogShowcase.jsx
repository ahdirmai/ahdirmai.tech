import { motion } from 'framer-motion'
import { BlogCard } from './BlogCard'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getFeaturedPosts } from '../data/blog'

export function BlogShowcase() {
  const featuredPosts = getFeaturedPosts(2);

  if (featuredPosts.length === 0) {
    return null;
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
  );
}