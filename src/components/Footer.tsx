import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Home, Linkedin, Building2 } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-xl font-bold mb-4">One-Weekend Websites</div>
            <p className="text-background/80 mb-4">
              Professional websites for local businesses delivered in 48 hours. 
              $499 flat rate. You own everything.
            </p>
            <div className="space-y-2">
              <p className="text-background/80">
                <a href="tel:18145808040" className="hover:text-background transition-colors">
                  (814) 580-8040
                </a>
              </p>
              <p className="text-background/80">
                <a href="mailto:jordan@oneweekendwebsites.com" className="hover:text-background transition-colors">
                  jordan@oneweekendwebsites.com
                </a>
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-3 text-background">Follow Us</h4>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/oneweekendwebsites/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5 text-background" />
                </a>
                <a 
                  href="https://nextdoor.com/pages/one-weekend-websites-lake-city-pa/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Follow us on Nextdoor"
                >
                  <Home className="h-5 w-5 text-background" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/oneweekendwebsites/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-background" />
                </a>
                <a 
                  href="https://share.google/yyFsQaHPgPrCvrnPb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-xl flex items-center justify-center transition-colors"
                  aria-label="View our Google Business Profile"
                >
                  <Building2 className="h-5 w-5 text-background" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                >
                  Work
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-background/80 hover:text-background transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>
          
          {/* Quick Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Started</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-foreground border-background/20 hover:bg-background/10"
                asChild
              >
                <Link to="/book">Book</Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-foreground border-background/20 hover:bg-background/10"
                onClick={() => window.open('https://square.link/u/JCKqtjo5', '_blank')}
              >
                Deposit
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-foreground border-background/20 hover:bg-background/10"
                onClick={() => window.open('https://square.link/u/u08vlvAR', '_blank')}
              >
                Pay in full
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-foreground border-background/20 hover:bg-background/10"
                onClick={() => window.open('https://square.link/u/wL2hwxEx', '_blank')}
              >
                Care
              </Button>
            </div>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More Info</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://jordanlander.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About me
                </a>
              </li>
              <li>
                <Link 
                  to="/terms"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link 
                  to="/refunds"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Refunds
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="text-center">
            <p className="text-background/60 text-sm">
              © 2025 JCLander LLC • Lake City / Erie, PA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;