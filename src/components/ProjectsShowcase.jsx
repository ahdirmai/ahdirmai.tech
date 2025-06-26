import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export function ProjectsShowcase() {
  // Show only 3 featured projects on the homepage
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="section-title mb-3">Featured Projects</h2>
            <p className="text-dark-500 max-w-2xl">
              Check out some of my recent work. Each project represents a unique challenge and solution.
            </p>
          </div>
          
          <Link 
            to="/projects" 
            className="mt-6 md:mt-0 inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}