import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import portfolioExample1 from "@/assets/portfolio-example-1.jpg";
import portfolioExample2 from "@/assets/portfolio-example-2.jpg";
import portfolioExample3 from "@/assets/portfolio-example-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Local Service Business",
      category: "Professional Services",
      image: portfolioExample1,
      description: "Clean, professional layout with clear service offerings and contact forms that convert.",
      features: ["Contact Forms", "Service Pages", "Google Maps", "Mobile Optimized"],
      deliveryTime: "48 hours"
    },
    {
      title: "Restaurant & Catering",
      category: "Food & Hospitality",
      image: portfolioExample2,
      description: "Appetizing design with menu showcase, online ordering integration, and reservation system.",
      features: ["Menu Display", "Online Ordering", "Reservations", "Photo Gallery"],
      deliveryTime: "48 hours"
    },
    {
      title: "Professional Consulting",
      category: "Business Services",
      image: portfolioExample3,
      description: "Corporate design that builds trust with detailed service descriptions and testimonials.",
      features: ["Service Portfolio", "Client Testimonials", "Contact Forms", "Blog Ready"],
      deliveryTime: "48 hours"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            <span className="text-primary">Local Examples</span> That Drive Results
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Real websites for real local businesses. Each one delivered in 48 hours 
            and optimized to turn visitors into customers.
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
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live Site
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-scale-in">
          <div className="bg-card-gradient rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-semibold text-primary">Serving Pennsylvania & Beyond</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">
              Ready to join these successful local businesses?
            </h3>
            <p className="text-muted-foreground mb-6">
              Every website includes everything you need: hosting setup, Google My Business optimization, 
              mobile responsiveness, and a 30-day support period.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="btn-hero">
                Start My Website
              </Button>
              <Button variant="outline">
                See More Examples
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;