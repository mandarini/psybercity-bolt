import { Github, Twitter, Linkedin, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} katerina's little corner of the internet
          </p>
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/mandarini"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link 
              href="https://twitter.com/psybercity"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="https://linkedin.com/in/katerinaskroumpelou"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="https://pakotinia.medium.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <BookOpen className="h-5 w-5" />
              <span className="sr-only">Medium</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}