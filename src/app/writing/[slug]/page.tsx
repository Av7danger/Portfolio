import path from "path";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByType, getPrevAndNextPosts } from "@/lib/markdown";
import { CustomMDX } from "@/components/CustomMDX";
import { ProgressBar } from "@/components/ProgressBar";
import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";

interface ParamProps {
  params: Promise<{
    slug: string;
  }>;
}

// Compile-time static parameter generation for dynamic paths
export async function generateStaticParams() {
  const posts = getPostsByType("writing");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function WritingDetail({ params }: ParamProps) {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), "content", "blog");
  const post = getPostBySlug(contentDir, slug, "writing");

  if (!post) {
    notFound();
  }

  const { prev, next } = getPrevAndNextPosts(slug, "writing");

  return (
    <article className="max-w-2xl mx-auto space-y-10 animate-fade-in relative font-sans">
      {/* 2px scroll progress bar fixed to top */}
      <ProgressBar />

      {/* 1. Header Navigation Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-4 font-mono text-xs">
        <a 
          href="/writing" 
          className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Writing Index</span>
        </a>
        <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">
          {post.category} // Notes &amp; Thoughts
        </span>
      </div>

      {/* 2. Metadata details */}
      <header className="space-y-4">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight font-display">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime}</span>
          </span>
        </div>
      </header>

      {/* 3. MDX rendered technical essay body */}
      <section className="prose pt-4">
        <CustomMDX source={post.content} />
      </section>

      {/* 4. Previous / Next essay navigation */}
      <nav className="flex items-center justify-between border-t border-neutral-900 pt-8 mt-12 font-mono text-xs">
        {prev ? (
          <a
            href={`/writing/${prev.slug}`}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors max-w-[45%]"
          >
            <ChevronLeft className="w-4 h-4 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Previous Note</div>
              <div className="truncate text-neutral-300 font-semibold">{prev.title}</div>
            </div>
          </a>
        ) : (
          <div className="w-1" />
        )}

        {next ? (
          <a
            href={`/writing/${next.slug}`}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors max-w-[45%] ml-auto"
          >
            <div className="text-right">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Next Note</div>
              <div className="truncate text-neutral-300 font-semibold">{next.title}</div>
            </div>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
          </a>
        ) : (
          <div className="w-1" />
        )}
      </nav>
    </article>
  );
}
