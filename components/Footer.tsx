import Link from "next/link";
import {
  siGithub,
  siX,
  siLinkedin,
  siMedium,
  siBluesky,
} from "simple-icons/icons";

export default function Footer() {
  return (
    <footer className="border-t border-primary/20 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} katerina&apos;s little corner of the
            internet
          </p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/mandarini"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siGithub.path} />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/psybercity"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siX.path} />
              </svg>
              <span className="sr-only">X</span>
            </Link>
            <Link
              href="https://linkedin.com/in/katerinaskroumpelou"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siLinkedin.path} />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://pakotinia.medium.com"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siMedium.path} />
              </svg>
              <span className="sr-only">Medium</span>
            </Link>
            <Link
              href="https://bsky.app/profile/psyber.city"
              className="text-muted-foreground hover:text-accent transition-colors duration-200"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d={siBluesky.path} />
              </svg>
              <span className="sr-only">Bluesky</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
