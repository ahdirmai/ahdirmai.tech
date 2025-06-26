import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Skills', path: '/#skills' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-retro-white-50 border-b-2 border-retro-black-900 py-3' : 'bg-retro-white-50/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <div className="retro-box h-10 flex items-center justify-center">
            <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          </div>
          <span className="font-roboto font-black text-xl text-retro-black-900">Ridha Fahmi</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${
                location.pathname === link.path ||
                (link.path.includes('#') && location.pathname === '/' && location.hash === link.path.substring(1)) 
                  ? 'active' 
                  : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="btn btn-primary ml-4"
          >
            Get in Touch
          </a>
        </nav>
        
        <button
          className="md:hidden retro-box w-10 h-10 flex items-center justify-center hover:shadow-retro-lg hover:-translate-y-0.5 hover:translate-x-0.5 transition-all duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-retro-white-50 border-t-2 border-retro-black-900">
          <nav className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 text-retro-black-900 hover:text-retro-gray-600 hover:bg-retro-gray-100 transition-colors ${
                  location.pathname === link.path ? 'font-black text-retro-black-900 bg-retro-gray-100' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="btn btn-primary mx-4 mt-4 justify-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}