"use client";
import { FadeInP } from "../FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen w-full bg-[#E6F4FF] snap-start">
      <div className="h-full w-full flex flex-wrap sm:gap-40 items-center justify-center xl:justify-between text-center px-6 sm:px-16">
        <FadeInP>
          Starting with a Swedish developer following the sun to South Africa,
          much like a Swallow or "Svala" in Swedish.
        </FadeInP>
        <FadeInP>
          With deep experience in building websites, developing SaaS products
          and building resilient, horizontally scaling services.
        </FadeInP>
      </div>
    </section>
  );
}
