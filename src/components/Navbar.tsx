import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoEmblem from "@/assets/logo-emblem.jpg";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Brands", href: "#brands" },
  { label: "Showcase", href: "#showcase" },
  { label: "About", href: "#about" },
];

const Navbar = ({ visible }: { visible: boolean }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <button onClick={() => handleClick("#hero")} className="flex items-center gap-3 group">
              <img
                src={logoEmblem}
                alt="TOBAMINE"
                className="w-8 h-8 rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <span className="font-display text-lg tracking-[0.2em] text-gold-gradient hidden sm:inline">
                TOBAMINE
              </span>
            </button>

            <ul className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="font-body text-xs sm:text-sm tracking-[0.15em] uppercase px-3 py-2 rounded-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-3/4"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
