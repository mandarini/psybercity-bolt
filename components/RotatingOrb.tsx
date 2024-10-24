"use client";

import { Cat } from "lucide-react";

export default function RotatingOrb() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-transparent animate-float">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-secondary/20 to-transparent animate-float-reverse" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center animate-bounce-slow">
        <Cat className="h-12 w-12 text-primary" />
      </div>
    </div>
  );
}