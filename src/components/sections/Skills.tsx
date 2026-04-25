import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SiHtml5, SiCss, SiJavascript, SiMysql, SiC, SiCplusplus, SiPython } from "react-icons/si";

const skillIcons: Record<string, any> = {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiC,
  SiCplusplus,
  SiPython
};

export function Skills() {
  const { skills } = portfolioData;

  return (
    <Section id="skills" className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold font-mono"><span className="text-primary">02.</span> Skills</h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill.icon] || Code2;
          return (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 bg-card border border-white/5 rounded-lg hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)] transition-all group"
            >
              <Icon className="w-10 h-10 mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="font-mono text-sm font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
