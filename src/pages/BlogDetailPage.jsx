import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Eye, MessageCircle, Share2 } from 'lucide-react'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'

export function BlogDetailPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    fetchPost()
    window.scrollTo(0, 0)
  }, [slug])

  const fetchPost = async () => {
    try {
      // Mock data for now - replace with actual API call
      const mockPost = {
        id: '1',
        title: 'Building Modern Web Applications with React and TypeScript',
        slug: 'building-modern-web-apps-react-typescript',
        excerpt: 'Learn how to create scalable and maintainable web applications using React and TypeScript with best practices and modern tooling.',
        content: `# Building Modern Web Applications with React and TypeScript

In today's rapidly evolving web development landscape, creating scalable and maintainable applications is more important than ever. React and TypeScript have emerged as a powerful combination that enables developers to build robust, type-safe applications with excellent developer experience.

## Why React and TypeScript?

React has revolutionized how we think about building user interfaces, introducing concepts like component-based architecture and declarative programming. TypeScript adds static typing to JavaScript, catching errors at compile time and providing better tooling support.

### Benefits of Using TypeScript with React

1. **Type Safety**: Catch errors before they reach production
2. **Better IDE Support**: Enhanced autocomplete and refactoring
3. **Self-Documenting Code**: Types serve as documentation
4. **Easier Refactoring**: Confident code changes with type checking

## Setting Up Your Development Environment

\`\`\`bash
# Create a new React app with TypeScript
npx create-react-app my-app --template typescript

# Or with Vite (recommended)
npm create vite@latest my-app -- --template react-ts
\`\`\`

## Best Practices

### 1. Component Structure

Always define clear interfaces for your component props:

\`\`\`typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
\`\`\`

### 2. State Management

Use proper typing for your state:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState<boolean>(false);
\`\`\`

## Advanced Patterns

### Custom Hooks

Create reusable logic with custom hooks:

\`\`\`typescript
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
\`\`\`

## Conclusion

React and TypeScript together provide a powerful foundation for building modern web applications. The combination offers type safety, better developer experience, and more maintainable code. Start small, gradually adopt TypeScript features, and you'll see the benefits in your development workflow.

Happy coding! 🚀`,
        coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1200',
        published: true,
        featured: true,
        views: 1250,
        readTime: 8,
        tags: ['React', 'TypeScript', 'Web Development'],
        category: 'TECH',
        createdAt: new Date('2024-01-15'),
        publishedAt: new Date('2024-01-15'),
        author: {
          name: 'Ridha Fahmi J',
          email: 'ridhofahmij225@gmail.com',
          avatar: null
        },
        comments: [
          {
            id: '1',
            content: 'Great article! Very helpful for understanding TypeScript with React.',
            createdAt: new Date('2024-01-16'),
            author: {
              name: 'John Doe',
              avatar: null
            }
          },
          {
            id: '2',
            content: 'Thanks for the practical examples. The custom hooks section was particularly useful.',
            createdAt: new Date('2024-01-17'),
            author: {
              name: 'Jane Smith',
              avatar: null
            }
          }
        ]
      }

      // Mock related posts
      const mockRelatedPosts = [
        {
          id: '2',
          title: 'The Future of Web Development: Trends to Watch in 2024',
          slug: 'future-web-development-trends-2024',
          coverImage: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          id: '3',
          title: 'Design Systems: Creating Consistent User Experiences',
          slug: 'design-systems-consistent-user-experiences',
          coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]

      setPost(mockPost)
      setRelatedPosts(mockRelatedPosts)
      
      if (mockPost) {
        document.title = `${mockPost.title} | Ridha Fahmi J Blog`
      }
      
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching post:', error)
      setIsLoading(false)
    }
  }

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

  if (isLoading) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-retro-black-900"></div>
      </div>
    )
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
                className="retro-box px-4 py-2 bg-retro-gray-200 hover:bg-retro-gray-300 transition-colors"
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