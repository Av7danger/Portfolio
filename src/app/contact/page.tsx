import { Mail, Github, Linkedin, Twitter, ArrowUpRight, Terminal } from "lucide-react";

export default function Contact() {
  const contacts = [
    {
      name: "Email (Primary)",
      value: "anishvarma.ava@gmail.com",
      href: "mailto:anishvarma.ava@gmail.com",
      icon: <Mail className="w-5 h-5 text-neutral-400" />
    },
    {
      name: "GitHub",
      value: "github.com/Av7danger",
      href: "https://github.com/Av7danger",
      icon: <Github className="w-5 h-5 text-neutral-400" />
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/danishvarma",
      href: "https://linkedin.com/in/danishvarma",
      icon: <Linkedin className="w-5 h-5 text-neutral-400" />
    },
    {
      name: "X / Twitter",
      value: "x.com/Av7danger",
      href: "https://x.com/Av7danger",
      icon: <Twitter className="w-5 h-5 text-neutral-400" />
    }
  ];

  return (
    <div className="space-y-12 max-w-2xl mx-auto mt-8 sm:mt-16 animate-fade-in">
      
      {/* Page Title */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          Contact
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>Secure Interconnects</span>
        </p>
      </section>

      {/* Intro descriptive text */}
      <section className="text-neutral-300 space-y-4 leading-relaxed font-sans text-[15px] sm:text-[16px]">
        <p>
          I am always open to discussing whitebox vulnerability audits, security boundaries engineering, AI safety research collaborations, or speaking engagements.
        </p>
        <p>
          For general queries, business proposals, or coordinated disclosure reports, please reach out via email or connect with me on LinkedIn and GitHub.
        </p>
      </section>

      {/* Grid of contact coordinates */}
      <section className="space-y-4">
        {contacts.map((contact) => (
          <a
            key={contact.name}
            href={contact.href}
            target={contact.name === "Email (Primary)" ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-5 border border-neutral-900 bg-[#030303] hover:border-neutral-800 transition-colors rounded-sm font-mono text-xs sm:text-sm"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 border border-neutral-900 rounded-sm bg-[#070707] group-hover:border-neutral-800 transition-colors">
                {contact.icon}
              </div>
              <div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                  {contact.name}
                </div>
                <div className="text-neutral-200 group-hover:text-white transition-colors mt-0.5">
                  {contact.value}
                </div>
              </div>
            </div>
            
            <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-300 transition-colors mr-2" />
          </a>
        ))}

        {/* Hugging Face specialized handle */}
        <div className="p-5 border border-neutral-900 bg-[#030303] rounded-sm font-mono text-xs sm:text-sm flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 border border-neutral-900 rounded-sm bg-[#070707] text-neutral-400 font-bold">
              HF
            </div>
            <div>
              <div className="text-[10px] text-neutral-500 uppercase tracking-wider">
                Hugging Face (Model Weights)
              </div>
              <a 
                href="https://huggingface.co/AV07/Qwen3.5-abliteratedink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white transition-colors hover:underline mt-0.5 block"
              >
                huggingface.co/AV07
              </a>
            </div>
          </div>
          <a 
            href="https://huggingface.co/AV07/Qwen3.5-abliteratedink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-300 mr-2"
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

    </div>
  );
}
