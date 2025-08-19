"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeInP({
  children,
  duration = 1.2,
}: {
  children: ReactNode;
  duration?: number;
}) {
  return (
    <motion.p
      className="max-w-md text-base sm:text-xl leading-relaxed text-[#0a2540]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}
