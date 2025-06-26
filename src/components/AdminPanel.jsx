import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Save, LogOut, Edit, Plus, Trash2, Eye, FileText, Users, MessageSquare } from 'lucide-react'
import { signOut } from '../utils/auth'
import { dbHelpers } from '../lib/database'

export function AdminPanel({ onLogout }) {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [projects, setProjects] = useState([])
  const [posts, setPosts] = useState([])
  const [contacts, setContacts] = useState([])
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalPosts: 0,
    totalContacts: 0,
    totalViews: 0
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      setIsLoading(true)
      
      // Load all data
      const [projectsData, postsData, contactsData] = await Promise.all([
        dbHelpers.getAllProjects(),
        dbHelpers.getAllPosts(false), // Include unpublished posts for admin
        dbHelpers.getAllContacts()
      ])

      setProjects(projectsData)
      setPosts(postsData)
      setContacts(contactsData)

      // Calculate stats
      const totalViews = postsData.reduce((sum, post) => sum + post.views, 0)
      setStats({
        totalProjects: projectsData.length,
        totalPosts: postsData.length,
        totalContacts: contactsData.length,
        totalViews
      })
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = async () => {
    await signOut()
    onLogout()
  }

  const StatCard = ({ title, value, icon, color = 'bg-retro-gray-200' }) => (
    <div className={`card p-6 ${color}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-bold text-retro-gray-600 uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-black text-retro-black-900">{value}</p>
        </div>
        <div className="retro-box w-12 h-12 flex items-center justify-center bg-retro-white-50">
          {icon}
        </div>
      </div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-retro-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-retro-black-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-retro-gray-100">
      {/* Header */}
      <header className="bg-retro-white-50 border-b-2 border-retro-black-900 p-4">
        <div className="container flex justify-between items-center">
          <h1 className="text-2xl font-bold text-retro-black-900">Admin Panel</h1>
          <button
            onClick={handleLogout}
            className="btn btn-outline"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </button>
        </div>
      </header>

      <div className="container py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <Eye size={16} /> },
            { id: 'projects', label: 'Projects', icon: <FileText size={16} /> },
            { id: 'blog', label: 'Blog Posts', icon: <FileText size={16} /> },
            { id: 'contacts', label: 'Contacts', icon: <MessageSquare size={16} /> },
            { id: 'settings', label: 'Settings', icon: <Users size={16} /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-bold border-2 border-retro-black-900 flex items-center ${
                activeTab === tab.id 
                  ? 'bg-retro-black-900 text-retro-white-50' 
                  : 'bg-retro-white-50 text-retro-black-900 hover:bg-retro-gray-100'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-retro-black-900 mb-6">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Projects"
                value={stats.totalProjects}
                icon={<FileText size={24} className="text-retro-black-900" />}
              />
              <StatCard
                title="Blog Posts"
                value={stats.totalPosts}
                icon={<FileText size={24} className="text-retro-black-900" />}
              />
              <StatCard
                title="Total Views"
                value={stats.totalViews.toLocaleString()}
                icon={<Eye size={24} className="text-retro-black-900" />}
              />
              <StatCard
                title="Messages"
                value={stats.totalContacts}
                icon={<MessageSquare size={24} className="text-retro-black-900" />}
              />
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="card p-6">
                <h3 className="text-lg font-bold text-retro-black-900 mb-4">Recent Blog Posts</h3>
                <div className="space-y-3">
                  {posts.slice(0, 5).map((post) => (
                    <div key={post.id} className="flex justify-between items-center py-2 border-b border-retro-gray-200">
                      <div>
                        <p className="font-medium text-retro-black-900">{post.title}</p>
                        <p className="text-sm text-retro-gray-600">
                          {post.views} views • {post.published ? 'Published' : 'Draft'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <h3 className="text-lg font-bold text-retro-black-900 mb-4">Recent Messages</h3>
                <div className="space-y-3">
                  {contacts.slice(0, 5).map((contact) => (
                    <div key={contact.id} className="py-2 border-b border-retro-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-retro-black-900">{contact.name}</p>
                          <p className="text-sm text-retro-gray-600">{contact.subject}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-bold ${
                          contact.read ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                        }`}>
                          {contact.read ? 'Read' : 'New'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-retro-black-900">Manage Projects</h2>
              <button className="btn btn-primary">
                <Plus size={18} className="mr-2" />
                Add Project
              </button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="card p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-retro-black-900 mb-2">{project.title}</h3>
                      <p className="text-retro-gray-700 mb-2">{project.summary}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="skill-badge text-xs">{project.category}</span>
                        {project.featured && (
                          <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-bold border border-yellow-600">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="retro-box w-10 h-10 flex items-center justify-center bg-retro-gray-200 hover:bg-retro-gray-300">
                        <Edit size={16} />
                      </button>
                      <button className="retro-box w-10 h-10 flex items-center justify-center bg-red-200 hover:bg-red-300">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Blog Tab */}
        {activeTab === 'blog' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-retro-black-900">Manage Blog Posts</h2>
              <button className="btn btn-primary">
                <Plus size={18} className="mr-2" />
                New Post
              </button>
            </div>

            <div className="grid gap-6">
              {posts.map((post) => (
                <div key={post.id} className="card p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-retro-black-900 mb-2">{post.title}</h3>
                      <p className="text-retro-gray-700 mb-2">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="skill-badge text-xs">{post.category}</span>
                        <span className={`px-2 py-1 text-xs font-bold ${
                          post.published ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                        {post.featured && (
                          <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs font-bold border border-yellow-600">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-retro-gray-600">
                        {post.views} views • {post._count?.comments || 0} comments
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button className="retro-box w-10 h-10 flex items-center justify-center bg-retro-gray-200 hover:bg-retro-gray-300">
                        <Edit size={16} />
                      </button>
                      <button className="retro-box w-10 h-10 flex items-center justify-center bg-red-200 hover:bg-red-300">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-retro-black-900 mb-6">Contact Messages</h2>
            
            <div className="grid gap-6">
              {contacts.map((contact) => (
                <div key={contact.id} className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-retro-black-900">{contact.name}</h3>
                      <p className="text-retro-gray-600">{contact.email}</p>
                    </div>
                    <div className="flex gap-2">
                      <span className={`px-3 py-1 text-xs font-bold ${
                        contact.read ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {contact.read ? 'Read' : 'New'}
                      </span>
                      {contact.replied && (
                        <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-bold">
                          Replied
                        </span>
                      )}
                    </div>
                  </div>
                  <h4 className="font-bold text-retro-black-900 mb-2">{contact.subject}</h4>
                  <p className="text-retro-gray-700 mb-4">{contact.message}</p>
                  <div className="text-sm text-retro-gray-600">
                    Received: {new Date(contact.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Settings Tab */}
        {activeTab === 'settings' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold text-retro-black-900 mb-6">Settings</h2>
            <div className="card p-6">
              <p className="text-retro-gray-700">Settings panel coming soon...</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}