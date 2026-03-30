import { motion } from "framer-motion";
import lupusCar from "@/assets/lupus-car.jpg";
import irisaPerfumeWoman from "@/assets/irisa-perfume-woman.jpg";
import geococcyxPenBox from "@/assets/geococcyx-pen-box.jpg";

const brands = [
  {
    name: "LUPUS",
    subtitle: "Hypercars",
    description: "Where raw power meets sculptural precision.",
    image: lupusCar,
  },
  {
    name: "IRISA",
    subtitle: "Fragrance",
    description: "The essence of mystery, bottled.",
    image: irisaPerfumeWoman,
  },
  {
    name: "GEOCOCCYX",
    subtitle: "Writing Instruments",
    description: "Every stroke, an act of legacy.",
    image: geococcyxPenBox,
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="relative py-32 px-6">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="font-body text-xs tracking-[0.5em] text-muted-foreground uppercase mb-4">
          The Collection
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.15em] text-gold-gradient">
          Three Pillars of Excellence
        </h2>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {brands.map((brand, i) => (
          <motion.div
            key={brand.name}
            className="group relative overflow-hidden cursor-pointer bg-card rounded-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <motion.img
                src={brand.image}
                alt={brand.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Gold glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: "radial-gradient(ellipse at 50% 80%, hsla(43, 72%, 55%, 0.1) 0%, transparent 60%)",
                }}
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-body text-[10px] tracking-[0.4em] text-primary/60 uppercase mb-2">
                {brand.subtitle}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-light tracking-[0.2em] text-gold-gradient mb-3">
                {brand.name}
              </h3>
              <div className="w-8 h-px bg-gold-gradient mb-4 transition-all duration-500 group-hover:w-16" />
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                {brand.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
