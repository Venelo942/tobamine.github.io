import { motion, AnimatePresence } from "framer-motion";
import logoEmblem from "@/assets/logo-emblem.jpg";

interface CinematicIntroProps {
  onComplete: () => void;
  show: boolean;
}

const CinematicIntro = ({ onComplete, show }: CinematicIntroProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Glow behind logo */}
            <motion.div
              className="absolute w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, hsla(43, 72%, 55%, 0.2) 0%, transparent 70%)",
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0, 1, 0.6], scale: [0.5, 1.3, 1.1] }}
              transition={{ duration: 3, ease: "easeOut" }}
            />

            {/* Logo */}
            <motion.img
              src={logoEmblem}
              alt="TOBAMINE Empire"
              className="w-32 h-32 md:w-40 md:h-40 object-contain relative z-10 rounded-full"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />

            {/* Brand name */}
            <motion.h1
              className="font-display text-3xl md:text-5xl font-light tracking-[0.4em] mt-8 text-gold-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            >
              TOBAMINE
            </motion.h1>

            <motion.div
              className="w-16 h-px bg-gold-gradient mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />

            <motion.p
              className="font-body text-xs tracking-[0.5em] text-muted-foreground mt-4 uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.3 }}
            >
              Empire
            </motion.p>

            {/* Auto-transition */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
              onAnimationComplete={onComplete}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CinematicIntro;
