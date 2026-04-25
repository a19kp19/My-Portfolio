import { portfolioData } from "@/data/portfolio";
import { MapPin, GraduationCap, Terminal } from "lucide-react";
import { Section } from "@/components/ui/Section";

export function About() {
  const { personalInfo } = portfolioData;

  return (
    <Section id="about" className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold font-mono"><span className="text-primary">01.</span> About Me</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            Hello! My name is {personalInfo.name.split(" ")[0]} and I enjoy creating things that live on the internet. My interest in web development and programming started recently as I began my journey at University.
          </p>
          <p>
            Currently, I'm a 1st year BSIT student at <span className="text-foreground font-medium">{personalInfo.school}</span>, focusing on building a strong foundation in computer science and modern web technologies.
          </p>
          <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3 text-sm font-mono text-foreground">
              <GraduationCap className="text-primary w-5 h-5" />
              {personalInfo.school}
            </div>
            <div className="flex items-center gap-3 text-sm font-mono text-foreground">
              <MapPin className="text-primary w-5 h-5" />
              {personalInfo.location}
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded border border-primary/50 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative bg-card border border-white/10 p-8 rounded h-full flex items-center justify-center min-h-[300px] z-10 backdrop-blur-sm">
            <Terminal className="w-24 h-24 text-primary/30" />
            <div className="absolute bottom-4 right-4 text-xs font-mono text-muted-foreground">user@local:~</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
