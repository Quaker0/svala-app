import { motion } from "framer-motion";
import { Ref } from "react";

const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "AWS",
  "Cloud Development",
  "Microservices",
  "Docker",
  "Web Development",
  "Next.js",
  "React",
  "Node.js",
  "CI/CD",
  "Testing",
  "AI Agents",
];

type ExpertiseSectionProps = {
  ref: Ref<HTMLElement>;
};

export default function ExpertiseSection({ ref }: ExpertiseSectionProps) {
  return (
    <section
      id="expertise"
      ref={ref}
      className="h-screen w-full bg-[#E6F4FF] snap-start"
    >
      <div className="h-full w-full flex flex-col items-center justify-center px-6 sm:px-16">
        <motion.h2
          className="text-2xl sm:text-4xl font-bold text-[#0a2540]"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Expertise
        </motion.h2>
        <motion.ul
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl"
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.li
              key={skill}
              className="px-4 py-2 rounded-full bg-white/80 text-[#0a2540] text-sm sm:text-base shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              viewport={{ amount: 0.2 }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
