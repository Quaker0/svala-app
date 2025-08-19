"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen grid items-center justify-items-center p-8 pb-20 gap-16 md:p-20 snap-start"
    >
      <div className="gap-[32px]">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center pt-40">
            <h1 className="font-title font-bold text-center leading-[1.1em] z-60 text-5xl md:text-7xl">
              SVALA
              <br />
              CONSULTING
            </h1>
          </div>
          <div className="font-sans">Agile Software Development</div>
        </div>
      </div>
    </section>
  );
}
