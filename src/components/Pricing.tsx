import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Simple <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            One flat rate. No surprises. No monthly fees. You own everything.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Package */}
          <div className="bg-card-gradient rounded-3xl p-8 shadow-lg border-2 border-primary/20 animate-slide-up">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Complete One-Page Website</h3>
              <div className="text-4xl font-bold text-primary mb-2">$499</div>
              <p className="text-muted-foreground">Flat rate, all included</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Mobile-first design</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Copy polish & CTA</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Domain & Google indexing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>2 image swaps</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>No monthly fees</span>
              </div>
            </div>
            
            <div className="bg-accent/10 p-4 rounded-lg mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="font-semibold text-accent">Guarantee</span>
              </div>
              <p className="text-sm">20% off remaining balance if I miss the launch window.</p>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full btn-accent"
                onClick={() => window.open('https://square.link/u/JCKqtjo5', '_blank')}
              >
                Reserve with $50 deposit
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open('https://square.link/u/u08vlvAR', '_blank')}
              >
                Pay in full + add-ons
              </Button>
              <Button 
                variant="ghost" 
                className="w-full"
                asChild
              >
                <Link to="/book">Book free fit check first</Link>
              </Button>
            </div>
          </div>
          
          {/* Care Plan */}
          <div className="bg-card-gradient rounded-3xl p-8 shadow-md animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Optional Care Plan</h3>
              <div className="text-2xl font-bold text-primary mb-2">$149/yr</div>
              <p className="text-muted-foreground">or $19/month</p>
            </div>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>DNS/HTTPS stewardship</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Uptime watch</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>Monthly check-ins</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>30 min/month content updates</span>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => window.open('https://square.link/u/wL2hwxEx', '_blank')}
            >
              Subscribe to Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;