import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProjectCard({ project, index }) {
  return (
    <motion.article 
      className="card group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden border-b-2 border-retro-black-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-60 object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-retro-black-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 text-retro-white-50">
            <span className="font-bold text-lg">{project.title}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="px-3 py-1 text-xs font-bold bg-retro-gray-200 text-retro-black-900 border border-retro-black-900">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 text-xs font-bold bg-retro-gray-600 text-retro-white-50 border border-retro-black-900">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-retro-black-900">{project.title}</h3>
        
        <p className="text-retro-gray-700 mb-6">
          {project.summary}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-retro-gray-200">
          <Link 
            to={`/projects/${project.id}`}
            className="retro-box px-4 py-2 text-retro-black-900 font-bold flex items-center hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200 bg-retro-gray-200"
          >
            View Details
            <ArrowUpRight size={16} className="ml-1" />
          </Link>
          
          <a 
            href={project.liveLink} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-retro-gray-600 hover:text-retro-black-900 transition-colors text-sm font-medium"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </motion.article>
  );
}