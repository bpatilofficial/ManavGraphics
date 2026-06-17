import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-105 transition-transform">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Manav Graphics logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className={`font-poppins font-bold text-lg md:text-xl leading-tight transition-colors ${scrolled ? 'text-dark-900' : 'text-white'}`}>
                Manav Graphics
              </h1>
              <p className={`text-[10px] md:text-xs leading-tight transition-colors ${scrolled ? 'text-dark-500' : 'text-white/80'}`}>
                Printing & Designing Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg font-inter font-medium text-sm transition-colors ${
                  location.pathname === link.path
                    ? scrolled
                      ? 'text-cyan-600'
                      : 'text-white'
                    : scrolled
                    ? 'text-dark-600 hover:text-dark-900 hover:bg-dark-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full ${
                      scrolled ? 'bg-cyan-500' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
            <a
              href="tel:+917741861337"
              className="ml-3 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-inter font-medium text-sm transition-colors shadow-lg shadow-cyan-500/25"
            >
              <Phone size={16} />
              Call Now
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-dark-800 hover:bg-dark-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-dark-100 shadow-xl"
          >
            <nav className="container-custom mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-lg font-inter font-medium text-sm transition-colors ${
                    location.pathname === link.path
                      ? 'bg-cyan-50 text-cyan-600'
                      : 'text-dark-700 hover:bg-dark-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+917741861337"
                className="mt-2 flex items-center justify-center gap-2 bg-cyan-500 text-white px-4 py-3 rounded-lg font-inter font-medium text-sm"
              >
                <Phone size={16} />
                Call Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
