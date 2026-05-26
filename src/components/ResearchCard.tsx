import { Calendar, Clock, FileText, ArrowUpRight } from "lucide-react";
import { PostMetadata } from "@/lib/markdown";

interface ResearchCardProps {
  post: PostMetadata;
}

export function ResearchCard({ post }: ResearchCardProps) {
  // Map specific research status tags to elegant, low-noise border colors
  const statusStyles = {
    Published: "border-emerald-900/40 text-emerald-400 bg-emerald-950/5",
    "Ongoing Research": "border-blue-900/40 text-blue-400 bg-blue-950/5",
    "Coordinated Disclosure": "border-amber-900/40 text-amber-500 bg-amber-950/5",
    "Under Review": "border-purple-900/40 text-purple-400 bg-purple-950/5",
    Experimental: "border-rose-900/40 text-rose-400 bg-rose-950/5",
    Archived: "border-neutral-800 text-neutral-500 bg-neutral-900/20",
  };

  const statusBadge = post.status ? (
    <span className={`text-[10px] font-mono font-medium tracking-wider uppercase px-2 py-0.5 border rounded-sm ${statusStyles[post.status] || "border-neutral-800 text-neutral-400"}`}>
      {post.status}
    </span>
  ) : null;

  return (
    <article className="group border border-neutral-900/30 bg-[#030303]/30 hover:border-neutral-800/60 transition-all duration-300 p-7 sm:p-8 rounded-sm flex flex-col justify-between h-full relative">
      
      <div>
        {/* Header section with category and status badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-neutral-900 mb-5 text-xs font-mono">
          <span className="text-neutral-500 uppercase tracking-widest text-[10px] font-bold">
            {post.category}
          </span>
          {statusBadge}
        </div>

        {/* Dynamic slug route redirection */}
        <a href={`/research/${post.slug}`} className="block focus:outline-none">
          <h3 className="text-lg font-semibold tracking-tight text-neutral-100 group-hover:text-white transition-colors leading-snug flex items-start gap-1 justify-between font-display">
            <span>{post.title}</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors flex-shrink-0 mt-1" />
          </h3>
        </a>

        {/* Abstract/Summary body */}
        <p className="text-neutral-300 text-[13.5px] sm:text-[14.5px] mt-4 leading-relaxed font-sans line-clamp-3">
          {post.description}
        </p>
      </div>

      <div className="mt-8">
        {/* Metadata tag listings */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-900 px-2 py-0.5 rounded-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Card footer details */}
        <div className="flex items-center gap-4 text-neutral-500 font-mono text-[10px] border-t border-neutral-900 pt-4 mt-auto">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{post.date}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readingTime}</span>
          </span>
          <a
            href={`/research/${post.slug}`}
            className="ml-auto flex items-center gap-1 font-semibold text-neutral-300 group-hover:text-white transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Read Document</span>
          </a>
        </div>
      </div>

    </article>
  );
}
