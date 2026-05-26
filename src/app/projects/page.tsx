import { ProjectCard } from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Kai Autonomous Cybersecurity Agent Framework",
      technologies: ["Rust", "Python", "LLM Security", "Sandboxing", "Exploit Dev"],
      summary: "A high-performance autonomous agent framework built in Rust, engineered to execute offensive security diagnostics while maintaining rigid trust boundaries and sandboxed operation. Features real-time state analysis, sandboxed subprocess management, and static tool-access token verification.",
      githubUrl: "https://github.com/Av7danger",
      demoUrl: "https://github.com/Av7danger",
    },
    {
      title: "Qwen3.5 Abliteration Research",
      technologies: ["PyTorch", "Transformer Lens", "Mechanistic Interpretability", "Activation Patching"],
      summary: "Researching model abliteration on Qwen-3.5 models. We map steering and guardrail activation spaces, applying targeted weight corrections to bypass alignment guardrails while preserving mathematical reasoning and cognitive performance. Weights published to Hugging Face.",
      githubUrl: "https://github.com/Av7danger",
      demoUrl: "https://huggingface.co/AV07/Qwen3.5-abliteratedink",
    },
    {
      title: "SecNode",
      technologies: ["Golang", "gRPC", "eBPF", "Isolation Boundaries"],
      summary: "A distributed system node controller designed for executing untrusted autonomous agent workloads. SecNode implements eBPF socket filters and minimal kernel cgroups to contain agent tool calls and restrict outbound traffic dynamically.",
      githubUrl: "https://github.com/Av7danger",
    },
    {
      title: "API Pentester",
      technologies: ["Python", "GraphQL", "REST", "Fuzzing"],
      summary: "An automated security scanner optimized for auditing trust-boundary drift and authorization bypasses across large REST and GraphQL microservice meshes. Implements intelligent token shifting and schema introspection diagnostics.",
      githubUrl: "https://github.com/Av7danger",
    },
    {
      title: "AI Security Labs",
      technologies: ["React", "TypeScript", "FastAPI", "Docker Sandbox"],
      summary: "A Capture-the-Flag (CTF) playground designed to train software engineers on secure autonomous agent development. Features vulnerable agent scenarios, prompt injections, and container breakout targets.",
      githubUrl: "https://github.com/Av7danger",
    },
  ];

  return (
    <div className="space-y-12 animate-fade-in">
      
      {/* Page Title */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Projects
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider">
          Systems Engineering // Production Tools
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            technologies={project.technologies}
            summary={project.summary}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </section>

    </div>
  );
}
