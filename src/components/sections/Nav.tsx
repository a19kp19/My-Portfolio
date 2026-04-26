import { Terminal } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-primary font-bold text-lg flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <span>~/portfolio</span>
        </div>
        <nav className="hidden md:flex gap-6 font-mono text-sm">
          <a href="#about" className="hover:text-primary transition-colors">./about</a>
          <a href="#skills" className="hover:text-primary transition-colors">./skills</a>
          <a href="#projects" className="hover:text-primary transition-colors">./projects</a>
          <a href="#certs" className="hover:text-primary transition-colors">./certs</a>
          <a href="#contact" className="hover:text-primary transition-colors">./contact</a>
        </nav>
      </div>
    </header>
  );
}
