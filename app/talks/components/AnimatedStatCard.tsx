"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface AnimatedStatCardProps {
  icon: LucideIcon;
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

export const AnimatedStatCard = ({
  icon: Icon,
  value,
  suffix = "",
  label,
  duration = 2000,
}: AnimatedStatCardProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration, isVisible]);

  return (
    <Card 
      ref={cardRef}
      className="overflow-hidden group hover:bg-secondary/5 transition-all duration-300 hover:shadow-lg"
    >
      <CardHeader className="space-y-0 pb-2">
        <CardTitle className="text-sm text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tabular-nums">
            {count.toLocaleString()}
            {suffix}
          </div>
          <Icon className="h-4 w-4 text-secondary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </CardContent>
    </Card>
  );
}; 