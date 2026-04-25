import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <span className="font-mono">
      {displayedText}
      <span className="animate-pulse text-primary">_</span>
    </span>
  );
};

export function Hero() {
  const { personalInfo, skills } = portfolioData;

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center max-w-4xl mx-auto">
      <div className="space-y-6">
        <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-sm font-mono text-primary text-sm mb-4">
          Status: Active & Learning
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-muted-foreground font-mono text-2xl md:text-4xl block mb-2">{">"} whoami</span>
          <TypewriterText text={`Hi, I'm ${personalInfo.name}`} />
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-4 font-light">
          {personalInfo.title}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Button asChild size="lg" className="font-mono group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#projects">
              <Code2 className="mr-2 w-4 h-4" />
              View Projects
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-mono border-white/10 hover:bg-white/5 hover:text-white">
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 w-4 h-4" />
              Contact Me
            </a>
          </Button>
        </div>

        {/* Quick Stats Terminal */}
        <div className="mt-16 p-4 rounded-md bg-black/50 border border-white/10 font-mono text-sm max-w-lg shadow-xl shadow-black/50">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-primary/80"></div>
          </div>
          <div className="text-muted-foreground">
            <span className="text-primary">$</span> cat info.json
          </div>
          <div className="mt-2 pl-4 text-green-400">
            &#123;<br/>
            &nbsp;&nbsp;"location": "{personalInfo.location}",<br/>
            &nbsp;&nbsp;"school": "{personalInfo.school}",<br/>
            &nbsp;&nbsp;"skills_count": {skills.length}<br/>
            &#125;
          </div>
        </div>
      </div>
    </section>
  );
}
