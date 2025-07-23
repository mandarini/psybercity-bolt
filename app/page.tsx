import { Code, Heart, Mountain, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import RotatingCube from "@/components/RotatingCube";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] text-center">
      <div className="mb-8">
        <RotatingCube />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Hello, I&apos;m <span className="text-primary">Katerina</span>
      </h1>

      <div className="mt-6 space-y-4 text-lg leading-8 text-muted-foreground max-w-2xl">
        <p>I like web, I like code and I like talking about all this.</p>

        <p className="inline-flex items-center gap-2 justify-center flex-wrap">
          <Code className="h-5 w-5 text-secondary shrink-0" />
          <span>
            Client library engineer at{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              Supabase
            </a>
            ,{" "}
            <a
              href="https://g.dev/katerina"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              GDE
            </a>
            , co-founder of{" "}
            <a
              href="https://www.meetup.com/angular-athens/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              AngularAthens
            </a>{" "}
            meetup, and WTM Ambassador.
          </span>
        </p>

        <p className="flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-accent" />
          Unhealthily obsessed with cats, oats, honey and cocoa.
        </p>

        <p className="flex items-center justify-center gap-2">
          <Mountain className="h-5 w-5 text-secondary" />
          Walking, hiking, mountains and the sea.
        </p>

        <p className="flex items-center justify-center gap-2">
          <Coffee className="h-5 w-5 text-accent" />
          Known on the internetz as: mandarini, psybercity, pakotinia.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/cv">
          <Button className="bg-primary hover:bg-primary/90">
            View my work
            <Code className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
