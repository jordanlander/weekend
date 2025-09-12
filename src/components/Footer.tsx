import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
                <a href="mailto:jordanlander@gmail.com" className="hover:text-background transition-colors">
                  jordanlander@gmail.com
                </a>
              </p>
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
                onClick={() => window.open('https://cal.com/jordanlander/fit-check-15', '_blank')}
              >
                Book
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