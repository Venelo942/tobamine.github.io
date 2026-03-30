import { motion } from "framer-motion";
import logoEmblem from "@/assets/logo-emblem.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 30%, hsla(43, 72%, 55%, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.img
          src={logoEmblem}
          alt="TOBAMINE Empire"
          className="w-24 h-24 md:w-32 md:h-32 object-contain rounded-full mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        <motion.h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-gold-gradient"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
        >
          TOBAMINE
        </motion.h1>

        <motion.div
          className="w-24 h-px bg-gold-gradient my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="font-display text-xl md:text-2xl lg:text-3xl font-light tracking-[0.3em] text-foreground italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          Power. Precision. Legacy.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent mx-auto animate-pulse-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
