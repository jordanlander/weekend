import { CheckCircle, MessageSquare, Palette, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "15-Minute Fit Check",
      description: "We chat about your business, goals, and what you need. No pressure, just honest advice about whether we're a good fit.",
      timeline: "Day 0"
    },
    {
      icon: Palette,
      title: "Design & Build",
      description: "I create your website using proven templates optimized for local businesses. Clean, fast, and conversion-focused.",
      timeline: "Day 1"
    },
    {
      icon: CheckCircle,
      title: "Review & Refine",
      description: "You review the site and request any changes. I make adjustments to ensure it perfectly represents your business.",
      timeline: "Day 2"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "Your site goes live with full ownership transferred to you. Plus 30 days of support for any questions or tweaks.",
      timeline: "Day 2"
    }
  ];

  return (
    <section className="bg-subtle-gradient section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Simple <span className="text-primary">48-Hour Process</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            No complex contracts or endless revisions. Just a straightforward process 
            that gets your business online fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded-full">
                    {step.timeline}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-card-gradient rounded-3xl p-8 shadow-md animate-scale-in">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8">What's Included in Every Website</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Mobile-First Design</div>
                    <div className="text-sm text-muted-foreground">Looks perfect on all devices</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Google-Ready SEO</div>
                    <div className="text-sm text-muted-foreground">Optimized to be found online</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Contact Forms</div>
                    <div className="text-sm text-muted-foreground">Lead generation that works</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Social Media Integration</div>
                    <div className="text-sm text-muted-foreground">Connect all your profiles</div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Hosting Setup</div>
                    <div className="text-sm text-muted-foreground">Fast, reliable hosting included</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Full Ownership</div>
                    <div className="text-sm text-muted-foreground">You own everything, no lock-in</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">30-Day Support</div>
                    <div className="text-sm text-muted-foreground">Help with any questions</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Google My Business</div>
                    <div className="text-sm text-muted-foreground">Local search optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;