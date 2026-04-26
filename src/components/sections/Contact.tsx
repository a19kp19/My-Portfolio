import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

export function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <Section id="contact" className="max-w-2xl mx-auto text-center py-32 border-t border-white/10 mt-20">
      <div className="font-mono text-primary mb-4">05. What's Next?</div>
      <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
      <p className="text-muted-foreground text-lg mb-10">
        Currently looking for new opportunities, internships, and connections. Whether you have a question or just want to say hi, my inbox is always open.
      </p>
      <Button asChild size="lg" className="h-14 px-8 font-mono text-base border-primary text-primary hover:bg-primary/10" variant="outline">
        <a href={`mailto:${personalInfo.email}`}>
          Say Hello
        </a>
      </Button>
    </Section>
  );
}
