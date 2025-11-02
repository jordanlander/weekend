import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Creators from "@/components/Creators";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="creators">
          <Creators />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="process">
          <Process />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
