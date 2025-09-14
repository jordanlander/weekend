import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Terms = () => {
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Clear, fair terms for our web development services
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Business Entity:</strong> JCLander LLC
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Service Agreement */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">📋</span>
              </div>
              Service Agreement
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By engaging One-Weekend Websites for web development services, you agree to these terms and conditions.
            </p>
          </div>

          {/* Project Scope */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Scope & Deliverables</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Professional website delivered in 48 hours</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">$499 flat rate for standard package</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Responsive design & mobile optimization</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Basic SEO optimization included</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Additional pages or complex features may incur extra charges, discussed upfront.
              </p>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">Payment Terms</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">$50 deposit to start</h4>
                  <p className="text-muted-foreground text-sm">Non-refundable once work begins</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Remaining balance due upon completion</h4>
                  <p className="text-muted-foreground text-sm">Payment via Square, cash, or check accepted</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ownership & Revisions */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Complete Ownership</h3>
              <p className="text-muted-foreground">
                You own your website completely. All files, content, and code become your property upon final payment.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Revision Policy</h3>
              <p className="text-muted-foreground">
                3 rounds of major revisions included within 30 days. Additional revisions at $50/hour.
              </p>
            </div>
          </div>

          {/* Liability */}
          <div className="bg-muted/50 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Liability & Disclaimer</h2>
            <p className="text-muted-foreground">
              Services are provided "as is" with professional care and attention. JCLander LLC is not liable for indirect, incidental, or consequential damages arising from the use of our services. Liability, if any, is strictly limited to the total amount you paid for the specific service provided.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg p-8 border border-primary/20 bg-primary/5">
            <h4 className="font-semibold mb-2 text-foreground">Questions about these terms?</h4>
            <p className="text-muted-foreground">
              Contact us at{" "}
              <a href="mailto:jordan@oneweekendwebsites.com" className="text-primary hover:underline font-medium">
                jordan@oneweekendwebsites.com
              </a>{" "}
              or call{" "}
              <a href="tel:18145808040" className="text-primary hover:underline font-medium">
                (814) 580-8040
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;