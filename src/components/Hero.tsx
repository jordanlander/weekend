import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign } from "lucide-react";
import jordanHeadshot from "@/assets/jordan-headshot.jpg";

const Hero = () => {
  return (
    <section className="bg-hero-gradient text-white section-padding min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent-foreground" />
              </div>
              <span className="text-accent font-semibold text-lg">One Weekend. One Website.</span>
            </div>
            
            <h1 className="text-hero mb-6">
              Your website, <span className="text-accent">live in 48 hours</span> — $499 flat.
            </h1>
            
            <p className="text-lead text-white/90 mb-8 max-w-lg">
              One clean, mobile-first page. Clear offer. Google-ready. 
              Ownership stays with you. Perfect for local businesses ready to grow online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="btn-accent" size="lg">
                Book Free 15-min Fit Check
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="btn-hero-outline">
                See Local Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>$499 flat rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>48-hour delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>Full ownership</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up lg:justify-self-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl transform rotate-3"></div>
              <img 
                src={jordanHeadshot}
                alt="Jordan Lander - Web Developer"
                className="relative rounded-3xl shadow-hero w-full max-w-md mx-auto lg:max-w-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-foreground p-4 rounded-2xl shadow-lg">
                <div className="text-sm font-medium text-muted-foreground">Websites delivered</div>
                <div className="text-2xl font-bold text-primary">100+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;