"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyCitationProps {
  citationKey: string;
  title: string;
  author: string;
  year: string;
  url: string;
}

export function CopyCitation({ citationKey, title, author, year, url }: CopyCitationProps) {
  const [copiedBib, setCopiedBib] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const bibtex = `@misc{${citationKey},
  author = {${author}},
  title = {${title}},
  year = {${year}},
  howpublished = {\\url{${url}}},
  note = {Accessed: ${new Date().getFullYear()}}
}`;

  const plaintext = `${author}. "${title}." (${year}). Available at: ${url}`;

  const copyToClipboard = (text: string, type: "bib" | "text") => {
    navigator.clipboard.writeText(text);
    if (type === "bib") {
      setCopiedBib(true);
      setTimeout(() => setCopiedBib(false), 2000);
    } else {
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 2000);
    }
  };

  return (
    <div className="mt-12 p-6 border border-neutral-800 bg-[#070707] rounded-sm text-sm font-mono text-neutral-400">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
        <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wider">
          Cite this Research
        </span>
      </div>

      {/* BibTeX citation */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-neutral-500">BibTeX Format</span>
          <button
            onClick={() => copyToClipboard(bibtex, "bib")}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#fafafa] transition-colors py-1 px-2 border border-neutral-800 rounded bg-[#0a0a0a]"
          >
            {copiedBib ? (
              <>
                <Check className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy BibTeX</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-3 bg-[#030303] border border-neutral-900 rounded-sm text-xs text-neutral-300 overflow-x-auto select-all leading-relaxed whitespace-pre font-mono">
          {bibtex}
        </pre>
      </div>

      {/* Standard Text citation */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-neutral-500">Standard Reference</span>
          <button
            onClick={() => copyToClipboard(plaintext, "text")}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-[#fafafa] transition-colors py-1 px-2 border border-neutral-800 rounded bg-[#0a0a0a]"
          >
            {copiedText ? (
              <>
                <Check className="w-3 h-3 text-green-400" />
                <span className="text-green-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy Reference</span>
              </>
            )}
          </button>
        </div>
        <div className="p-3 bg-[#030303] border border-neutral-900 rounded-sm text-xs text-neutral-300 select-all leading-relaxed font-mono">
          {plaintext}
        </div>
      </div>
    </div>
  );
}
