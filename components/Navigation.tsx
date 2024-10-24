"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon, Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Navigation() {
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();

  const links = [
    { href: "/", label: "Home" },
    { href: "/cv", label: "CV" },
    { href: "/talks", label: "Talks" },
    { href: "/random", label: "Random" },
  ];

  return (
    <nav className="border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Cat className="h-5 w-5 text-primary group-hover:text-secondary transition-colors duration-200" />
              <span className="font-medium group-hover:text-secondary transition-colors duration-200">Portfolio</span>
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm transition-colors hover:text-accent",
                  pathname === href
                    ? "text-secondary font-medium"
                    : "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            ))}
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:text-accent"
          >
            <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}