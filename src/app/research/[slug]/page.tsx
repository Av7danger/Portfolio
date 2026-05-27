import path from "path";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByType, getPrevAndNextPosts } from "@/lib/markdown";
import { CustomMDX } from "@/components/CustomMDX";
import { ProgressBar } from "@/components/ProgressBar";
import { CopyCitation } from "@/components/CopyCitation";
import { ResearchMetadata } from "@/components/ResearchMetadata";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const productionUrl = `https://av7danger.dev/research/${slug}`;

  // Find related research articles (same category, max 2, excluding current)
  const allResearch = getPostsByType("research");
  const relatedPosts = allResearch
    .filter((p) => p.category === post.category && p.slug !== slug)
    .slice(0, 2);

  // Fallback to recent research if not enough related in the same category
  if (relatedPosts.length < 2) {
    const fillers = allResearch
      .filter((p) => p.slug !== slug && !relatedPosts.some((r) => r.slug === p.slug))
      .slice(0, 2 - relatedPosts.length);
    relatedPosts.push(...fillers);
  }

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

      {/* 2. Redesigned Refined Hero System (Restrained & Editorial) */}
      <header className="space-y-6 pt-4 pb-8 border-b border-neutral-900/60">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight font-display">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed italic font-sans font-medium max-w-2xl pt-1">
              {post.description}
            </p>
          )}
        </div>

        {/* Dynamic & Hydration-Safe Metadata Indicators */}
        <ResearchMetadata 
          date={post.date}
          lastUpdated={post.lastUpdated}
          status={post.status}
          readingTime={post.readingTime}
        />

        {/* Dynamic Tag list */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-900/60 px-2 py-0.5 rounded-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* 3. MDX rendered publication body */}
      <section className="prose">
        <CustomMDX source={post.content} />
      </section>

      {/* 4. Copyable academic BibTeX / plaintext citation helper */}
      <CopyCitation
        citationKey={`varma${new Date(post.date).getFullYear()}${slug.replace(/[^a-zA-Z]/g, "")}`}
        title={post.title}
        author="Anish Varma"
        year={new Date(post.date).getFullYear().toString()}
        url={productionUrl}
      />

      {/* 5. Related Research Footer Block (Restrained Terminal Style) */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-neutral-900/60 pt-10 mt-16 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-500/60 rounded-full" />
            <h3 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-bold">
              // Related Research & Document Linkages
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((p) => (
              <a 
                key={p.slug} 
                href={`/research/${p.slug}`} 
                className="group block py-5 border-b border-neutral-900/40 hover:border-neutral-800 transition-colors"
              >
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mb-2">// {p.category}</div>
                <h4 className="text-sm font-semibold text-neutral-200 group-hover:text-amber-500/90 transition-colors font-display leading-snug">{p.title}</h4>
                <div className="text-[10px] font-mono text-neutral-500 mt-4 flex items-center justify-between">
                  <span>{p.date}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

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
