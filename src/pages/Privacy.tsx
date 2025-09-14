import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How we collect, use, and protect your information
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            <strong>Business Entity:</strong> JCLander LLC | <strong>Last updated:</strong> January 2025
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Information We Collect */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">📊</span>
              </div>
              Information We Collect
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">Name and email address</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">Phone number (when provided)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">Business details for quotes</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Technical Data</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">Website usage analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">IP address & browser info</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm">•</span>
                    <span className="text-muted-foreground">Pages visited & time spent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
            <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Respond to inquiries and provide quotes</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Communicate about project progress</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Improve our website and services</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">✓</span>
                <span className="text-foreground">Send occasional updates (opt-out anytime)</span>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              <strong>We never sell, rent, or share your personal information</strong> with third parties, except in these limited cases:
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-yellow-600 text-sm">⚠️</span>
                <span className="text-muted-foreground">When required by law</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-yellow-600 text-sm">⚠️</span>
                <span className="text-muted-foreground">To protect our rights or safety</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-sm">✅</span>
                <span className="text-muted-foreground">With your explicit consent</span>
              </div>
            </div>
          </div>

          {/* Security & Cookies */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Data Security</h3>
              <p className="text-muted-foreground">
                We use industry-standard security measures to protect your information. However, no internet transmission is 100% secure.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">Cookies</h3>
              <p className="text-muted-foreground">
                We use cookies for analytics and to improve user experience. You can disable cookies in your browser settings.
              </p>
            </div>
          </div>

          {/* Your Rights */}
          <div className="bg-muted/50 rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Request access to your personal data</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Request correction of inaccurate data</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Request deletion of your data</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-foreground">Opt out of communications</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-3">California & European Residents</h3>
              <p className="text-muted-foreground">
                If you are a resident of California or the European Union, you have additional rights regarding your personal information under local privacy laws. These may include the right to request details about the data we collect, request deletion of your data, and object to certain uses. To exercise these rights or ask questions, please contact us at{" "}
                <a href="mailto:jordan@oneweekendwebsites.com" className="text-primary hover:underline font-medium">
                  jordan@oneweekendwebsites.com
                </a>
                .
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-card rounded-lg p-8 border border-primary/20 bg-primary/5">
            <h4 className="font-semibold mb-2 text-foreground">Questions about this policy?</h4>
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

export default Privacy;