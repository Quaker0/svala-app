"use client";

import Image from "next/image";

type ContactSectionProps = {
  linkedinUrl: string;
  email: string;
};

export default function ContactSection({
  linkedinUrl,
  email,
}: ContactSectionProps) {
  return (
    <section id="contact" className="h-screen w-full snap-start">
      <div className="h-full w-full flex flex-col items-center justify-center gap-6 px-6 sm:px-16 text-center text-[#0a2540] pt-50">
        <Image
          src="/me.jpg"
          alt="Profile photo"
          width={160}
          height={160}
          className="rounded-full h-[120px] w-[120px] sm:h-[160px] sm:w-[160px] object-cover"
          priority={false}
        />
        <h2 className="text-xl sm:text-2xl font-bold">Reach out to me</h2>
        <div>
          <strong>Niclas Bångman</strong>
          <p>Founder and Developer</p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            LinkedIn
          </a>
          <a href={`mailto:${email}`} className="underline hover:opacity-80">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
