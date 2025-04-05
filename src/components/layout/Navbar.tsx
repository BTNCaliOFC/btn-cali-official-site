
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';

// Set this to true when ready to make the Giveaways page live (match App.tsx)
const GIVEAWAYS_LIVE = false;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Voting Team', path: '/voting-team' },
    { name: 'Social Hub', path: '/social-hub' },
    { name: 'Spotlight', path: '/spotlight' },
    { name: 'Fan Zone', path: '/fan-zone' },
    ...(GIVEAWAYS_LIVE ? [{ name: 'Giveaways', path: '/giveaways' }] : []),
    { name: 'Contact', path: '/contact' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-btn font-semibold' : 'text-foreground hover:text-btn';
  };
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display font-bold text-xl md:text-2xl bg-gradient-to-r from-btn to-accent bg-clip-text text-transparent">BTN Cali Official</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`${isActive(link.path)} text-sm font-medium transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>
        
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button 
            onClick={toggleMenu} 
            className="p-2 text-foreground hover:bg-muted rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`${isActive(link.path)} py-2 text-sm font-medium transition-colors`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="https://www.facebook.com/share/g/14pqQ31ae5/"
              className="btn-primary text-center mt-2" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
