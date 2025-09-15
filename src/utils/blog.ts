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

// Simple frontmatter parser for browser compatibility
function parseFrontmatter(content: string): { data: Record<string, any>; content: string } {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return { data: {}, content };
  }
  
  const frontmatter = match[1];
  const markdownContent = match[2];
  
  // Parse YAML-like frontmatter
  const data: Record<string, any> = {};
  const lines = frontmatter.split('\n');
  
  for (const line of lines) {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) continue;
    
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = trimmedLine.substring(0, colonIndex).trim();
    let value = trimmedLine.substring(colonIndex + 1).trim();
    
    // Remove quotes if present
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    data[key] = value;
  }
  
  return { data, content: markdownContent };
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
  
  console.log('Loading blog posts...', Object.keys(blogModules));
  
  for (const [path, moduleLoader] of Object.entries(blogModules)) {
    try {
      console.log(`Loading blog post from ${path}`);
      const content = await moduleLoader() as string;
      const { data, content: markdownContent } = parseFrontmatter(content);
      
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
      
      console.log(`Loaded post: ${post.title}`, post);
      posts.push(post);
    } catch (error) {
      console.error(`Error loading blog post from ${path}:`, error);
    }
  }
  
  // Sort posts by date (newest first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  console.log(`Loaded ${posts.length} blog posts:`, posts);
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