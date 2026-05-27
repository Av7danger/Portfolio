import Link from "next/link";
import { Terminal, ShieldAlert, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center space-y-8 font-mono max-w-md mx-auto px-4 select-none">
      
      {/* 404 secure block */}
      <div className="w-full p-6 sm:p-8 border border-neutral-900 bg-[#060606] rounded-sm relative text-left">
        <div className="absolute left-0 top-0 h-full w-[2px] bg-amber-500/60" />
        
        <div className="flex items-center gap-2 text-amber-500/80 mb-4">
          <ShieldAlert className="w-5 h-5 flex-shrink-0" />
          <span className="text-[10px] tracking-widest uppercase font-bold">Secure Zone boundary</span>
        </div>

        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-widest uppercase mb-3">
          404 // BOUNDARY REFUSAL
        </h1>

        <p className="text-neutral-400 text-xs leading-relaxed font-sans font-medium">
          The requested document route or network index is not currently indexed at this coordinate. The credentials or route schema failed authority canonicalization checks.
        </p>

        <div className="border-t border-neutral-900/60 mt-6 pt-4 flex flex-col gap-1.5 text-[9px] text-neutral-500 uppercase tracking-widest">
          <div>Refusal Status: ROUTE_RESOLVE_FAILURE</div>
          <div>Origin Host: av7danger.dev</div>
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <div className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          <span>Connection Status: Sandboxed &amp; Monitored</span>
        </div>

        <Link
          href="/"
          className="flex items-center gap-2 border border-neutral-900 hover:border-neutral-800 bg-[#030303] text-neutral-400 hover:text-white px-5 py-2.5 rounded-sm text-xs transition-colors font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Base Coordinates</span>
        </Link>
      </div>

    </div>
  );
}
