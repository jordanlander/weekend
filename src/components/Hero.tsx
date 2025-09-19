import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ArrowRight, Clock, DollarSign, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
// Using real photo uploaded by user

const Hero = () => {
  return (
    <section className="hero bg-hero-gradient text-white section-padding min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Clock aria-hidden="true" className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <span className="text-accent font-semibold text-lg">One Weekend. One Website.</span>
                <div className="text-accent/80 text-sm mt-1">Trust that shows • Traffic grows • Revenue flows</div>
              </div>
            </div>
            
            <h1 className="text-hero mb-6">
              Professional Websites for Local Businesses — <span className="text-accent">live in 48 hours</span>, $499 flat.
            </h1>
            
            <p className="text-lead text-white/90 mb-6 max-w-lg">
              I help local businesses get online fast with effective websites that actually convert visitors into customers. Your website launches in 48 hours, looks great on phones and computers, shows up on Google, and you own it completely. No monthly fees, no complicated contracts.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-lg">
              <p className="text-white/90 text-sm leading-relaxed">
                <strong className="text-accent">One Weekend Websites</strong> helps local businesses get online fast. Whether you're a contractor, restaurant, salon, or service provider, I create websites that help you compete online and attract more customers in your market.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                className="btn-hero-cta"
                size="lg"
                asChild
              >
                <Link to="/book">
                  Book Free 15-min Fit Check
                  <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-hero-outline"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See local examples
              </Button>
            </div>
            
            <div className="mb-8">
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="text-white/80 hover:text-white text-sm p-0 h-auto font-normal"
                  >
                    More options
                    <ChevronDown aria-hidden="true" className="ml-1 h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 bg-popover/95 backdrop-blur-sm border-white/20">
                  <div className="space-y-3">
                    <button 
                      onClick={() => window.open('https://square.link/u/JCKqtjo5', '_blank')}
                      className="block w-full text-left text-sm hover:text-primary transition-colors"
                    >
                      Reserve with $50 deposit
                    </button>
                    <button 
                      onClick={() => window.open('https://square.link/u/u08vlvAR', '_blank')}
                      className="block w-full text-left text-sm hover:text-primary transition-colors"
                    >
                      Pay in full + add-ons
                    </button>
                    <button 
                      onClick={() => window.open('https://square.link/u/wL2hwxEx', '_blank')}
                      className="block w-full text-left text-sm hover:text-primary transition-colors"
                    >
                      Subscribe to Care (monthly)
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <DollarSign aria-hidden="true" className="h-4 w-4" />
                <span>$499 flat</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>You own it</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock aria-hidden="true" className="h-4 w-4" />
                <span>Launch in 48 hrs</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src="/lovable-uploads/4a0b5af4-6f35-4781-b680-3d24a14d6789.png"
                alt="Jordan Lander - Web Developer"
                className="relative rounded-3xl shadow-hero w-full max-w-md mx-auto lg:max-w-lg"
              />
              <div className="hero-badge absolute -bottom-6 -right-6 bg-white text-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-sm font-medium text-muted-foreground">48-hour delivery</div>
                <div className="text-2xl font-bold text-primary">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
