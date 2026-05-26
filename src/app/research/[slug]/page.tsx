import path from "path";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByType, getPrevAndNextPosts } from "@/lib/markdown";
import { CustomMDX } from "@/components/CustomMDX";
import { ProgressBar } from "@/components/ProgressBar";
import { CopyCitation } from "@/components/CopyCitation";
import { Calendar, Clock, ChevronLeft, ChevronRight, BookOpen, User } from "lucide-react";

interface ParamProps {
  params: Promise<{
    slug: string;
  }>;
}

// Compile-time static parameters generator for dynamic paths
export async function generateStaticParams() {
  const posts = getPostsByType("research");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ResearchDetail({ params }: ParamProps) {
  const { slug } = await params;
  const contentDir = path.join(process.cwd(), "content", "research");
  const post = getPostBySlug(contentDir, slug, "research");

  if (!post) {
    notFound();
  }

  const { prev, next } = getPrevAndNextPosts(slug, "research");
  const productionUrl = `https://anishvarma.com/research/${slug}`;

  return (
    <article className="max-w-3xl mx-auto space-y-10 animate-fade-in relative">
      {/* 2px scroll progress bar fixed to top */}
      <ProgressBar />

      {/* 1. Header Navigation Breadcrumbs */}
      <div className="flex items-center justify-between border-b border-neutral-900 pb-4 font-mono text-xs">
        <a 
          href="/research" 
          className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Research Index</span>
        </a>
        <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">
          {post.category} // Document Viewer
        </span>
      </div>

      {/* 2. Title & Academic Meta Header */}
      <header className="space-y-6">
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-display">
          {post.title}
        </h1>

        {/* Academic metadata grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 border border-neutral-950 bg-[#030303] rounded-sm font-mono text-[11px] text-neutral-400">
          <div className="space-y-1 border-r border-neutral-950 pr-2">
            <span className="text-neutral-500 block uppercase tracking-wider text-[9px]">Author</span>
            <span className="text-neutral-200 flex items-center gap-1">
              <User className="w-3 h-3" /> Anish Varma
            </span>
            <span className="text-neutral-600 block text-[9px]">Independent Researcher</span>
          </div>
          <div className="space-y-1 border-r border-neutral-950 pr-2">
            <span className="text-neutral-500 block uppercase tracking-wider text-[9px]">Published</span>
            <span className="text-neutral-200 flex items-center gap-1">
              <Calendar className="w-3 h-3" /> {post.date}
            </span>
            {post.lastUpdated && (
              <span className="text-neutral-500 block text-[9px]">Updated: {post.lastUpdated}</span>
            )}
          </div>
          <div className="space-y-1 border-r border-neutral-950 pr-2">
            <span className="text-neutral-500 block uppercase tracking-wider text-[9px]">Reading Time</span>
            <span className="text-neutral-200 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {post.readingTime}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-neutral-500 block uppercase tracking-wider text-[9px]">Doc Status</span>
            <div className="mt-0.5">
              <span className="px-1.5 py-0.5 border border-neutral-800 bg-[#070707] text-neutral-300 rounded-sm text-[9px] uppercase tracking-wider font-semibold">
                {post.status || "Published"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 3. Formal Academic Abstract block */}
      <section className="p-5 sm:p-6 border border-neutral-900 bg-[#030303] rounded-sm space-y-3 relative overflow-hidden">
        {/* Abstract side border accent */}
        <div className="absolute left-0 top-0 h-full w-[2px] bg-neutral-600" />
        <h3 className="font-mono text-xs font-semibold text-neutral-300 uppercase tracking-widest flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Document Abstract</span>
        </h3>
        <p className="text-neutral-300 text-[13px] sm:text-[14px] leading-relaxed italic font-sans font-medium">
          {post.description}
        </p>
      </section>

      {/* 4. MDX rendered publication body */}
      <section className="prose">
        <CustomMDX source={post.content} />
      </section>

      {/* 5. Copyable academic BibTeX / plaintext citation helper */}
      <CopyCitation
        citationKey={`varma${new Date(post.date).getFullYear()}${slug.replace(/[^a-zA-Z]/g, "")}`}
        title={post.title}
        author="Anish Varma"
        year={new Date(post.date).getFullYear().toString()}
        url={productionUrl}
      />

      {/* 6. Technical Previous / Next paper navigation */}
      <nav className="flex items-center justify-between border-t border-neutral-900 pt-8 mt-12 font-mono text-xs">
        {prev ? (
          <a
            href={`/research/${prev.slug}`}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors max-w-[45%]"
          >
            <ChevronLeft className="w-4 h-4 flex-shrink-0" />
            <div className="text-left">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Previous Paper</div>
              <div className="truncate text-neutral-300 font-semibold">{prev.title}</div>
            </div>
          </a>
        ) : (
          <div className="w-1" />
        )}

        {next ? (
          <a
            href={`/research/${next.slug}`}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors max-w-[45%] ml-auto"
          >
            <div className="text-right">
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">Next Paper</div>
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
