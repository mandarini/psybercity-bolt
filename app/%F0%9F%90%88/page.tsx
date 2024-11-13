import { Cat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CatPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center gap-6">
      <Cat className="h-16 w-16 text-primary animate-bounce" />
      <h1 className="text-4xl font-bold">You found the secret cat page!</h1>
      <p className="text-muted-foreground text-lg">Time to go back home...</p>
      <Link href="/">
        <Button className="bg-primary hover:bg-primary/90">Take me home</Button>
      </Link>
    </div>
  );
}
