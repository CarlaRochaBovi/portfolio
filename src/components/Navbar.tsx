"use client";
import { useState, useEffect } from "react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }),
      { threshold: 0.5 },
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // further note above about IntersectionObserver

  const navItems = [
    {
      id: "home",
      href: "/#home",
      label: "Início",
    },
    {
      id: "stacks",
      href: "/#stacks",
      label: "Stacks",
    },
    {
      id: "projects",
      href: "/#projects",
      label: "Projetos",
    },
  ];

  return (
    <nav className="text-4xl gap-20 lg:gap-10 lg:flex-1 flex flex-col lg:flex-row items-center justify-center">
      {navItems.map((item) => (
        <a
          key={item.id}
          className={`font-medium ${activeSection === item.id ? "text-[#C799FF]" : "text-[#ABA9BE]/70 hover:text-[#C799FF]"}`}
          href={item.href}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
