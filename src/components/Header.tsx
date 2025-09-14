import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMenuItemRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isMenuOpen) {
      firstMenuItemRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [isMenuOpen]);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      // We're on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/b834458e-12f7-4355-bed8-1867d75b00e9.png" 
              alt="One-Weekend Websites Logo" 
              className="h-8 w-8"
            />
            <div className="text-xl font-bold text-primary">
              One-Weekend Websites
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Work
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <Link 
              to="/blog"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
          </nav>
          
          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:18145808040"
              className="flex items-center text-primary hover:text-primary-light transition-colors"
            >
              <Phone aria-hidden="true" className="h-4 w-4 mr-1" />
              (814) 580-8040
            </a>
            <Button 
              className="btn-accent"
              asChild
            >
              <Link to="/book">Book free 15-min Fit Check</Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="mobile-menu md:hidden border-t border-border bg-white/95 backdrop-blur-sm"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                ref={firstMenuItemRef}
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Pricing
              </button>
              <Link 
                to="/blog"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                FAQ
              </button>
              <div className="flex flex-col space-y-2 px-3 pt-2">
                <a 
                  href="tel:18145808040"
                  className="flex items-center text-primary hover:text-primary-light transition-colors"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 mr-1" />
                  (814) 580-8040
                </a>
                <Button 
                  className="btn-accent w-full"
                  asChild
                >
                  <Link to="/book">Book free 15-min Fit Check</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;