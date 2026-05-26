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
  "AI Security",
  "Offensive Security",
  "Autonomous Agents",
  "Mechanistic Interpretability",
];

export function ResearchExplorer({ initialPosts }: ResearchExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Client-side category filtering
  const filteredPosts = selectedCategory === "All"
    ? initialPosts
    : initialPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* 1. Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Research Archive
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Security Advisories &amp; Core Publications</span>
        </p>
      </section>

      {/* 2. Category Tabs */}
      <section className="border-b border-neutral-900 pb-4">
        <div className="flex flex-wrap gap-2 text-xs font-mono">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-1.5 px-3 rounded-sm border transition-all ${
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
      </section>

      {/* 3. Research Publications List */}
      <section>
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <ResearchCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="p-12 border border-dashed border-neutral-900 text-center rounded-sm font-mono text-xs text-neutral-500">
            No papers found under the "{selectedCategory}" category.
          </div>
        )}
      </section>

    </div>
  );
}
