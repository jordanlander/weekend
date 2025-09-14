import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would typically fetch from your content management system
interface BlogPostData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

const getBlogPost = (slug: string) => {
  const posts: Record<string, BlogPostData> = {
    "7-website-mistakes": {
      title: "7 Mistakes You're Making with Your Business Website (and How to Fix Them)",
      excerpt: "Your website is your digital storefront. It's working 24/7, making first impressions while you sleep. But most business websites are making critical mistakes that drive customers straight to competitors.",
      date: "September 14, 2025",
      readTime: "8 min read",
      image: "https://cdn.marblism.com/sImsguOYOzd.webp",
      content: `# 7 Mistakes You're Making with Your Business Website (and How to Fix Them)

![Business owner reviewing website on laptop](https://cdn.marblism.com/sImsguOYOzd.webp)

Your website is your digital storefront. It's working 24/7, making first impressions while you sleep. But here's the thing: most business websites are making critical mistakes that drive customers straight to competitors.

You've got seconds to grab attention. Visitors decide within 0.05 seconds whether they trust your site. That's faster than you can blink.

Let's fix the problems that are costing you customers right now.

## Mistake #1: Your Homepage Doesn't Tell People What You Do

Walk into most business websites and you'll scratch your head. Beautiful design, fancy animations, but zero clarity on what problem they solve.

Your visitors shouldn't have to hunt around to figure out your business. They're busy. They want answers fast.

**The Fix:**
- Lead with a clear headline that says exactly what you do
- Answer three questions immediately: What do you do? Who do you serve? What's in it for me?
- Skip the corporate jargon. Use language your customers actually use
- Put your most important call-to-action above the fold

Example: Instead of "Innovative Solutions for Modern Challenges," try "We Fix Broken Air Conditioners in Under 2 Hours."

![Confused visitor searching for what a business offers](https://cdn.marblism.com/5oQh58y9uKi.webp)

## Mistake #2: Your Site Looks Terrible on Mobile

Over 60% of web traffic comes from mobile devices. If your site doesn't work on phones, you're losing more than half your potential customers.

Mobile users are even less patient than desktop users. Tiny text, impossible-to-tap buttons, and horizontal scrolling will send them running.

**The Fix:**
- Test your site on your phone right now. Seriously, do it
- Make buttons big enough to tap with a thumb
- Use readable font sizes (at least 16px)
- Simplify your mobile menu
- Ensure forms are easy to fill out on small screens

Your mobile site should be just as good as your desktop version. No exceptions.

## Mistake #3: Your Website Takes Forever to Load

Every second of delay costs you customers. Amazon found that every 100ms of delay costs them 1% in sales. You can't afford slow loading times.

Heavy images and bloated code are usually the culprits. Your beautiful hero video might be killing your conversions.

**The Fix:**
- Compress all images before uploading
- Choose a reliable hosting provider
- Remove unnecessary plugins and widgets
- Test your speed with Google PageSpeed Insights
- Aim for loading times under 3 seconds

Fast sites rank higher in Google and convert better. It's a win-win.

![Mobile phone showing slow-loading website](https://cdn.marblism.com/y3M8q7DtNeC.webp)

## Mistake #4: You're Missing Basic Security

No SSL certificate? Your site shows "Not Secure" in browsers. That's an instant trust killer. Would you buy from a site labeled "Not Secure"?

Beyond SSL, basic security oversights leave you vulnerable to attacks and your customers' data at risk.

**The Fix:**
- Install an SSL certificate immediately (most hosts offer free ones)
- Keep your website software updated
- Use strong passwords and two-factor authentication
- Display security badges near contact forms and checkout
- Back up your site regularly

Security isn't optional anymore. It's table stakes for doing business online.

## Mistake #5: Your Navigation is a Confusing Mess

Visitors should never wonder where to go next. Complex menus with dropdown submenus and unclear labels create confusion and frustration.

When people can't find what they need, they leave. It's that simple.

**The Fix:**
- Limit your main menu to 5-7 items max
- Use clear, descriptive labels (not clever ones)
- Include a search function if you have lots of content
- Create a logical hierarchy with your most important pages prominently featured
- Test your navigation with real users

Think like a customer, not like someone who knows your business inside and out.

![Overwhelming website navigation menu](https://cdn.marblism.com/Tb7HI_YYYM6.webp)

## Mistake #6: You Look Like Every Other Business

No About page. No team photos. No customer testimonials. Your website feels like a template everyone else is using.

People buy from people they know and trust. If your site doesn't show who you are, you're missing a huge opportunity to connect.

**The Fix:**
- Create an engaging About page that tells your story
- Show photos of your team and workspace
- Display customer testimonials prominently
- Share your business values and what makes you different
- Include your contact information everywhere
- Show off any awards, certifications, or community involvement

Local customers especially want to know who they're dealing with. Give them that confidence.

## Mistake #7: You're Using Features That Don't Convert

That fancy image slider on your homepage? Studies show most people never see slides after the first one. Auto-playing videos? They often annoy more than they engage.

Many "modern" website features actually hurt your conversions. Pretty doesn't always mean profitable.

**The Fix:**
- Replace image sliders with focused, static content
- Remove auto-playing audio or video
- Eliminate pop-ups that appear immediately
- Focus on one clear action per page
- Choose function over flashy design
- A/B test different approaches to see what works

Your website's job is to convert visitors into customers, not win design awards.

![Generic template-style business website](https://cdn.marblism.com/BjwO6RVALba.webp)

## The Real Cost of These Mistakes

Every day you wait to fix these issues, you're losing potential customers. They're visiting your site, getting confused or frustrated, and choosing your competitors instead.

The good news? These problems are all fixable. You don't need a complete website overhaul: just focused improvements that make a real difference.

## Quick Action Steps

Start with the biggest problems first:

1. Check your site on mobile right now
2. Test your loading speed
3. Install SSL if you don't have it
4. Clarify your homepage message
5. Simplify your navigation

Small changes can have big impacts. A clearer headline might double your conversions. Better mobile experience could unlock a whole new customer base.

Your website should work as hard as you do. When it's doing its job right, you'll get more calls, more emails, and more customers walking through your door.

Don't let these common mistakes keep your business invisible online. Fix them, and watch your website finally start working for you instead of against you.

![Customer celebrating website success](https://cdn.marblism.com/yYkm5oR_Llf.webp)

The best website isn't the fanciest: it's the one that turns visitors into customers. Keep it simple, make it fast, and always put your customers first.

Your competition is probably making these same mistakes. Fix yours first and watch your business grow.`
    }
  };
  
  return posts[slug] || null;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="section-padding">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <article className="section-padding">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Share2 className="w-4 h-4" />
                Share
              </Button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-li:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <img 
                    src={src} 
                    alt={alt} 
                    className="w-full rounded-lg shadow-lg my-8"
                  />
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mt-8 mb-4 text-foreground">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-lg leading-relaxed mb-6 text-foreground">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 mb-6 space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-lg text-foreground">
                    {children}
                  </li>
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5 border-t">
        <div className="container mx-auto max-w-4xl">
          <Card className="text-center">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Fix Your Website?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let these common mistakes hurt your business. Get a professional website 
                that converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-hero">
                  <Link to="/book">Book Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/#portfolio">View Our Work</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;