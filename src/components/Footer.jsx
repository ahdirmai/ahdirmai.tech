import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-retro-black-900 text-retro-white-50 pt-16 pb-8 border-t-4 border-retro-gray-600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <div className="retro-box h-10 flex items-center justify-center bg-retro-white-50 mr-3">
                <img src="/logo.svg" alt="Logo" className="w-6 h-6" />
              </div>
              <span className="font-roboto font-black text-xl">
                Ridha Fahmi
              </span>
            </Link>
            <p className="text-retro-gray-300 mb-6">
              Full Stack Developer passionate about creating modern web
              experiences that solve real problems.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ahdirmai"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-box h-10 flex items-center justify-center bg-retro-white-50 hover:bg-retro-gray-300 hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={20} className="text-retro-black-900" />
              </a>
              <a
                href="https://www.linkedin.com/in/ridha-fahmi-junaidi/"
                target="_blank"
                rel="noopener noreferrer"
                className="retro-box h-10 flex items-center justify-center bg-retro-white-50 hover:bg-retro-gray-300 hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="text-retro-black-900" />
              </a>
              <a
                href="mailto:ridhofahmij225@gmail.com"
                className="retro-box h-10 flex items-center justify-center bg-retro-white-50 hover:bg-retro-gray-300 hover:shadow-retro-lg hover:-translate-y-1 hover:translate-x-1 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={20} className="text-retro-black-900" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-retro-gray-300 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-retro-gray-400 hover:text-retro-white-50 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-retro-gray-400 hover:text-retro-white-50 transition-colors font-medium"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  className="text-retro-gray-400 hover:text-retro-white-50 transition-colors font-medium"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-retro-gray-400 hover:text-retro-white-50 transition-colors font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-retro-gray-300 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 mt-0.5 flex-shrink-0 text-retro-gray-400"
                />
                <span className="text-retro-gray-400">
                  Banjarmasin, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-2 flex-shrink-0 text-retro-gray-400"
                />
                <a
                  href="mailto:ridhofahmij225@gmail.com"
                  className="text-retro-gray-400 hover:text-retro-white-50 transition-colors"
                >
                  ridhofahmij225@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-retro-gray-300 uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="text-retro-gray-400 mb-4">
              Subscribe for updates on my latest projects and tech articles
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="retro-input bg-retro-white-50 text-retro-black-900 placeholder-retro-gray-600"
                required
              />
              <button
                type="submit"
                className="btn btn-primary w-full justify-center"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t-2 border-retro-gray-600 mt-12 pt-8 text-center">
          <div className="retro-box inline-block px-6 py-2 bg-retro-white-50 text-retro-black-900">
            <p className="font-bold">
              &copy; {currentYear} Ridha Fahmi J. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}