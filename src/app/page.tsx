import { getPostsByType } from "@/lib/markdown";
import { ResearchCard } from "@/components/ResearchCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowRight, Github, Linkedin, Terminal, BookOpen } from "lucide-react";

export default async function Home() {
  // Retrieve compiled filesystem publications
  const featuredResearch = getPostsByType("research").slice(0, 2);
  const recentWriting = getPostsByType("writing").slice(0, 2);

  // Top static projects for the homepage highlight
  const featuredProjects = [
    {
      title: "Kai Autonomous Cybersecurity Agent Framework",
      technologies: ["Rust", "Python", "LLM Security", "Sandboxing", "Exploit Dev"],
      summary: "A high-performance autonomous agent framework built in Rust, engineered to execute offensive security diagnostics while maintaining rigid trust boundaries and sandboxed operation.",
      githubUrl: "https://github.com/Av7danger",
      demoUrl: "https://github.com/Av7danger",
    },
    {
      title: "Qwen3.5 Alignment Abliteration Research",
      technologies: ["PyTorch", "Transformer Lens", "Mechanistic Interpretability", "Activation Patching"],
      summary: "Abliterating alignment guardrails in Qwen3.5 via targeted weight modifications. Implementing activation patching to analyze representation steering and representation drift.",
      githubUrl: "https://github.com/Av7danger",
      demoUrl: "https://huggingface.co/AV07/Qwen3.5-abliteratedink",
    },
  ];

  return (
    <div className="space-y-24 mt-8 sm:mt-16">
      
      {/* 1. TYPOGRAPHIC HERO SECTION */}
      <section className="space-y-8 animate-fade-in">
        <div className="space-y-4">
          <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Systems &amp; AI Security</span>
          </p>
          
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-white font-display leading-[0.9] select-none">
            ANISH
            <br />
            VARMA
          </h1>
          
          <p className="text-lg sm:text-xl font-mono text-neutral-300 font-semibold tracking-tight">
            Security Researcher &amp; Founding Engineer
          </p>
        </div>

        <p className="text-neutral-400 max-w-2xl leading-relaxed text-[15px] sm:text-[16px] font-sans">
          Security researcher exploring alignment behavior, autonomous agents, and distributed trust boundaries.
        </p>

        {/* CTA Button Grid */}
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="/research"
            className="flex items-center gap-2 bg-[#fafafa] hover:bg-neutral-200 text-[#050505] font-semibold text-xs sm:text-sm py-2.5 px-5 rounded-sm transition-colors font-mono"
          >
            <BookOpen className="w-4 h-4" />
            <span>View Research</span>
          </a>
          <a
            href="https://github.com/Av7danger"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-sm transition-colors font-mono"
          >
            <Github className="w-4.5 h-4.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/danishvarma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-300 hover:text-white font-medium text-xs sm:text-sm py-2.5 px-5 rounded-sm transition-colors font-mono"
          >
            <Linkedin className="w-4.5 h-4.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* 2. FEATURED RESEARCH SECTION */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-900 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-display">
            Selected Research Publications
          </h2>
          <a
            href="/research"
            className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>Full Archive</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {featuredResearch.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredResearch.map((post) => (
              <ResearchCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-neutral-900 p-8 text-center rounded-sm">
            <p className="text-xs font-mono text-neutral-500">
              No publications loaded in /content/research. Build-time system active.
            </p>
          </div>
        )}
      </section>

      {/* 3. FEATURED PROJECTS SECTION */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-900 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-display">
            Active Engineering Systems
          </h2>
          <a
            href="/projects"
            className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              technologies={project.technologies}
              summary={project.summary}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </section>

      {/* 4. RECENT WRITING SECTION */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-neutral-900 pb-3">
          <h2 className="text-xl font-bold tracking-tight text-white font-display">
            Recent Notes &amp; Writing
          </h2>
          <a
            href="/writing"
            className="flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <span>All Writing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {recentWriting.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentWriting.map((post) => (
              <a
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group p-6 border border-neutral-900 bg-[#030303] hover:border-neutral-800 transition-colors rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                    {post.category} // {post.date}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-200 group-hover:text-white transition-colors font-display">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed font-sans line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono font-semibold text-neutral-400 group-hover:text-white transition-colors">
                  <span>Read Essay</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-neutral-900 p-8 text-center rounded-sm">
            <p className="text-xs font-mono text-neutral-500">
              No notes loaded in /content/blog. Build-time system active.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}
