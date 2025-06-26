import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Filter } from 'lucide-react';

export function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  
  // Get all unique categories from projects
  const categories = ['All', ...new Set(projects.flatMap(project => project.category))];

  useEffect(() => {
    document.title = 'Projects | Ridha Fahmi J Portfolio';
    
    window.scrollTo(0, 0);
  }, []);
  
  const filterProjects = (category) => {
    setActiveFilter(category);
    
    if (category === 'All') {
      setFilteredProjects(projects);
      return;
    }
    
    const filtered = projects.filter(project => project.category === category);
    setFilteredProjects(filtered);
  };
  
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-dark-600 max-w-2xl mx-auto">
            A collection of my work including web applications, design projects, and more. Explore the projects to see my skills in action.
          </p>
        </motion.div>
        
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Filter Projects</h2>
            <button
              className="md:hidden flex items-center text-sm font-medium text-dark-700"
              onClick={() => setIsFiltersVisible(!isFiltersVisible)}
            >
              <Filter size={16} className="mr-1" />
              {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
            </button>
          </div>
          
          <div className={`md:flex flex-wrap gap-3 ${isFiltersVisible ? 'flex' : 'hidden'}`}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-dark-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="col-span-3 py-16 text-center">
              <h3 className="text-xl font-medium text-dark-600 mb-2">No projects found</h3>
              <p className="text-dark-500">
                Try selecting a different category filter.
              </p>
              <button
                onClick={() => filterProjects('All')}
                className="mt-4 btn btn-outline"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}