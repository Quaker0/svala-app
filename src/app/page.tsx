"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useArrowNavigation } from "./hooks/useArrowNavigation";
import ExpertiseSection from "./sections/ExpertiseSection";
import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import NavBar, { navItems } from "./sections/NavBar";
import ContactSection from "./sections/ContactSection";
import GlobeSection from "./sections/GlobeSection";

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: expertiseRef,
    container: mainRef,
    offset: ["start end", "start start"],
  });
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useArrowNavigation(
    mainRef.current,
    navItems.map((item) => item.id)
  );

  return (
    <main
      ref={mainRef}
      id="scroll-container"
      className="font-sans h-screen overflow-y-auto snap-y snap-mandatory relative"
    >
      <motion.div
        className="pointer-events-none fixed inset-0 flex items-center justify-center mt-[-4rem] md:pt-15 z-50"
        style={{ y: logoY, scale: logoScale }}
      >
        <Image
          src="/svala.webp"
          alt="Svala Consulting logo"
          width={150}
          height={150}
          className="h-[100px] w-[100px] md:h-[150px] md:w-[150px]"
          priority
        />
      </motion.div>
      <NavBar />

      <HeroSection />
      <AboutSection />
      <GlobeSection />
      <ExpertiseSection ref={expertiseRef} />
      <ContactSection
        linkedinUrl="https://www.linkedin.com/in/niclasbman"
        email="niclas@svalaconsulting.com"
      />
    </main>
  );
}
