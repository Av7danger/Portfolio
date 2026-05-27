"use client";

import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 rounded-sm bg-[#070707] border border-neutral-900 text-neutral-500 hover:text-neutral-200 hover:border-neutral-800 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-200 z-20 cursor-pointer"
      title="Copy code to clipboard"
      aria-label="Copy code to clipboard"
    >
      {copied ? (
        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
      ) : (
        <Clipboard className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
      )}
    </button>
  );
}
