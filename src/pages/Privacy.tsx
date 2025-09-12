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
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg mb-6">
            <strong>Last updated:</strong> January 2025
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">Contact Information</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and email address (from contact forms)</li>
            <li>Phone number (when provided)</li>
            <li>Business details (for project quotes)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Technical Data</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Website usage analytics (via Google Analytics)</li>
            <li>IP address and browser information</li>
            <li>Pages visited and time spent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Respond to inquiries and provide quotes</li>
            <li>Communicate about project progress</li>
            <li>Improve our website and services</li>
            <li>Send occasional updates (you can unsubscribe anytime)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We never sell, rent, or share your personal information with third parties, except:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>When required by law</li>
            <li>To protect our rights or safety</li>
            <li>With your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="mb-4">
            We use industry-standard security measures to protect your information. However, no internet transmission is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
          <p className="mb-4">
            We use cookies for analytics and to improve user experience. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of communications</li>
          </ul>

          <div className="mt-12 p-6 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2">Questions about this policy?</h4>
            <p className="text-sm text-muted-foreground">
              Contact us at{" "}
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

export default Privacy;