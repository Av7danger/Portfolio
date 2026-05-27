"use client";

import { useState } from "react";
import { PostMetadata } from "@/lib/markdown";
import { ResearchCard } from "@/components/ResearchCard";
import { Terminal } from "lucide-react";

interface ResearchExplorerProps {
  initialPosts: PostMetadata[];
}

const categories = [
  "All",
  "Semantic Trust Drift",
  "Authority Canonicalization Failures",
  "Delegation Collapse",
  "Runtime Identity Desynchronization",
  "Policy Attachment Drift"
];

const categoryDescriptions: Record<string, string> = {
  All: "Systematic investigation into the logical boundaries, parser differentials, and emergent failure states of neural systems and distributed identity authorities.",
  "Semantic Trust Drift": "Analyzing how semantic variations steer model representations, leading to the gradual decoupling of policy bounds and target alignments.",
  "Authority Canonicalization Failures": "Exploiting parser differentials and canonicalization mismatches between validation authorities and parsing runtimes.",
  "Delegation Collapse": "Investigating privilege cascades and boundary leaks when trust is dynamically delegated to autonomous agent tool-execution systems.",
  "Runtime Identity Desynchronization": "Isolating race conditions and structural logical failures that desynchronize identity profiles across tenant boundaries.",
  "Policy Attachment Drift": "Mapping activation-state anomalies where static security policies fail to attach coherently to dynamic LLM memory streams."
};

export function ResearchExplorer({ initialPosts }: ResearchExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Client-side category filtering
  const filteredPosts = selectedCategory === "All"
    ? initialPosts
    : initialPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-10">
      
      {/* 1. Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Research Archive
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2 select-none">
          <Terminal className="w-3.5 h-3.5" />
          <span>Security Advisories &amp; Core Publications</span>
        </p>
      </section>

      {/* 2. Custom Taxonomy Filters & Descriptions */}
      <section className="space-y-6">
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-1.5 px-3 rounded-sm border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#171717] text-white border-neutral-700 font-semibold"
                    : "bg-transparent text-neutral-400 border-neutral-900 hover:text-neutral-200 hover:border-neutral-800"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Description */}
        <div className="p-4 sm:p-5 border border-neutral-950 bg-[#030303]/40 rounded-sm min-h-[4rem] flex items-center">
          <p className="text-neutral-400 text-[13px] sm:text-[14px] leading-relaxed italic font-sans font-medium transition-all duration-300">
            {categoryDescriptions[selectedCategory] || categoryDescriptions.All}
          </p>
        </div>
      </section>

      {/* 3. Research Publications List */}
      <section className="pt-2">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <ResearchCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="p-10 border border-neutral-950 bg-[#030303]/60 text-center rounded-sm font-mono text-xs text-neutral-500 max-w-xl mx-auto select-none relative">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-amber-500/40" />
            <span className="text-amber-500/60 block mb-2 font-semibold">⚠ SECURITY ARCHIVE NOTE</span>
            No publications currently indexed under this research domain.
          </div>
        )}
      </section>

    </div>
  );
}
