import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { PWAInstallButton } from "./PWAInstallButton";

export function HeroSection() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Ridha_Fahmi_J_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative pt-20 lg:pt-24 pb-16 md:pb-24 overflow-hidden bg-retro-white-50">
      {/* Retro geometric shapes */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-retro-black-900 opacity-10 rotate-45"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-retro-gray-600 opacity-20"></div>

      <div className="container flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="retro-badge mb-4">Full Stack Developer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-retro-black-900 leading-tight mb-6">
              Hi, I'm <span className="text-retro-gray-700">Ridha Fahmi</span>
            </h1>
            <p className="text-lg md:text-xl text-retro-gray-700 max-w-2xl lg:mx-0 mx-auto mb-8">
              Crafting modern web applications with clean code and exceptional
              user experiences. Passionate about solving complex problems with
              elegant solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <button 
              onClick={handleDownloadCV}
              className="btn btn-primary group"
            >
              <Download size={18} className="mr-2 group-hover:animate-bounce" />
              Download CV
            </button>
            <PWAInstallButton />
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
            <a href="#projects" className="btn btn-outline">
              View Projects
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
            <a
              href="https://github.com/ahdirmai"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-box  h-12 flex items-center justify-center hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={24} className="text-retro-black-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/ridha-fahmi-junaidi/"
              target="_blank"
              rel="noopener noreferrer"
              className="retro-box  h-12 flex items-center justify-center hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-retro-black-900" />
            </a>
            <a
              href="mailto:ridhofahmij225@gmail.com"
              className="retro-box h-12 flex items-center justify-center hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={20} className="text-retro-black-900" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="retro-box shadow-retro-xl">
            <img
              src="https://res.cloudinary.com/dunqr1cgq/image/upload/v1750143718/23_xukn1e.jpg"
              alt="Ridha Fahmi - Professional profile"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 retro-box w-12 h-12 flex items-center justify-center hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={24} className="text-retro-black-900" />
      </motion.a>
    </section>
  );
}