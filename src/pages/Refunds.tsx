import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Refunds = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold text-foreground">
            One-Weekend Websites
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm">
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Fair & Clear Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We believe in transparency and fairness for both our clients and our business
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Our Promise */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">✓</span>
              </div>
              Our Promise to You
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We're committed to delivering a professional website that meets your expectations. 
              If we don't deliver what we promised, we'll make it right or refund your money.
            </p>
          </div>

          {/* Refund Terms */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Refund Terms</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Before Work Begins</h4>
                  <p className="text-muted-foreground">
                    <strong>$50 deposit is non-refundable</strong> once we begin discovery and planning. 
                    This covers our initial consultation and protects against time-wasters.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-yellow-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-yellow-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">During Development</h4>
                  <p className="text-muted-foreground">
                    50% refund available if we fail to make satisfactory progress within 48 hours.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-blue-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">After Completion</h4>
                  <p className="text-muted-foreground">
                    <strong>3 rounds of major revisions</strong> included within 30 days of delivery. 
                    Additional revisions available at $50/hour. No refunds after final approval.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Guaranteed */}
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">What We Guarantee</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">48-hour delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Mobile-responsive design</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">SEO optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Fast loading speeds</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Professional appearance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">✓</span>
                <span className="text-foreground">Full ownership of files</span>
              </div>
            </div>
          </div>

          {/* Non-Refundable */}
          <div className="bg-muted/50 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Items</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60 mt-1">•</span>
                <span>$50 initial deposit (covers consultation time)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60 mt-1">•</span>
                <span>Third-party services (domain, hosting, stock photos)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60 mt-1">•</span>
                <span>Rush delivery fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-muted-foreground/60 mt-1">•</span>
                <span>Additional revisions beyond included rounds</span>
              </li>
            </ul>
          </div>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Need a refund or have questions?</h4>
            <p className="text-sm text-muted-foreground">
              Contact Jordan directly at{" "}
              <a href="mailto:jordanlander@gmail.com" className="text-primary hover:underline">
                jordanlander@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:18145808040" className="text-primary hover:underline">
                (814) 580-8040
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Refunds;