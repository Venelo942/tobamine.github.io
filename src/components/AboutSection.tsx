import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, hsla(43, 72%, 55%, 0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          className="w-12 h-px bg-gold-gradient mx-auto mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.p
          className="font-body text-xs tracking-[0.5em] text-muted-foreground uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The Empire
        </motion.p>

        <motion.h2
          className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.1em] text-gold-gradient mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Beyond Luxury
        </motion.h2>

        <motion.p
          className="font-display text-lg md:text-xl font-light leading-relaxed text-foreground/80 italic mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          TOBAMINE Empire doesn't follow trends — it sets the standard.
          A constellation of brands united by an unwavering commitment to
          perfection, each one a masterwork of vision and craft.
        </motion.p>

        <motion.p
          className="font-body text-sm text-muted-foreground font-light leading-relaxed max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          viewport={{ once: true }}
        >
          From the roar of LUPUS hypercars to the quiet elegance of a GEOCOCCYX pen,
          every creation embodies power, precision, and an enduring legacy.
        </motion.p>

        <motion.div
          className="w-12 h-px bg-gold-gradient mx-auto mt-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
