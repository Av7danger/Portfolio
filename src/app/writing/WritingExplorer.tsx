"use client";

import { useState } from "react";
import { PostMetadata } from "@/lib/markdown";
import { Terminal, ArrowRight } from "lucide-react";

interface WritingExplorerProps {
  initialPosts: PostMetadata[];
}

const categories = [
  "All",
  "AI Security",
  "Trust Boundaries",
  "Mechanistic Interpretability",
  "Offensive Security",
  "AI Agents",
  "Parser Research",
];

export function WritingExplorer({ initialPosts }: WritingExplorerProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All"
    ? initialPosts
    : initialPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="space-y-12">
      
      {/* 1. Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Writing &amp; Notes
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Essays, opinions, and security notes</span>
        </p>
      </section>

      {/* 2. Category Filters */}
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

      {/* 3. Essays Listing */}
      <section className="space-y-8 font-sans">
        {filteredPosts.length > 0 ? (
          <div className="divide-y divide-neutral-900">
            {filteredPosts.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0 last:pb-0 group">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 text-xs font-mono text-neutral-500 mb-2">
                  <span>{post.category}</span>
                  <span>{post.date} // {post.readingTime}</span>
                </div>
                
                <a href={`/writing/${post.slug}`} className="block focus:outline-none">
                  <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors font-display leading-tight">
                    {post.title}
                  </h3>
                </a>
                
                <p className="text-neutral-400 text-sm mt-3 leading-relaxed max-w-3xl">
                  {post.description}
                </p>

                <div className="mt-4 flex items-center gap-1.5 text-xs font-mono font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <a href={`/writing/${post.slug}`} className="flex items-center gap-1.5 hover:underline">
                    <span>Read Essay</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="p-12 border border-dashed border-neutral-900 text-center rounded-sm font-mono text-xs text-neutral-500">
            No essays found under the "{selectedCategory}" category.
          </div>
        )}
      </section>

    </div>
  );
}
