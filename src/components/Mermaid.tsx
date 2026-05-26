"use client";

import { useEffect, useState } from "react";

interface MermaidProps {
  chart: string;
}

let chartCounter = 0;

export function Mermaid({ chart }: MermaidProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    
    const renderChart = async () => {
      try {
        const mermaid = (await import("mermaid")).default;
        
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          themeVariables: {
            background: "#030303",
            primaryColor: "#0a0a0a",
            primaryTextColor: "#fafafa",
            lineColor: "#525252",
            secondaryColor: "#171717",
            tertiaryColor: "#1f1f1f",
            edgeLabelBackground: "#050505",
          },
        });

        const uniqueId = `mermaid-canvas-${chartCounter++}`;
        const { svg: renderedSvg } = await mermaid.render(uniqueId, chart);
        
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (err: any) {
        console.error("Mermaid compilation error:", err);
        if (isMounted) {
          setError(err.message || "Failed to render technical diagram");
        }
      }
    };

    renderChart();

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="my-6 p-4 border border-red-950 bg-red-950/10 text-red-500 rounded-sm text-xs font-mono">
        <p className="font-semibold mb-1">Architecture Diagram Error:</p>
        <pre className="overflow-x-auto whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-6 flex items-center justify-center p-8 border border-neutral-900 bg-[#070707] rounded-sm animate-pulse">
        <span className="text-xs font-mono text-neutral-500">
          Synthesizing architectural diagram...
        </span>
      </div>
    );
  }

  return (
    <div 
      className="my-6 p-6 border border-neutral-900 bg-[#030303] rounded-sm overflow-x-auto flex justify-center items-center text-[#f5f5f5]" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
