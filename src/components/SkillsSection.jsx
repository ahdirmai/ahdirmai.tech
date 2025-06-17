import { motion } from 'framer-motion';
import { Code, Database, Cloud, LineChart, FileText, Edit } from 'lucide-react';

export function SkillsSection() {
  const skills = [
    {
      category: "Web Development",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Responsive Design", "TypeScript", "Next.js"]
    },
    {
      category: "Cloud Platforms",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["Google Cloud Platform", "Firebase", "AWS", "Azure", "Vercel", "Netlify"]
    },
    {
      category: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite", "Supabase"]
    },
    {
      category: "Data Analysis",
      icon: <LineChart className="h-6 w-6" />,
      skills: ["Data Visualization", "Tableau", "Excel", "SQL Analytics", "Python"]
    },
    {
      category: "Documentation",
      icon: <FileText className="h-6 w-6" />,
      skills: ["Technical Writing", "API Documentation", "User Guides", "Knowledge Bases"]
    },
    {
      category: "Editing",
      icon: <Edit className="h-6 w-6" />,
      skills: ["Adobe Creative Suite", "Microsoft Office", "Canva", "Content Editing"]
    },
  ];
  
  return (
    <section id="skills" className="py-20 bg-retro-white-50">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            I've developed a diverse set of skills throughout my career, allowing me to tackle various aspects of web development and digital projects.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="retro-box w-12 h-12 flex items-center justify-center mr-4 bg-retro-gray-200">
                  <span className="text-retro-black-900">{skillGroup.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-retro-black-900">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-retro-black-900">Soft Skills</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Analytical Thinking", "Problem Solving", "Teamwork", 
              "Time Management", "Adaptability", "Critical Thinking", 
              "Multicultural Awareness", "Project Management"
            ].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-retro-gray-600 text-retro-white-50 text-sm font-bold border-2 border-retro-black-900 shadow-retro">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}