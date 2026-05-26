import { Shield, Brain, Terminal, Cpu } from "lucide-react";

export default function About() {
  const researchAreas = [
    {
      title: "1. AI/ML Security Research",
      icon: <Brain className="w-5 h-5 text-neutral-400" />,
      description: "Researching alignment behavior, refusal localization, mechanistic interpretability, and autonomous AI-agent security. Built and published Qwen3.5 alignment abliteration research artifacts using activation tracing and low-rank weight-space analysis."
    },
    {
      title: "2. Offensive Security & Whitebox Analysis",
      icon: <Shield className="w-5 h-5 text-neutral-400" />,
      description: "Conducting whitebox security research across distributed systems, application security, parser logic, and trust-boundary enforcement. Building deterministic PoCs and security labs focused on semantic drift, orchestration failures, and authorization inconsistencies."
    },
    {
      title: "3. Autonomous Security Systems",
      icon: <Cpu className="w-5 h-5 text-neutral-400" />,
      description: "Building autonomous offensive-security infrastructure and multi-agent workflows at SecNode. Working on orchestration pipelines involving LangGraph, Model Context Protocol (MCP) integrations, and adaptive multi-model routing."
    },
    {
      title: "4. Coordinated Vulnerability Disclosure",
      icon: <Terminal className="w-5 h-5 text-neutral-400" />,
      description: "Participating in coordinated vulnerability disclosure involving AI-agent systems, parser vulnerabilities, multi-tenant architectures, and application security. Submitted reports through programs including NASA's Vulnerability Disclosure Program via Bugcrowd."
    }
  ];

  return (
    <div className="space-y-16 animate-fade-in max-w-4xl mx-auto font-sans">
      
      {/* 1. Page Header */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-white font-display border-b border-neutral-900 pb-3">
          About
        </h1>
        <p className="text-neutral-400 font-mono text-xs uppercase tracking-wider">
          Systems Mindset // Security Research
        </p>
      </section>

      {/* 2. Understated, Highly Credible Narrative Profile */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-neutral-300 leading-relaxed text-[15px] sm:text-[16px]">
          <p>
            I am a security researcher and founding engineer focused on AI/ML systems, offensive security, and trust-boundary analysis.
          </p>
          <p>
            My work centers on understanding how modern autonomous systems fail across model behavior, agent orchestration, parser logic, and distributed infrastructure. I approach AI systems not as abstract black boxes, but as complex stateful environments with real security assumptions, attack surfaces, and architectural weaknesses.
          </p>
          <p>
            I spend most of my time building research labs, developing deterministic PoCs, analyzing alignment behavior, and studying how subtle systems assumptions evolve into real-world security impact.
          </p>
          <p>
            Whether researching alignment abliteration techniques, auditing multi-agent workflows, or analyzing semantic trust-boundary drift in distributed applications, I focus on technically rigorous and transparent security research.
          </p>
        </div>
        
        {/* Grounded & Truthful Toolbox */}
        <div className="p-6 border border-neutral-900 bg-[#030303] rounded-sm h-fit space-y-5 text-xs font-mono text-neutral-400">
          <div className="text-neutral-200 font-semibold uppercase tracking-wider border-b border-neutral-900 pb-2">
            Research Toolbox
          </div>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Models</span>
              <span className="text-neutral-300 block">Qwen, Llama, Mistral</span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Libraries</span>
              <span className="text-neutral-300 block">PyTorch, Transformers, LangChain, LangGraph, Hugging Face</span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Security</span>
              <span className="text-neutral-300 block">Burp Suite, Whitebox Pentesting, Threat Modeling, OWASP</span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-neutral-500 block uppercase tracking-wider text-[10px]">Infrastructure</span>
              <span className="text-neutral-300 block">Python, Docker, FastAPI, Linux, Git</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Research Interests List */}
      <section className="space-y-4 border-t border-neutral-900 pt-10">
        <h2 className="text-xl font-bold tracking-tight text-white font-display">
          Core Research Interests
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-xs text-neutral-300">
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>AI/LLM Security</span>
          </div>
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Mechanistic Interpretability</span>
          </div>
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Autonomous Agent Systems</span>
          </div>
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Trust-Boundary Failures</span>
          </div>
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Parser &amp; Application Security</span>
          </div>
          <div className="p-3 border border-neutral-900 bg-[#030303] rounded-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
            <span>Offensive Security Research</span>
          </div>
        </div>
      </section>

      {/* 4. Research Areas & Ongoing Work */}
      <section className="space-y-6 border-t border-neutral-900 pt-10">
        <h2 className="text-xl font-bold tracking-tight text-white font-display">
          Research Areas &amp; Ongoing Work
        </h2>
        
        <div className="space-y-6">
          {researchAreas.map((area) => (
            <div 
              key={area.title} 
              className="p-6 border border-neutral-900 bg-[#030303] rounded-sm flex gap-4 transition-colors hover:border-neutral-800 duration-200"
            >
              <div className="flex-shrink-0 mt-1.5 p-2 border border-neutral-900 rounded bg-[#070707] text-neutral-400 h-fit">
                {area.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-semibold text-neutral-100 font-display">
                  {area.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
