import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { codeToHtml } from "shiki";
import { Mermaid } from "./Mermaid";
import { ShieldAlert, Info, AlertTriangle, Lightbulb } from "lucide-react";

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

// Shiki compile-time high-fidelity syntax highlighter
async function CodeHighlight({ code, lang }: { code: string; lang: string }) {
  try {
    const html = await codeToHtml(code, {
      lang,
      theme: "github-dark-dimmed", // Highly readable, low-noise dark theme
    });
    
    return (
      <div 
        className="shiki-container text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed my-6 border border-neutral-900 bg-[#030303] rounded-sm py-4 px-1"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  } catch (error) {
    console.error("Shiki highlighting failed:", error);
    return (
      <pre className="p-4 my-6 overflow-x-auto border border-neutral-900 bg-[#030303] text-neutral-300 font-mono text-xs rounded-sm whitespace-pre">
        <code>{code}</code>
      </pre>
    );
  }
}

// Custom components list to override standard MDX rendering
const components = {
  // Headings with modern Space Grotesk display fonts and auto-slugified anchors
  h1: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h1 
        id={id} 
        className="scroll-mt-24 text-3xl font-semibold tracking-tight font-display text-neutral-100 mt-12 mb-6 border-b border-neutral-900 pb-2 group" 
        {...props}
      >
        <a href={`#${id}`} className="hover:underline flex items-center gap-2">
          {children}
        </a>
      </h1>
    );
  },
  h2: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h2 
        id={id} 
        className="scroll-mt-24 text-2xl font-semibold tracking-tight font-display text-neutral-200 mt-10 mb-4 group" 
        {...props}
      >
        <a href={`#${id}`} className="hover:underline">
          {children}
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }: any) => {
    const id = slugify(String(children));
    return (
      <h3 
        id={id} 
        className="scroll-mt-24 text-xl font-medium tracking-tight font-display text-neutral-300 mt-8 mb-3" 
        {...props}
      >
        {children}
      </h3>
    );
  },
  p: (props: any) => <p className="leading-relaxed text-neutral-300 mt-0 mb-6 font-sans text-[15px] sm:text-[16px]" {...props} />,
  
  // Clean markdown links
  a: ({ href, children, ...props }: any) => {
    const isInternal = href && href.startsWith("/");
    if (isInternal) {
      return (
        <a href={href} className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-all font-medium" {...props}>
          {children}
        </a>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-white transition-all font-medium" {...props}>
        {children}
      </a>
    );
  },

  // Technical whitepaper-grade tables
  table: (props: any) => (
    <div className="overflow-x-auto my-8 border border-neutral-900 rounded-sm">
      <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm text-neutral-300 bg-[#030303]" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="border-b border-neutral-800 bg-[#070707] text-neutral-400 font-semibold" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-neutral-900" {...props} />,
  tr: (props: any) => <tr className="hover:bg-[#070707]/30 transition-colors" {...props} />,
  th: (props: any) => <th className="p-3 font-medium uppercase tracking-wider text-[11px]" {...props} />,
  td: (props: any) => <td className="p-3" {...props} />,

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

    const isNote = textContent.startsWith("[!NOTE]");
    const isWarning = textContent.startsWith("[!WARNING]");
    const isTip = textContent.startsWith("[!TIP]");
    const isImportant = textContent.startsWith("[!IMPORTANT]");

    if (isNote || isWarning || isTip || isImportant) {
      let type: "note" | "warning" | "tip" | "important" = "note";
      let icon = <Info className="w-4 h-4 text-blue-400" />;
      let title = "Note";
      let borderClass = "border-blue-900/50 bg-blue-950/5";
      let textClass = "text-blue-200/90";

      if (isWarning) {
        type = "warning";
        icon = <AlertTriangle className="w-4 h-4 text-amber-500" />;
        title = "Warning";
        borderClass = "border-amber-900/50 bg-amber-950/5";
        textClass = "text-amber-200/90";
      } else if (isTip) {
        type = "tip";
        icon = <Lightbulb className="w-4 h-4 text-emerald-400" />;
        title = "Tip";
        borderClass = "border-emerald-900/50 bg-emerald-950/5";
        textClass = "text-emerald-200/90";
      } else if (isImportant) {
        type = "important";
        icon = <ShieldAlert className="w-4 h-4 text-purple-400" />;
        title = "Important";
        borderClass = "border-purple-900/50 bg-purple-950/5";
        textClass = "text-purple-200/90";
      }

      // Remove the [!TAG] prefix from content
      const regex = /^\[!(NOTE|WARNING|TIP|IMPORTANT)\]\s*/i;
      
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
        <div className={`my-6 p-4 border rounded-sm ${borderClass} flex gap-3 text-sm`}>
          <div className="flex-shrink-0 mt-0.5">{icon}</div>
          <div className="flex-1">
            <div className="font-semibold text-neutral-200 mb-1 flex items-center gap-1.5 uppercase text-xs tracking-wider">
              {title}
            </div>
            <div className={textClass}>{cleanedChildren}</div>
          </div>
        </div>
      );
    }

    return (
      <blockquote className="pl-4 border-l-2 border-neutral-700 italic text-neutral-400 my-6 font-sans">
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
        className="px-1.5 py-0.5 rounded-sm bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-[0.875em]" 
        {...props}
      >
        {children}
      </code>
    );
  },

  // Unordered list
  ul: (props: any) => <ul className="list-disc pl-6 mb-6 space-y-2 text-neutral-300 font-sans text-[15px]" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-neutral-300 font-sans text-[15px]" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
};

interface CustomMDXProps {
  source: string;
}

export function CustomMDX({ source }: CustomMDXProps) {
  return (
    <div className="prose prose-invert max-w-none">
      {/* MDXRemote parses and renders fully statically during next export */}
      <MDXRemote source={source} components={components} />
    </div>
  );
}
