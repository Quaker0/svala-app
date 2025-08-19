"use client";
import { FadeInP } from "../FadeIn";

export default function AboutSection() {
  return (
    <section id="about" className="h-screen w-full bg-[#E6F4FF] snap-start">
      <div className="h-full w-full flex flex-wrap sm:gap-40 items-center justify-center xl:justify-between text-center px-6 sm:px-16">
        <FadeInP>
          We design and ship robust software tailored to your business goals,
          with clear communication and fast iterations from day one.
        </FadeInP>
        <FadeInP>
          From product discovery to launch and beyond, we build maintainable
          systems that scale with your team and evolving requirements.
        </FadeInP>
      </div>
    </section>
  );
}
