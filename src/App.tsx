import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-sans flex flex-col">
      <Nav />

      <main className="container mx-auto px-6 pt-16 flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* Floating Back to Top */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button 
              variant="outline" 
              size="icon" 
              className="fixed bottom-8 right-8 rounded-full border-white/10 bg-background/50 backdrop-blur-md hover:border-primary/50 text-muted-foreground hover:text-primary z-50 shadow-lg"
              onClick={scrollToTop}
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left" className="font-mono text-xs">
            Scroll to top
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
