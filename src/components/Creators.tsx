import { Button } from "@/components/ui/button";
import { ArrowRight, Brush, Scissors, Camera, Pen } from "lucide-react";
import { Link } from "react-router-dom";
import creativeWorkspace from "@/assets/creative-workspace.jpg";

const Creators = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <img 
                src={creativeWorkspace}
                alt="Creative workspace with artistic tools and materials"
                className="rounded-2xl shadow-lg w-full"
              />
              {/* Decorative icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-md">
                <Brush className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="absolute top-1/4 -right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-md">
                <Scissors className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="absolute bottom-1/4 -left-4 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-md">
                <Camera className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-md">
                <Pen className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Empowering Local Creators
            </h2>
            
            <p className="text-xl text-muted-foreground mb-6 font-medium">
              Helping artists stay artists — while their work finds the world.
            </p>
            
            <div className="space-y-4 text-foreground/90 mb-8">
              <p>
                We don't just build websites — we build momentum for independent artists, makers, and small creative studios.
              </p>
              
              <p>
                Our mission is to help local creativity find global reach without losing authenticity. From dollmakers and illustrators to musicians and makers, we design launch-ready digital studios that put the spotlight back where it belongs — on the art itself.
              </p>
              
              <p>
                Every project is a collaboration built on clarity, creativity, and sustainability. When artists thrive, communities grow.
              </p>
            </div>

            <Button
              className="mb-8"
              size="lg"
              asChild
            >
              <Link to="/book">
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>

            <div className="text-sm text-muted-foreground uppercase tracking-wider">
              — Jordan Lander, Digital Studio Manager for Independent Artists & Makers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creators;
