import matter from 'gray-matter';

export interface BlogPostMeta {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

// Import all markdown files from the blog directory
const blogModules = import.meta.glob('../content/blog/*.md', { 
  query: '?raw', 
  import: 'default' 
});

let cachedPosts: BlogPost[] | null = null;

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (cachedPosts) {
    return cachedPosts;
  }

  const posts: BlogPost[] = [];
  
  for (const [path, moduleLoader] of Object.entries(blogModules)) {
    try {
      const content = await moduleLoader() as string;
      const { data, content: markdownContent } = matter(content);
      
      // Extract slug from filename
      const slug = path.split('/').pop()?.replace('.md', '') || '';
      
      const post: BlogPost = {
        title: data.title || 'Untitled',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString().split('T')[0],
        readTime: data.readTime || '5 min read',
        image: data.image || 'https://cdn.marblism.com/sImsguOYOzd.webp',
        slug: data.slug || slug,
        content: markdownContent
      };
      
      posts.push(post);
    } catch (error) {
      console.error(`Error loading blog post from ${path}:`, error);
    }
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  cachedPosts = posts;
  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

// Clear cache when needed (useful for development)
export function clearBlogCache() {
  cachedPosts = null;
}