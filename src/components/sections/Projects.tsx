import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Terminal, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <Section id="projects" className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold font-mono"><span className="text-primary">03.</span> Projects</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="bg-card border-white/10 h-full flex flex-col hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Terminal className="w-8 h-8 text-primary" />
                  <Badge variant="secondary" className="font-mono bg-primary/10 text-primary hover:bg-primary/20 border-0">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow text-muted-foreground">
                <p>{project.description}</p>
              </CardContent>
              <CardFooter className="flex-col items-start gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 w-full pt-4 border-t border-white/5">
                  {project.repo ? (
                    <a href={project.repo} target="_blank" rel="noreferrer" className="text-sm font-mono flex items-center gap-2 hover:text-primary transition-colors z-10">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  ) : (
                    <span className="text-sm font-mono flex items-center gap-2 text-muted-foreground/50 cursor-not-allowed" title="Source on request">
                      <Github className="w-4 h-4" /> Code
                    </span>
                  )}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
