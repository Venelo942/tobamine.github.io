import { useState } from "react";
import CinematicIntro from "@/components/CinematicIntro";
import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative bg-background min-h-screen">
      <CinematicIntro show={showIntro} onComplete={() => setShowIntro(false)} />
      <Navbar visible={!showIntro} />
      <ParticleField />

      <main className="relative z-20">
        <HeroSection />
        <BrandsSection />
        <ShowcaseSection />
        <AboutSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
