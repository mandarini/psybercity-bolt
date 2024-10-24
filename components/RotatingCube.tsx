"use client";

import { Cat } from "lucide-react";

export default function RotatingCube() {
  return (
    <div className="relative w-32 h-32 perspective-1000px">
      <div className="relative w-full h-full transform-style-preserve-3d animate-spin-slow">
        {/* Cube faces */}
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform translate-z-16" />
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform -translate-z-16 rotate-y-180" />
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform translate-x-16 rotate-y-90" />
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform -translate-x-16 -rotate-y-90" />
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform translate-y-16 rotate-x-90" />
        <div className="absolute inset-0 w-full h-full border border-primary/20 bg-primary/5 transform -translate-y-16 -rotate-x-90" />
        
        {/* Centered cat icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Cat className="h-12 w-12 text-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}