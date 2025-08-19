"use client";
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";

type NavItem = {
  id: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: "hero", label: "Svala Consulting" },
  { id: "about", label: "About Us" },
  { id: "expertise", label: "Expertise" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const root = document.getElementById("scroll-container");
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        });
      },
      {
        root,
        threshold: 0.5,
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick =
    (id: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

  return (
    <nav className="fixed top-4 right-4 z-50 text-[#0a2540]">
      <ul className="flex flex-col items-end gap-2">
        {navItems.map((item) => (
          <li key={item.id} className="flex">
            {activeId === item.id && (
              <Image
                src="/svala.webp"
                width={20}
                height={20}
                alt="Svala Consulting logo nav bar indicator"
                className="invert h-[20px] w-[20px]"
                priority
              />
            )}
            <button
              onClick={handleClick(item.id)}
              className={`text-sm md:text-base hover:opacity-80 ${
                activeId === item.id ? "font-bold" : "font-normal"
              }`}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
