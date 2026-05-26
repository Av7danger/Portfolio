import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-900 bg-[#030303] py-12 px-6 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-mono text-neutral-500">
        
        {/* Author copyrights */}
        <div className="text-center md:text-left">
          <span>&copy; {currentYear} Anish Varma. All rights reserved.</span>
          <span className="block text-[11px] text-neutral-600 mt-1 uppercase tracking-wider">
            Independent AI/ML &amp; Systems Security Research
          </span>
        </div>

        {/* Footer social connects */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Av7danger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/danishvarma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/Av7danger"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors"
            aria-label="X/Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="mailto:anishvarma.ava@gmail.com"
            className="hover:text-neutral-300 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://huggingface.co/AV07/Qwen3.5-abliteratedink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-300 transition-colors text-xs font-bold font-mono tracking-tighter"
            aria-label="Hugging Face Models"
          >
            HF
          </a>
        </div>

        {/* Framework tech stack labels */}
        <div className="text-center md:text-right text-[11px] text-neutral-600 uppercase tracking-widest">
          <span>Static // Next.js + Tailwind</span>
        </div>

      </div>
    </footer>
  );
}
