import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">One Weekend Websites</h3>
            <p className="text-primary-foreground/80 mb-4">
              Fast, professional websites for local businesses. 
              48-hour delivery, $499 flat rate, full ownership.
            </p>
            <div className="flex items-center text-primary-foreground/80">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Serving Pennsylvania & Beyond</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Jordan
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-accent transition-colors">
                  Portfolio Examples
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-accent transition-colors">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <div className="space-y-3">
              <a 
                href="tel:18145808040"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (814) 580-8040
              </a>
              <a 
                href="mailto:jordan@oneweekendwebsites.com"
                className="flex items-center text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                jordan@oneweekendwebsites.com
              </a>
              <div className="pt-2">
                <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent-light transition-colors">
                  Book Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
          <div>
            © 2024 One Weekend Websites by Jordan Lander. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;