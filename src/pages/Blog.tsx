import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from a CMS or markdown files
const blogPosts = [
  {
    title: "7 Mistakes You're Making with Your Business Website (and How to Fix Them)",
    excerpt: "Your website is your digital storefront. It's working 24/7, making first impressions while you sleep. But most business websites are making critical mistakes that drive customers straight to competitors.",
    date: "September 14, 2025",
    readTime: "8 min read",
    image: "https://cdn.marblism.com/sImsguOYOzd.webp",
    slug: "7-website-mistakes"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <h1 className="text-hero font-bold text-foreground mb-6">
            Website Tips & Business Growth Insights
          </h1>
          <p className="text-lead text-muted-foreground max-w-3xl mx-auto mb-8">
            Practical advice to help your business succeed online. From website optimization 
            to marketing strategies that actually work.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 card-hover">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={`/blog/${post.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Business Website?
          </h2>
          <p className="text-lead text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop losing customers to poor website design. Get a professional website 
            that converts visitors into paying customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/book">Book Free Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;