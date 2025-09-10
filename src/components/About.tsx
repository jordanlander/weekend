import { Award, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <section className="bg-subtle-gradient section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Why <span className="text-primary">One-Weekend Websites?</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            I help local businesses get online fast with clean, effective websites 
            that actually convert visitors into customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-slide-up">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-muted-foreground">
              48-hour turnaround means you're online before your competition 
              even gets a quote from other developers.
            </p>
          </div>
          
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
            <p className="text-muted-foreground">
              Over 100 local businesses launched with websites that actually 
              drive phone calls, emails, and foot traffic.
            </p>
          </div>
          
          <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Local Focus</h3>
            <p className="text-muted-foreground">
              I understand local businesses. Every website is optimized 
              for your community and Google My Business.
            </p>
          </div>
        </div>
        
        <div className="bg-card-gradient rounded-3xl p-8 shadow-md animate-scale-in">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              "I started One-Weekend Websites because I saw too many local businesses struggling online."
            </h3>
            <p className="text-muted-foreground mb-6">
              Most web developers want to build complex, expensive sites that take months. 
              But what local businesses really need is something simple, fast, and effective. 
              That's exactly what I deliver - clean, professional websites that work immediately 
              and help you grow your business.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                JL
              </div>
              <div className="text-left">
                <div className="font-semibold">Jordan Lander</div>
                <div className="text-sm text-muted-foreground">Founder & Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;