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
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Service Agreement</h2>
          <p className="mb-4">
            By engaging One-Weekend Websites for web development services, you agree to these terms:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Project Scope</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>One-page website delivered within 48 hours</li>
            <li>$499 flat rate for standard package</li>
            <li>Includes responsive design, basic SEO, and mobile optimization</li>
            <li>Additional pages or complex features may incur extra charges</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Payment Terms</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>50% deposit required to begin work</li>
            <li>Final 50% due upon completion</li>
            <li>Payment accepted via Square, cash, or check</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Ownership</h3>
          <p className="mb-4">
            You own your website completely. All files, content, and code become your property upon final payment.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Revisions</h3>
          <p className="mb-4">
            Two rounds of revisions included. Additional revisions billed at $50/hour.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Liability</h3>
          <p className="mb-4">
            Service provided "as is." JCLander LLC not liable for indirect damages or lost profits.
          </p>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground">
              Questions about these terms? Contact us at{" "}
              <a href="mailto:jordanlander@gmail.com" className="text-primary hover:underline">
                jordanlander@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Terms;