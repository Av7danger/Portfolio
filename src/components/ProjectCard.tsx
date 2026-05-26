import { Github, ExternalLink, Cpu } from "lucide-react";

interface ProjectCardProps {
  title: string;
  technologies: string[];
  summary: string;
  githubUrl: string;
  demoUrl?: string;
}

export function ProjectCard({ title, technologies, summary, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <div className="group border border-neutral-900 bg-[#030303] hover:border-neutral-700/80 transition-all duration-300 p-6 rounded-sm flex flex-col justify-between h-full">
      <div>
        {/* Header decoration */}
        <div className="flex items-center gap-2 pb-3 border-b border-neutral-900 mb-4 text-xs font-mono text-neutral-500">
          <Cpu className="w-3.5 h-3.5 text-neutral-600 group-hover:text-neutral-400 transition-colors" />
          <span className="uppercase tracking-widest text-[9px] font-bold">Systems Project</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold tracking-tight text-neutral-100 group-hover:text-white transition-colors font-display">
          {title}
        </h3>

        {/* Project Description */}
        <p className="text-neutral-400 text-[13px] sm:text-sm mt-3 leading-relaxed font-sans">
          {summary}
        </p>
      </div>

      <div className="mt-6">
        {/* Monospace Tech Badge lists */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono bg-neutral-950 text-neutral-400 border border-neutral-900 px-2 py-0.5 rounded-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action button grids */}
        <div className="flex items-center gap-3 border-t border-neutral-900 pt-4 font-mono text-xs">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors py-1.5 px-3 border border-neutral-800 rounded-sm bg-[#0a0a0a]"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
          
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors py-1.5 px-3 border border-neutral-800 rounded-sm bg-neutral-900/60 font-semibold"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Technical Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
