import { motion } from "framer-motion";

export const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
  <motion.section 
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`py-20 md:py-32 ${className}`}
  >
    {children}
  </motion.section>
);
