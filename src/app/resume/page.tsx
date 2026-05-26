"use client";

import { Terminal, Printer, ArrowDownToLine, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function ResumePage() {
  const experiences = [
    {
      role: "Founding Engineer",
      org: "SecNode",
      period: "2025 — Present",
      bullets: [
        "Architecting autonomous offensive security execution pipelines and multi-agent workflows using LangGraph and model-routing abstractions.",
        "Engineering container isolation boundaries using minimal cgroups cgroupv2 configurations and eBPF network socket filters to enforce rigorous sandboxing of untrusted tool execution.",
        "Developing automated vulnerability auditing modules with custom parser analyzers to detect and flag trust-boundary escalation risks in runtime nodes."
      ]
    },
    {
      role: "Independent Security Researcher",
      org: "AI & Distributed Systems Research",
      period: "2024 — Present",
      bullets: [
        "Isolated safety-refusal representation subspaces in Qwen-3.5 residual stream layers; coordinate-disclosed low-rank abliteration techniques with zero capability degradation.",
        "Discovered and patched CVE-2026-40281 (Critical CVSS 9.8 container socket escape / RCE) in autonomous agent orchestration frameworks via coordinated vulnerability disclosures.",
        "Identified and securely reported high-severity XML Entity Expansion / Billion Laughs vulnerabilities to NASA's Vulnerability Disclosure Program via Bugcrowd."
      ]
    }
  ];

  const publications = [
    {
      title: "Mechanistic Alignment Abliteration in Qwen-3.5: Steering Activation States",
      date: "May 2026",
      desc: "Technical analysis isolating safety-refusal pathways in the late transformer residual stream layers and projecting out refusal steering vectors via targeted weight orthogonalization.",
      link: "/research/qwen-alignment-abliteration"
    },
    {
      title: "Trust-Boundary Drift in Multi-Agent Workflows",
      date: "May 2026",
      desc: "Academic exploration modeling non-deterministic privilege escalation vectors, dynamic tool introspection abuses, and context-pollution exploits inside autonomous agent orchestrators.",
      link: "/writing/trust-boundary-drift"
    }
  ];

  const systems = [
    {
      name: "SecNode API Pentester",
      desc: "AI-augmented schema-driven microservices auditor focused on automated OpenAPI ingestion, multi-stage fuzzing pipelines, and authorization-bypass discovery.",
      url: "https://github.com/SecNode/API-PENTESTER"
    },
    {
      name: "Kai Agent Framework",
      desc: "High-performance Rust-based defensive scanner executing offensive vulnerability assessments inside strict eBPF containment boundaries.",
      url: "https://github.com/Av7danger"
    },
    {
      name: "PurgeProof",
      desc: "Cross-platform block-level data sanitization engine built to comply with NIST SP 800-88 Rev.1 secure erasure and auditable reporting standards.",
      url: "https://github.com/Av7danger/PurgeProof"
    }
  ];

  return (
    <div className="space-y-12 animate-fade-in max-w-3xl mx-auto font-sans text-neutral-300 relative">
      
      {/* 1. Page Header & CV Controls */}
      <section className="flex items-end justify-between border-b border-neutral-900 pb-4 no-print">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight text-white font-display">
            Curriculum Vitae
          </h1>
          <p className="text-neutral-400 font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5">
            <Terminal className="w-3 h-3 text-neutral-500" />
            <span>Independent Systems &amp; AI Security</span>
          </p>
        </div>

        {/* Print & Download PDF links */}
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <button 
            onClick={() => window.print()}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors py-1.5 px-3 border border-neutral-900 bg-[#030303]/40 rounded-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / PDF</span>
          </button>
        </div>
      </section>

      {/* CV Print-Only Title Box */}
      <section className="hidden print:block border-b border-neutral-250 pb-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 font-display">
              Anish Varma
            </h1>
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mt-1">
              Systems &amp; AI/ML Security Researcher
            </p>
          </div>
          <div className="text-right font-mono text-xs text-neutral-600 space-y-1">
            <div className="flex items-center gap-1.5 justify-end">
              <Mail className="w-3 h-3" /> anishvarma.ava@gmail.com
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Github className="w-3 h-3" /> github.com/Av7danger
            </div>
            <div className="flex items-center gap-1.5 justify-end">
              <Linkedin className="w-3 h-3" /> linkedin.com/in/danishvarma
            </div>
          </div>
        </div>
      </section>

      {/* 2. Abstract Executive Profile */}
      <section className="space-y-3">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500">
          [ 01 // Executive Profile ]
        </div>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-200 font-medium">
          Security researcher and founding engineer focused on AI/ML systems, offensive security, and trust-boundary analysis. Specializing in mechanistic interpretability, model alignment, cgroups/eBPF sandboxing, and autonomous agent safety. Proven track record of high-severity coordinated vulnerability disclosures and formal systems research.
        </p>
      </section>

      {/* 3. Professional Experience */}
      <section className="space-y-6">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500 border-b border-neutral-900/40 pb-1">
          [ 02 // Professional Experience ]
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.org} className="space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-base font-bold text-white print:text-neutral-900">
                    {exp.role}
                  </h3>
                  <span className="text-neutral-400 font-mono text-xs">
                    {exp.org}
                  </span>
                </div>
                <span className="text-neutral-500 font-mono text-xs">
                  {exp.period}
                </span>
              </div>
              
              <ul className="list-disc pl-5 space-y-2 text-[13px] sm:text-[14px] text-neutral-350 leading-relaxed">
                {exp.bullets.map((bullet, index) => (
                  <li key={index} className="pl-1">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Publications & Research */}
      <section className="space-y-6">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500 border-b border-neutral-900/40 pb-1">
          [ 03 // Peer &amp; Independent Publications ]
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.title} className="space-y-2">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[14px] font-bold text-white print:text-neutral-900 hover:underline">
                  <a href={pub.link} className="flex items-center gap-1">
                    <span>{pub.title}</span>
                    <ExternalLink className="w-3 h-3 text-neutral-600 print:hidden" />
                  </a>
                </h3>
                <span className="text-neutral-500 font-mono text-xs flex-shrink-0 ml-4">
                  {pub.date}
                </span>
              </div>
              <p className="text-[13px] text-neutral-400 leading-relaxed">
                {pub.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Systems Engineering & Infrastructure */}
      <section className="space-y-6">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500 border-b border-neutral-900/40 pb-1">
          [ 04 // Systems Engineering &amp; Tooling ]
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {systems.map((sys) => (
            <div key={sys.name} className="p-4 border border-neutral-900/30 bg-[#030303]/30 rounded-sm space-y-2">
              <h3 className="text-xs font-bold text-white print:text-neutral-900">
                <a href={sys.url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  <span>{sys.name}</span>
                  <ExternalLink className="w-2.5 h-2.5 text-neutral-600 print:hidden" />
                </a>
              </h3>
              <p className="text-[11px] text-neutral-400 leading-relaxed">
                {sys.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technical Skills Matrix */}
      <section className="space-y-4">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500 border-b border-neutral-900/40 pb-1">
          [ 05 // Technical Skill Matrix ]
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-[11px] text-neutral-400">
          <div className="space-y-2">
            <span className="text-neutral-500 uppercase tracking-wider text-[9px] block">Models &amp; Interpretability</span>
            <span className="text-neutral-350 block leading-relaxed">PyTorch, Transformer Lens, HookedTransformer, Hugging Face, Refusal Isolation &amp; Abliteration</span>
          </div>
          <div className="space-y-2">
            <span className="text-neutral-500 uppercase tracking-wider text-[9px] block">Offensive Systems Security</span>
            <span className="text-neutral-350 block leading-relaxed">Container Sandboxing breakout vectors, eBPF socket filters, cgroups limits, threat modeling, XML parser attacks, API fuzzer design</span>
          </div>
          <div className="space-y-2">
            <span className="text-neutral-500 uppercase tracking-wider text-[9px] block">Languages &amp; Runtimes</span>
            <span className="text-neutral-350 block leading-relaxed">Python, Rust, Go (Golang), Linux, cgroupv2, gRPC, Docker, Git, SQLite / PostgreSQL</span>
          </div>
        </div>
      </section>

      {/* 7. Education */}
      <section className="space-y-3">
        <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest print:text-neutral-500 border-b border-neutral-900/40 pb-1">
          [ 06 // Academic Education ]
        </div>

        <div className="flex justify-between items-baseline text-xs font-mono">
          <div className="space-y-0.5">
            <span className="text-neutral-200 block font-semibold">B.S. in Computer Science &amp; Security Engineering</span>
            <span className="text-neutral-500 block text-[11px]">Specialization in Distributed cgroups Containment and Deep Learning</span>
          </div>
          <span className="text-neutral-500 flex-shrink-0">Graduated // Independent Focus</span>
        </div>
      </section>

    </div>
  );
}
