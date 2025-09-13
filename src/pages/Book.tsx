import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Book = () => {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "fit-check-15", {origin:"https://app.cal.com"});
      
      Cal.ns["fit-check-15"]("inline", {
        elementOrSelector:"#my-cal-inline-fit-check-15",
        config: {"layout":"month_view"},
        calLink: "jordanlander/fit-check-15",
      });
      
      Cal.ns["fit-check-15"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-hero font-bold mb-6">
              Ready to Launch Your Website?
            </h1>
            <p className="text-lead text-muted-foreground mb-8">
              Book your free 15-minute Fit Check to see if One Weekend Websites is right for your business. 
              No sales pressure, just honest advice.
            </p>
          </div>
          
          <div className="bg-card rounded-xl border shadow-sm p-6">
            <div 
              id="my-cal-inline-fit-check-15" 
              className="w-full min-h-[600px] overflow-auto"
              style={{ height: '100%' }}
            />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Having trouble with the calendar? 
              <a 
                href="https://cal.com/jordanlander/fit-check-15" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Click here to book directly
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;