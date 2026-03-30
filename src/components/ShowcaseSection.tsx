import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import lupusCar from "@/assets/lupus-car.jpg";
import irisaPerfumeMan from "@/assets/irisa-perfume-man.jpg";
import irisaWatch from "@/assets/irisa-watch.png";
import geococcyxPenOpen from "@/assets/geococcyx-pen-open.png";
import geococcyxModel from "@/assets/geococcyx-model.jpg";

const showcaseItems = [
  { image: lupusCar, title: "LUPUS Hypercar", aspect: "aspect-[16/9]" },
  { image: irisaPerfumeMan, title: "IRISA Pour Homme", aspect: "aspect-[3/4]" },
  { image: irisaWatch, title: "IRISA Timepiece", aspect: "aspect-[16/9]" },
  { image: geococcyxPenOpen, title: "GEOCOCCYX Executive", aspect: "aspect-[16/9]" },
  { image: geococcyxModel, title: "GEOCOCCYX Ambassador", aspect: "aspect-[3/4]" },
];

const ShowcaseSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="showcase" ref={containerRef} className="relative py-32 px-6 overflow-hidden">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-xs tracking-[0.5em] text-muted-foreground uppercase mb-4">
          Craftsmanship
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-gold-gradient">
          The Art of Detail
        </h2>
      </motion.div>

      <motion.div className="max-w-6xl mx-auto space-y-16" style={{ y }}>
        {/* Row 1: Full width */}
        <motion.div
          className="overflow-hidden rounded-sm"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className={`${showcaseItems[0].aspect} overflow-hidden`}>
            <img
              src={showcaseItems[0].image}
              alt={showcaseItems[0].title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
        </motion.div>

        {/* Row 2: Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseItems.slice(1, 3).map((item, i) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 3: Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcaseItems.slice(3, 5).map((item, i) => (
            <motion.div
              key={item.title}
              className="overflow-hidden rounded-sm"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;
