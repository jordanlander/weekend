import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Scissors, ShoppingBag, Leaf, Church, Palette } from "lucide-react";
// Using real website screenshots provided by user

const Portfolio = () => {
const projects = [
    {
      title: "Integrity EV Solutions",
      category: "EV Charging",
      image: "/lovable-uploads/8536377c-2b6f-4baa-a383-45f4a2877d6c.png",
      description: "Professional EV charging site with simple service options, quote, and contact flow.",
      testimonial: "Site + Google Ads boosted monthly installs.",
      website: "www.integrityevsolutions.com",
      deliveryTime: "48 hours"
    },
    {
      title: "Girard Arts", 
      category: "Community Arts",
      image: "/lovable-uploads/22c78355-7a96-464b-96b8-6b469e95b242.png",
      description: "Community showcase with event sign-ups & donate functionality.",
      testimonial: "Increased event participation by 40%",
      website: "girardarts.org",
      deliveryTime: "48 hours"
    },
    {
      title: "Wiley Trucking",
      category: "Transportation",
      image: "/lovable-uploads/ffb49acd-fa56-4d52-9d59-be1e55e4f5dc.png",
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
          <div className="bg-card-gradient rounded-2xl p-8 shadow-md max-w-6xl mx-auto">
            <h3 className="text-2xl font-semibold mb-2">Who this is for</h3>
            <p className="text-muted-foreground mb-8">Local businesses that need a clean one-pager that converts—this weekend.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {/* Barbers & salons */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <Scissors className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Barbers & salons</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Tap-to-book and map reviews from a single, fast page.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Hours, location, pricing</li>
                  <li>• Google "Call" & "Directions" buttons</li>
                </ul>
              </div>

              {/* Thrift & vintage */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Thrift & vintage shops</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Show today's finds. Drive foot traffic—not just likes.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "New arrivals" gallery</li>
                  <li>• Hours, parking, social links</li>
                </ul>
              </div>

              {/* Lawn care & landscaping */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <Leaf className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Lawn care & landscaping</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Quote requests that include address, lawn size, and photos.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• "Request a quote" form</li>
                  <li>• Before/after gallery</li>
                </ul>
              </div>

              {/* Churches & boosters */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <Church className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Churches & boosters</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Sign-ups, donations, and event info in one simple page.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Online giving link</li>
                  <li>• Events & contact</li>
                </ul>
              </div>

              {/* Etsy & makers */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <Palette className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Etsy & makers</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">A legit home base that links out to your shop and socials.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Featured product grid</li>
                  <li>• Contact & custom orders</li>
                </ul>
              </div>

              {/* Local services */}
              <div className="bg-background rounded-xl border p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-foreground mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h4 className="font-semibold">Local services</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Calls, quotes, and directions without the platform lock-in.</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Click-to-call & directions</li>
                  <li>• Fast load, SEO basics</li>
                </ul>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">Built for Erie/Lake City businesses. Launch in 48 hours. You own everything.</p>
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