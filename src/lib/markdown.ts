import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Structured post metadata interfaces
export interface PostMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  lastUpdated?: string;
  tags: string[];
  category: string;
  readingTime: string;
  featured: boolean;
  draft: boolean;
  coverImage?: string;
  status?: "Published" | "Ongoing Research" | "Coordinated Disclosure" | "Under Review" | "Experimental" | "Archived";
  type: "research" | "writing";
}

export interface Post extends PostMetadata {
  content: string;
}

// Relative content paths (from project root)
const CONTENT_DIR = path.join(process.cwd(), "content");
const RESEARCH_DIR = path.join(CONTENT_DIR, "research");
const BLOG_DIR = path.join(CONTENT_DIR, "blog");

// Ensure directories exist
function ensureDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Get all files recursively or standard listing
function getMarkdownFiles(dirPath: string): string[] {
  ensureDirectory(dirPath);
  return fs.readdirSync(dirPath).filter((file) => /\.(md|mdx)$/.test(file));
}

// Unified parser for a single markdown/mdx file
export function getPostBySlug(dirPath: string, slug: string, type: "research" | "writing"): Post | null {
  try {
    const fullPathWithoutExt = path.join(dirPath, slug);
    let filePath = `${fullPathWithoutExt}.mdx`;
    if (!fs.existsSync(filePath)) {
      filePath = `${fullPathWithoutExt}.md`;
    }
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const metadata: PostMetadata = {
      slug,
      title: data.title || "Untitled",
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      lastUpdated: data.lastUpdated || undefined,
      tags: Array.isArray(data.tags) ? data.tags : [],
      category: data.category || "General",
      readingTime: data.readingTime || "1 min read",
      featured: typeof data.featured === "boolean" ? data.featured : false,
      draft: typeof data.draft === "boolean" ? data.draft : false,
      coverImage: data.coverImage || undefined,
      status: data.status || undefined,
      type,
    };

    return {
      ...metadata,
      content,
    };
  } catch (error) {
    console.error(`Error loading slug ${slug} in ${dirPath}:`, error);
    return null;
  }
}

// Get all posts of a specific type (sorted by date descending)
export function getPostsByType(type: "research" | "writing"): Post[] {
  const dirPath = type === "research" ? RESEARCH_DIR : BLOG_DIR;
  const files = getMarkdownFiles(dirPath);

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.(md|mdx)$/, "");
      return getPostBySlug(dirPath, slug, type);
    })
    .filter((post): post is Post => post !== null && !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

// Aggregated posts database
export function getAllPosts(): Post[] {
  const research = getPostsByType("research");
  const writing = getPostsByType("writing");
  return [...research, ...writing].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// Determine navigation nodes for an article detail view
export interface NavigationLinks {
  prev: { slug: string; title: string; type: string } | null;
  next: { slug: string; title: string; type: string } | null;
}

export function getPrevAndNextPosts(slug: string, type: "research" | "writing"): NavigationLinks {
  const posts = getPostsByType(type);
  const index = posts.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return { prev: null, next: null };
  }

  // Descending date sort (newest first). Index 0 is newest.
  // Next post (chronologically newer) is index - 1.
  // Prev post (chronologically older) is index + 1.
  const nextPost = index > 0 ? posts[index - 1] : null;
  const prevPost = index < posts.length - 1 ? posts[index + 1] : null;

  return {
    prev: prevPost ? { slug: prevPost.slug, title: prevPost.title, type } : null,
    next: nextPost ? { slug: nextPost.slug, title: nextPost.title, type } : null,
  };
}
