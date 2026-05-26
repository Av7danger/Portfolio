import { Terminal, Github, Lock, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "SecNode API Pentester",
      description: "AI-augmented, schema-driven API penetration testing framework focused on autonomous reconnaissance, structured vulnerability discovery, and agentic security workflows. Built around OpenAPI ingestion, multi-stage analysis pipelines, and concurrent testing infrastructure.",
      tags: ["AI Security", "API Security", "Agent Systems", "Python", "OpenAPI", "Offensive Security"],
      githubUrl: "https://github.com/SecNode/API-PENTESTER",
      isPrivate: false,
    },
    {
      title: "Kai",
      description: "Private autonomous offensive-security research project exploring adaptive vulnerability discovery, agentic reasoning loops, and multi-stage offensive workflows for modern application security research.",
      tags: ["Autonomous Security", "AI Agents", "Offensive Research", "Python", "Private Research"],
      isPrivate: true,
    },
    {
      title: "OpenSchema",
      description: "Synthetic dataset generation tooling focused on producing realistic structured data for experimentation, testing pipelines, and AI-oriented workflows.",
      tags: ["Synthetic Data", "AI Infrastructure", "Python", "Data Generation"],
      githubUrl: "https://github.com/Av7danger/OpenSchema",
      isPrivate: false,
    },
    {
      title: "PurgeProof",
      description: "Cross-platform secure data sanitization system inspired by NIST SP 800-88 Rev.1 methodologies, supporting secure erase workflows, auditability, and tamper-resistant reporting.",
      tags: ["Systems Security", "Data Sanitization", "Python", "Security Engineering"],
      githubUrl: "https://github.com/Av7danger/PurgeProof",
      isPrivate: false,
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in max-w-4xl mx-auto">
      
      {/* 1. Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Systems &amp; Tooling
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Selected Systems, Tooling, and Security Research Infrastructure</span>
        </p>
      </section>

      {/* 2. Lab Archive Stats Dashboard */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-neutral-900 bg-[#030303] rounded-sm font-mono text-xs">
        <div className="p-3 border-r border-neutral-950/20 last:border-0 flex flex-col justify-between">
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] block">Total Systems</span>
          <span className="text-white text-2xl font-bold mt-2 font-display">
            04
          </span>
        </div>
        <div className="p-3 border-r border-neutral-950/20 last:border-0 flex flex-col justify-between">
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] block">Public Tooling</span>
          <span className="text-neutral-300 text-2xl font-bold mt-2 font-display">
            03
          </span>
        </div>
        <div className="p-3 border-r border-neutral-950/20 last:border-0 flex flex-col justify-between">
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] block">Private Research</span>
          <span className="text-neutral-300 text-2xl font-bold mt-2 font-display">
            01
          </span>
        </div>
        <div className="p-3 flex flex-col justify-between">
          <span className="text-neutral-500 uppercase tracking-widest text-[9px] block">License Paradigm</span>
          <span className="text-neutral-400 text-[10px] font-semibold mt-3 uppercase tracking-wider">
            Academic / BSD-3
          </span>
        </div>
      </section>

      {/* 3. Redesigned Tooling List */}
      <section>
        <div className="divide-y divide-neutral-900 border-t border-b border-neutral-900">
          {projects.map((project, idx) => (
            <div 
              key={project.title} 
              className="py-8 group flex flex-col md:flex-row gap-6 md:gap-12 hover:bg-[#030303]/30 transition-colors duration-350 px-4"
            >
              
              {/* Left Column: Numbering & Title & Status Badges & Link */}
              <div className="md:w-1/3 space-y-3">
                <div className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  [ SYSTEMS_REF // 0{idx + 1} ]
                </div>
                
                <h3 className="text-lg font-bold tracking-tight text-white font-display">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {project.isPrivate ? (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 bg-neutral-950 border border-neutral-900 px-2.5 py-1 rounded-sm">
                      <Lock className="w-3 h-3 text-neutral-500" />
                      <span>Private Research</span>
                    </span>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 hover:text-white bg-neutral-950 hover:bg-neutral-900 border border-neutral-900 px-2.5 py-1 rounded-sm transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-3 h-3 text-neutral-600 group-hover:text-neutral-300 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Right Column: Description & Tags */}
              <div className="md:w-2/3 space-y-4">
                <p className="text-neutral-350 text-[14px] sm:text-[15px] leading-relaxed font-sans font-medium">
                  {project.description}
                </p>
                
                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-neutral-400 bg-neutral-950/40 border border-neutral-900 px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>

      {/* 4. Research Statement */}
      <section className="p-6 border border-neutral-950 bg-[#020202] rounded-sm text-xs font-mono text-neutral-500 leading-relaxed text-center">
        <span>All research software is cataloged for security validation, dynamic analysis training, and defensive testing. Code is released under explicit academic guidelines.</span>
      </section>

    </div>
  );
}
