import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin } from 'lucide-react';
import { profileData } from '../data';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Board Profile', href: '#board-profile' },
  { name: 'Leadership Journey', href: '#leadership-journey' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal/90 backdrop-blur-lg border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-serif text-charcoal font-bold text-xl group-hover:bg-gold-light transition-colors">
            RK
          </div>
          <div className="hidden sm:block">
            <span className="block text-lg font-serif font-bold tracking-tight text-white group-hover:text-gold transition-colors">Rahul Kumar</span>
            <span className="block text-[10px] uppercase tracking-widest text-gold/80">Independent Director</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={profileData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 bg-white/5 hover:bg-gold/10 rounded-full transition-colors group"
          >
            <Linkedin size={18} className="text-white/60 group-hover:text-gold" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white/80 hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal border-b border-white/10 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-white/80 hover:text-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-white/40">Connect via LinkedIn</span>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-gold">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
