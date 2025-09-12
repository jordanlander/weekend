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
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p className="mb-4">
            We stand behind our work. If you're not satisfied with your website, we'll work with you to make it right.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Refund Timeline</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Before work begins:</strong> Full refund of deposit</li>
            <li><strong>During development:</strong> 50% refund if no satisfactory progress</li>
            <li><strong>After completion:</strong> No refunds, but unlimited revisions until satisfied</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">What We Guarantee</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Website delivered within 48 hours</li>
            <li>Mobile-responsive design</li>
            <li>Basic SEO optimization</li>
            <li>Fast loading times</li>
            <li>Professional appearance</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Refund Process</h3>
          <p className="mb-4">
            To request a refund, contact us within the eligible timeframe. Refunds processed within 5-7 business days.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Non-Refundable Items</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Third-party services (domain registration, hosting setup)</li>
            <li>Additional hours beyond included scope</li>
            <li>Rush delivery fees</li>
          </ul>

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