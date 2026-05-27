import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { codeToHtml } from "shiki";
import { Mermaid } from "./Mermaid";
import { CopyButton } from "./CopyButton";
import { ShieldAlert, Info, AlertTriangle, Lightbulb, Link as LinkIcon } from "lucide-react";
import remarkGfm from "remark-gfm";

// Helper to generate anchor-friendly slug from text
function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// Reusable premium classified callout React components
export function ThreatModel({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Threat Model
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function KeyObservation({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Key Observation
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function Important({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Important Advisory
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function FailurePattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Failure Pattern Analysis
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function DefensiveInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Defensive Insight
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function ExperimentalFinding({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 border-l-amber-500/60 bg-[#060606] rounded-sm font-sans">
      <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
        // Experimental Finding
      </div>
      <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
        {children}
      </div>
    </div>
  );
}

export function SystemSnapshot({ target, failure, impact }: { target: string; failure: string; impact: string }) {
  return (
    <div className="my-10 border border-neutral-900 bg-[#040404] p-5 sm:p-6 rounded-sm font-mono text-[11px] max-w-xl relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-amber-500/60" />
      <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3.5 border-b border-neutral-950 pb-2.5 font-bold select-none">
        // System Vulnerability Snapshot
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[9px] mb-1 select-none">Target Layer</span>
          <span className="text-neutral-200 font-semibold">{target}</span>
        </div>
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[9px] mb-1 select-none">Failure Class</span>
          <span className="text-neutral-200 font-semibold">{failure}</span>
        </div>
        <div>
          <span className="text-neutral-600 block uppercase tracking-wider text-[9px] mb-1 select-none">Impact Scope</span>
          <span className="text-amber-500/90 font-bold">{impact}</span>
        </div>
      </div>
    </div>
  );
}

// Shiki compile-time high-fidelity syntax highlighter
async function CodeHighlight({ code, lang }: { code: string; lang: string }) {
  try {
    const html = await codeToHtml(code, {
      lang,
      theme: "github-dark-dimmed", // Highly readable, low-noise dark theme
    });
    
    return (
      <div className="relative group my-10">
        <CopyButton text={code} />
        <div 
          className="shiki-container text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed border border-neutral-900 bg-[#030303] rounded-sm py-4 px-1"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  } catch (error) {
    console.error("Shiki highlighting failed:", error);
    return (
      <div className="relative group my-10">
        <CopyButton text={code} />
        <pre className="p-4 overflow-x-auto border border-neutral-900 bg-[#030303] text-neutral-300 font-mono text-xs rounded-sm whitespace-pre">
          <code>{code}</code>
        </pre>
      </div>
    );
  }
}

// Custom components list to override standard MDX rendering
const components = {
  // Reusable React MDX layout registry
  ThreatModel,
  KeyObservation,
  Important,
  FailurePattern,
  DefensiveInsight,
  ExperimentalFinding,
  SystemSnapshot,

  // Headings with modern Space Grotesk display fonts, auto-slugified anchors, and deep links
  h1: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h1 
        id={id} 
        className="scroll-mt-24 text-3xl font-semibold tracking-tight font-display text-neutral-100 mt-16 mb-6 border-b border-neutral-900 pb-2 group flex items-center justify-between" 
        {...props}
      >
        <a href={`#${id}`} className="hover:text-white transition-colors">
          {children}
        </a>
        <a 
          href={`#${id}`} 
          className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity text-neutral-600 hover:text-amber-500/90 select-none mr-2"
          title="Deep link to section"
        >
          <LinkIcon className="w-4 h-4" />
        </a>
      </h1>
    );
  },
  h2: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h2 
        id={id} 
        className="scroll-mt-24 text-2xl font-semibold tracking-tight font-display text-neutral-200 mt-14 mb-4 group flex items-center justify-between" 
        {...props}
      >
        <a href={`#${id}`} className="hover:text-white transition-colors">
          {children}
        </a>
        <a 
          href={`#${id}`} 
          className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity text-neutral-600 hover:text-amber-500/90 select-none mr-2"
          title="Deep link to section"
        >
          <LinkIcon className="w-3.5 h-3.5" />
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h3 
        id={id} 
        className="scroll-mt-24 text-xl font-medium tracking-tight font-display text-neutral-300 mt-10 mb-3 group flex items-center justify-between" 
        {...props}
      >
        <span>{children}</span>
        <a 
          href={`#${id}`} 
          className="opacity-0 group-hover:opacity-60 hover:opacity-100 transition-opacity text-neutral-600 hover:text-amber-500/90 select-none mr-2"
          title="Deep link to section"
        >
          <LinkIcon className="w-3.5 h-3.5" />
        </a>
      </h3>
    );
  },
  p: (props: any) => <p className="leading-relaxed text-neutral-300 mt-0 mb-6 font-sans text-[15px] sm:text-[16px]" {...props} />,
  
  // Clean markdown links
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && href.startsWith("/");
    if (isInternal) {
      return (
        <a href={href} className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-800 hover:decoration-white transition-all font-medium" {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-800 hover:decoration-white transition-all font-medium" {...props}>
        {children}
      </a>
    );
  },

  // Technical whitepaper-grade tables with scroll container for responsive styling
  table: (props: any) => (
    <div className="my-10 overflow-x-auto rounded-sm border border-neutral-900 bg-[#030303] scrollbar-thin scrollbar-track-black scrollbar-thumb-neutral-900 shadow-sm">
      <table className="w-full min-w-[600px] text-left border-collapse font-mono text-xs sm:text-sm text-neutral-400" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="border-b border-neutral-900 bg-[#050505] text-neutral-200 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-neutral-900/60" {...props} />,
  tr: (props: any) => <tr className="hover:bg-neutral-900/20 hover:text-neutral-200 transition-colors duration-150" {...props} />,
  th: (props: any) => <th className="px-4 py-3.5 font-medium border-r border-neutral-900 last:border-r-0" {...props} />,
  td: (props: any) => <td className="px-4 py-3 leading-relaxed border-r border-neutral-900 last:border-r-0" {...props} />,

  // Intercept blockquotes to render alert callouts (e.g. [!NOTE])
  blockquote: ({ children }: any) => {
    // Inspect children to check if it's a GitHub Alert
    let textContent = "";
    
    // Attempt to extract plain string contents recursively
    const extractText = (node: any): string => {
      if (typeof node === "string") return node;
      if (Array.isArray(node)) return node.map(extractText).join("");
      if (node?.props?.children) return extractText(node.props.children);
      return "";
    };

    textContent = extractText(children).trim();

    const alertMatch = textContent.match(/^\[!(NOTE|WARNING|TIP|IMPORTANT|THREAT_MODEL|THREAT\s+MODEL|KEY_OBSERVATION|KEY\s+OBSERVATION|FAILURE_PATTERN|FAILURE\s+PATTERN|DEFENSIVE_INSIGHT|DEFENSIVE\s+INSIGHT|EXPERIMENTAL_FINDING|EXPERIMENTAL\s+FINDING)\]/i);

    if (alertMatch) {
      const matchedTag = alertMatch[1].toUpperCase().replace(/\s+/g, "_");
      
      let title = "Document Note";
      let accentClass = "border-l-amber-500/60";

      switch (matchedTag) {
        case "THREAT_MODEL":
          title = "Threat Model";
          break;
        case "KEY_OBSERVATION":
          title = "Key Observation";
          break;
        case "IMPORTANT":
          title = "Important Advisory";
          break;
        case "FAILURE_PATTERN":
          title = "Failure Pattern Analysis";
          break;
        case "DEFENSIVE_INSIGHT":
          title = "Defensive Insight";
          break;
        case "EXPERIMENTAL_FINDING":
          title = "Experimental Finding";
          break;
        case "NOTE":
          title = "Document Note";
          break;
        case "WARNING":
          title = "Security Warning";
          break;
        case "TIP":
          title = "Strategic Tip";
          break;
      }

      // Remove the [!TAG] prefix from content
      const regex = /^\[!(NOTE|WARNING|TIP|IMPORTANT|THREAT_MODEL|THREAT\s+MODEL|KEY_OBSERVATION|KEY\s+OBSERVATION|FAILURE_PATTERN|FAILURE\s+PATTERN|DEFENSIVE_INSIGHT|DEFENSIVE\s+INSIGHT|EXPERIMENTAL_FINDING|EXPERIMENTAL\s+FINDING)\]\s*/i;
      
      const stripPrefix = (node: any): any => {
        if (typeof node === "string") {
          return node.replace(regex, "");
        }
        if (Array.isArray(node)) {
          return node.map((c, i) => (i === 0 ? stripPrefix(c) : c));
        }
        if (node?.props?.children) {
          return React.cloneElement(node, {
            children: stripPrefix(node.props.children),
          });
        }
        return node;
      };

      const cleanedChildren = stripPrefix(children);

      return (
        <div className={`my-10 p-5 sm:p-6 border border-neutral-900 border-l-2 ${accentClass} bg-[#060606] rounded-sm font-sans`}>
          <div className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2.5 select-none">
            // {title}
          </div>
          <div className="text-[14px] sm:text-[15px] leading-relaxed text-neutral-300">
            {cleanedChildren}
          </div>
        </div>
      );
    }

    return (
      <blockquote className="pl-4 border-l-2 border-neutral-800 italic text-neutral-400 my-10 font-sans leading-relaxed">
        {children}
      </blockquote>
    );
  },

  // Overriding standard code elements for code blocks (using Shiki) or inline code
  pre: ({ children }: any) => {
    // If the child is code block, we just return the child directly, removing duplicate pre wraps
    return <>{children}</>;
  },

  code: async ({ children, className, ...props }: any) => {
    const codeText = String(children).trim();
    const match = /language-(\w+)/.exec(className || "");
    const lang = match ? match[1] : "";

    // If it's a code block (has language class)
    if (lang) {
      if (lang === "mermaid") {
        return <Mermaid chart={codeText} />;
      }
      return <CodeHighlight code={codeText} lang={lang} />;
    }

    // Otherwise, inline code snippet
    return (
      <code 
        className="px-1.5 py-0.5 rounded-[3px] bg-[#0a0a0a] border border-neutral-900 text-amber-500/80 font-mono text-[0.85em]" 
        {...props}
      >
        {children}
      </code>
    );
  },

  // Unordered list
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2.5 text-neutral-300 font-sans text-[15px] sm:text-[16px]" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2.5 text-neutral-300 font-sans text-[15px] sm:text-[16px]" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
};

interface CustomMDXProps {
  source: string;
}

export function CustomMDX({ source }: CustomMDXProps) {
  return (
    <div className="prose prose-invert max-w-none">
      {/* MDXRemote parses and renders fully statically during next export */}
      <MDXRemote 
        source={source} 
        components={components} 
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
          }
        }}
      />
    </div>
  );
}
