import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      business: "Johnson's Bakery",
      location: "Pittsburgh, PA",
      text: "Jordan delivered exactly what he promised. Our website was live in 2 days and we started getting online orders immediately. The best $499 I've ever spent on my business.",
      rating: 5,
      result: "30% increase in orders"
    },
    {
      name: "Mike Rodriguez",
      business: "Rodriguez HVAC",
      location: "Philadelphia, PA",
      text: "I was skeptical about the 48-hour timeline, but Jordan delivered. Professional site that gets us calls every week. Finally found someone who understands small business needs.",
      rating: 5,
      result: "25+ new customers"
    },
    {
      name: "Lisa Chen",
      business: "Chen Physical Therapy",
      location: "Allentown, PA",
      text: "Working with Jordan was refreshing. No technical jargon, just clear communication and fast results. Our patients love booking appointments online now.",
      rating: 5,
      result: "40% more bookings"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            What <span className="text-primary">Local Business Owners</span> Say
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Real results from real local businesses. These owners took the leap 
            and are now thriving online.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card-gradient rounded-2xl p-6 shadow-md card-hover animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star aria-hidden="true" key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote aria-hidden="true" className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-muted-foreground italic relative z-10 pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-accent">{testimonial.result}</div>
                    <div className="text-xs text-muted-foreground">Since launch</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-scale-in">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Join Them?</h3>
            <p className="mb-6 opacity-90">
              Your local competitors are getting online every day. Don't let them get ahead. 
              Let's get your business the professional website it deserves.
            </p>
            <div className="text-3xl font-bold mb-2">$499 flat rate</div>
            <div className="text-sm opacity-75 mb-6">48-hour delivery • Full ownership • 30-day support</div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Your Fit Check Call
              </button>
              <button className="border-2 border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Call/Text: (814) 580-8040
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;