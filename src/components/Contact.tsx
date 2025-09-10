import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formsubmit.co/jordanlander@gmail.com", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks! Your message was sent. I'll reply shortly.",
        });
        form.reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try calling instead.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Let's Build Your <span className="text-primary">Website</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Ready to get online in 48 hours? Let's chat about your business and see if we're a good fit.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <a href="tel:18145808040" className="text-primary hover:underline">
                    (814) 580-8040
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <a href="mailto:jordanlander@gmail.com" className="text-primary hover:underline">
                    jordanlander@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-muted-foreground">Lake City / Erie, PA</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card-gradient p-6 rounded-2xl shadow-md">
              <h4 className="font-semibold mb-4">Quick Start Options</h4>
              <div className="space-y-3">
                <Button 
                  className="w-full btn-accent"
                  onClick={() => window.open('https://cal.com/jordanlander/fit-check-15', '_blank')}
                >
                  Book Free 15-min Fit Check
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://square.link/u/JCKqtjo5', '_blank')}
                >
                  Reserve with $50 Deposit
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New One Weekend Websites Inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://oneweekendwebsites.com/thank-you" />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required className="mt-2" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone (optional)</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="business">Business/Org (optional)</Label>
                  <Input id="business" name="business" className="mt-2" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  className="mt-2" 
                  placeholder="Tell me about your business and what you need..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full btn-accent" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;