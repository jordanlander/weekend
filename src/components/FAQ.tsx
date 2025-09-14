import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs: { question: string; answer: ReactNode }[] = [
    {
      question: "What do I need to provide?",
      answer:
        "Logo or business name, preferred brand color, list of services, business hours, address, and 3-6 good quality photos. I'll help guide you through what works best.",
    },
    {
      question: "How does payment work?",
      answer:
        "You can reserve your spot with a $50 deposit, or pay in full upfront. Pennsylvania businesses add 6% sales tax. All payments are processed securely through Square.",
    },
    {
      question: "What happens after my website is built?",
      answer:
        "You own everything - domain, hosting, all files. No monthly fees required. You can manage it yourself or optionally subscribe to our Care plan for ongoing support and updates.",
    },
    {
      question: "What if I need changes later?",
      answer:
        "You get 2 free image swaps included. Additional changes can be handled through our Care plan (30 min/month included) or on a project basis.",
    },
    {
      question: "Is hosting included?",
      answer:
        "Yes! Your website includes hosting setup and is optimized for speed and reliability. You own the hosting account directly.",
    },
    {
      question: "Will my website work on mobile?",
      answer:
        "Absolutely. Every website is built mobile-first, meaning it looks and works perfectly on phones, tablets, and desktops.",
    },
    {
      question: "Why does domain pricing vary?",
      answer: (
        <ul className="space-y-1">
          <li>
            • Standard domains (like .com, .net, .org) usually renew at around
            <strong> $20–$25/year</strong> after the first year (which I cover
            for you with setup).
          </li>
          <li>
            • <strong>Premium domains</strong> (short, brandable, keyword-heavy
            names) can cost <strong>hundreds or even thousands upfront</strong>,
            and sometimes renew at premium rates—this is due to registry pricing
            and aftermarket demand. I’ll always check with you first if you’re
            leaning toward something premium.
          </li>
        </ul>
      ),
    },
    {
      question: "Can you renew my domain each year?",
      answer:
        "Absolutely—if you’re on the Care Plan, I’ll take care of domain renewal ($20–$70/year depending on TLD). You’ll never need to lift a finger or worry about your site going offline.",
    },
    {
      question: "Do you only build on weekends?",
      answer:
        "Nope. We build in 48 hours, whether that’s Monday–Tuesday or Friday–Saturday. We called it One-Weekend Websites because the process is short, focused, and fast.",
    },
  ];

  return (
    <section className="bg-subtle-gradient section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-section-title mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lead max-w-2xl mx-auto">
            Everything you need to know about getting your website built in 48 hours.
          </p>
        </div>

        <div className="animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card-gradient rounded-xl border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
