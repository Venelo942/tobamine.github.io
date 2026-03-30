import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative py-20 px-6 border-t border-border/30">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3
          className="font-display text-2xl tracking-[0.3em] text-gold-gradient mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          TOBAMINE
        </motion.h3>
        <p className="font-body text-xs tracking-[0.3em] text-muted-foreground uppercase">
          Empire
        </p>
        <div className="w-8 h-px bg-gold-gradient mx-auto my-8" />
        <p className="font-body text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} TOBAMINE Empire. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
