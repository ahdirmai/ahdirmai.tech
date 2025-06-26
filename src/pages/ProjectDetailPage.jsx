import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, Globe, Calendar, Tag, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { projects } from '../data/projects';

export function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate fetching the project data
    setTimeout(() => {
      const foundProject = projects.find(p => p.id.toString() === id);
      setProject(foundProject);
      setIsLoading(false);
      
      // Set page title
      if (foundProject) {
        document.title = `${foundProject.title} | Ridha Fahmi J Portfolio`;
      } else {
        document.title = 'Project Not Found | Ridha Fahmi J Portfolio';
      }
    }, 500);
    
    window.scrollTo(0, 0);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="pt-28 pb-20 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-dark-900 mb-4">Project Not Found</h1>
        <p className="text-dark-600 mb-8">Sorry, the project you're looking for doesn't exist.</p>
        <Link to="/projects" className="btn btn-primary">
          <ArrowLeft size={18} className="mr-2" />
          Back to Projects
        </Link>
      </div>
    );
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
            to="/projects" 
            className="inline-flex items-center text-dark-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Projects
          </Link>
          
          <div className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-dark-600 max-w-3xl">
              {project.summary}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center">
              <Calendar size={18} className="text-dark-500 mr-2" />
              <span className="text-dark-700">{project.date}</span>
            </div>
            
            <div className="flex items-center">
              <Tag size={18} className="text-dark-500 mr-2" />
              <span className="text-dark-700">{project.category}</span>
            </div>
            
            {project.client && (
              <div className="flex items-center">
                <Layers size={18} className="text-dark-500 mr-2" />
                <span className="text-dark-700">Client: {project.client}</span>
              </div>
            )}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
          />
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-10">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
              <div className="prose prose-lg text-dark-700 max-w-none">
                <p>{project.description}</p>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
              <div className="prose prose-lg text-dark-700 max-w-none">
                <p>{project.challenge}</p>
              </div>
            </div>
            
            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
              <div className="prose prose-lg text-dark-700 max-w-none">
                <p>{project.solution}</p>
              </div>
            </div>
            
            {project.additionalImages && project.additionalImages.length > 0 && (
              <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.additionalImages.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${project.title} - Gallery image ${index + 1}`} 
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-6">Project Details</h3>
              
              <div className="mb-6">
                <h4 className="text-sm uppercase tracking-wider text-dark-500 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-gray-100 text-dark-700 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {project.features && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-dark-500 mb-3">Key Features</h4>
                  <ul className="space-y-2 text-dark-700">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {project.results && (
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-dark-500 mb-3">Results</h4>
                  <p className="text-dark-700">
                    {project.results}
                  </p>
                </div>
              )}
              
              <div className="mt-8 space-y-4">
                {project.liveLink && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary w-full flex justify-center items-center"
                  >
                    <Globe size={18} className="mr-2" />
                    View Live Site
                  </a>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline w-full flex justify-center items-center"
                  >
                    <Github size={18} className="mr-2" />
                    View Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}