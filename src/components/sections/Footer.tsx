import { portfolioData } from "@/data/portfolio";
import { Github, Mail } from "lucide-react";

export function Footer() {
  const { personalInfo } = portfolioData;

  return (
    <footer className="border-t border-white/10 bg-black/20 py-8 text-center mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-mono text-muted-foreground">
          Built by {personalInfo.name} &copy; {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
