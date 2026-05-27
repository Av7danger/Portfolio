"use client";

import { useEffect, useState } from "react";

interface MetadataProps {
  date: string;
  lastUpdated?: string;
  status?: string;
  readingTime: string;
}

export function ResearchMetadata({ date, lastUpdated, status, readingTime }: MetadataProps) {
  const [relativeUpdated, setRelativeUpdated] = useState<string>("");

  const formatPublishDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    } catch {
      return dateStr;
    }
  };

  const formatStandardDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return dateStr;
    }
  };

  useEffect(() => {
    if (!lastUpdated) return;

    const calculateRelative = () => {
      try {
        const updatedDate = new Date(lastUpdated);
        const now = new Date();
        
        // Zero out times for date-only comparison
        const d1 = new Date(updatedDate.getFullYear(), updatedDate.getMonth(), updatedDate.getDate());
        const d2 = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        
        const diffTime = d2.getTime() - d1.getTime();
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
          setRelativeUpdated("today");
        } else if (diffDays === 1) {
          setRelativeUpdated("yesterday");
        } else if (diffDays > 0 && diffDays < 30) {
          setRelativeUpdated(`${diffDays} days ago`);
        } else {
          setRelativeUpdated(formatStandardDate(lastUpdated));
        }
      } catch {
        setRelativeUpdated(formatStandardDate(lastUpdated));
      }
    };

    calculateRelative();
  }, [lastUpdated]);

  return (
    <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 pt-2 font-mono text-[10px] sm:text-[11px] text-neutral-400">
      <div className="flex items-center gap-1.5">
        <span className="text-neutral-600 uppercase tracking-wider">Published</span>
        <span className="text-neutral-200">{formatPublishDate(date)}</span>
      </div>
      {lastUpdated && (
        <>
          <span className="text-neutral-800 select-none">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-neutral-600 uppercase tracking-wider">Updated</span>
            <span className="text-neutral-200">{relativeUpdated || formatStandardDate(lastUpdated)}</span>
          </div>
        </>
      )}
      <span className="text-neutral-800 select-none">•</span>
      <div className="flex items-center gap-1.5">
        <span className="text-neutral-600 uppercase tracking-wider">Status</span>
        <span className="text-amber-500/90 font-medium">{status || "Published"}</span>
      </div>
      <span className="text-neutral-800 select-none">•</span>
      <div className="flex items-center gap-1.5">
        <span className="text-neutral-600 uppercase tracking-wider">Interval</span>
        <span className="text-neutral-200">{readingTime}</span>
      </div>
    </div>
  );
}
