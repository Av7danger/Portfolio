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
          theme: "base",
          securityLevel: "loose",
          themeVariables: {
            background: "#030303",
            primaryColor: "#060606",
            primaryTextColor: "#fafafa",
            primaryBorderColor: "#402008", // subtle dark amber border
            lineColor: "#78350f", // subtle amber line/edge accent
            secondaryColor: "#060606",
            tertiaryColor: "#0a0a0a",
            edgeLabelBackground: "#030303",
            fontFamily: "var(--font-mono), ui-monospace, monospace",
            fontSize: "11px",
            // Notes & Actors styling for sequence diagrams
            noteBkgColor: "#060606",
            noteBorderColor: "#78350f",
            noteTextColor: "#fafafa",
            actorBkg: "#060606",
            actorBorder: "#78350f",
            actorTextColor: "#fafafa",
            signalColor: "#78350f",
            signalTextColor: "#e5e5e5",
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
      <div className="my-10 p-5 border border-red-950 bg-red-950/10 text-red-500 rounded-sm text-xs font-mono">
        <p className="font-semibold mb-1">Architecture Diagram Error:</p>
        <pre className="overflow-x-auto whitespace-pre-wrap">{error}</pre>
      </div>
    );
  }

  if (!svg) {
    return (
      <div className="my-10 flex items-center justify-center p-8 border border-neutral-900 bg-[#070707] rounded-sm animate-pulse">
        <span className="text-xs font-mono text-neutral-500">
          Synthesizing architectural diagram...
        </span>
      </div>
    );
  }

  return (
    <div 
      className="mermaid-chart" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
