import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import integrityEvImage from "@/assets/integrity-ev-solutions.jpg";
import girardArtsImage from "@/assets/girard-arts.jpg";
import wileyTruckingImage from "@/assets/wiley-trucking.jpg";

const Portfolio = () => {
const projects = [
    {
      title: "Integrity EV Solutions",
      category: "EV Charging",
      image: integrityEvImage,
      description: "Professional EV charging site with simple service options, quote, and contact flow.",
      testimonial: "Site + Google Ads boosted monthly installs.",
      website: "www.integrityevsolutions.com",
      deliveryTime: "48 hours"
    },
    {
      title: "Girard Arts", 
      category: "Community Arts",
      image: girardArtsImage,
      description: "Community showcase with event sign-ups & donate functionality.",
      testimonial: "Increased event participation by 40%",
      website: "girardarts.org",
      deliveryTime: "48 hours"
    },
    {
      title: "Wiley Trucking",
      category: "Transportation",
      image: wileyTruckingImage,
      description: "Services & request quote flow for local trucking company.",
      testimonial: "More qualified leads in first month",
      website: "www.wileytrucking.com",
      deliveryTime: "48 hours"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Real <span className="text-primary">Local Work</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Actual websites built for Pennsylvania businesses. Each delivered in 48 hours with measurable results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-2xl shadow-md overflow-hidden card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.deliveryTime}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{project.website}</p>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="bg-accent/10 p-3 rounded-lg mb-4">
                  <p className="text-sm italic">"{project.testimonial}"</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open(`https://${project.website}`, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-scale-in">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Perfect For</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="font-medium">• Barbers & salons</div>
                <div className="font-medium">• Thrift & vintage shops</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">• Lawn care & landscaping</div>
                <div className="font-medium">• Churches & boosters</div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">• Etsy & makers</div>
                <div className="font-medium">• Local services</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                className="btn-hero"
                onClick={() => window.open('https://cal.com/jordanlander/fit-check-15', '_blank')}
              >
                Book Free Fit Check
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;