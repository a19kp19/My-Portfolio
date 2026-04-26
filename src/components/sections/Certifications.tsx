import { portfolioData } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Award, ExternalLink, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Certifications() {
  const { certifications } = portfolioData;
  const [openImage, setOpenImage] = useState<string | null>(null);
  const [openTitle, setOpenTitle] = useState<string>("");

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <Section id="certs" className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold font-mono">
          <span className="text-primary">04.</span> Certifications
        </h2>
        <div className="h-[1px] flex-grow bg-white/10"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="h-full"
          >
            <Card className="bg-card border-white/10 h-full flex flex-col hover:border-primary/50 transition-colors group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors"></div>

              {cert.image ? (
                <button
                  type="button"
                  onClick={() => {
                    setOpenImage(cert.image);
                    setOpenTitle(cert.title);
                  }}
                  className="relative z-10 block w-full aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/30"
                  aria-label={`View certificate: ${cert.title}`}
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ) : null}

              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <Award className="w-8 h-8 text-primary" />
                  <span className="font-mono text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-grow text-muted-foreground">
                <p className="font-mono text-sm">
                  <span className="text-primary/80">issuer:</span> {cert.issuer}
                </p>
              </CardContent>

              <CardFooter className="flex flex-wrap gap-3 pt-4 border-t border-white/5">
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() => {
                      setOpenImage(cert.image);
                      setOpenTitle(cert.title);
                    }}
                    className="relative z-10 inline-flex items-center gap-2 rounded-md border border-primary/60 bg-primary/10 px-4 py-2 text-sm font-mono font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95"
                  >
                    <ImageIcon className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                ) : null}

                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="relative z-10 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-mono font-semibold text-foreground transition-all hover:border-primary/60 hover:text-primary active:scale-95"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                ) : null}

                {!cert.image && !cert.verifyUrl ? (
                  <span className="text-xs font-mono text-muted-foreground/60 italic">
                    Certificate file coming soon
                  </span>
                ) : null}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={openImage !== null} onOpenChange={(open) => !open && setOpenImage(null)}>
        <DialogContent className="max-w-4xl bg-card border-white/10 p-2">
          <DialogTitle className="sr-only">{openTitle}</DialogTitle>
          {openImage ? (
            <img
              src={openImage}
              alt={openTitle}
              className="w-full h-auto rounded"
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
