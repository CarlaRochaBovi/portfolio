import { useEffect, useState } from "react";

export default function Header() {

  const [active, setActive] = useState("introduction");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "0px",

        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);




  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-indigo-600">Carla Rocha</h2>

        <nav>
          <ul className="flex gap-6 text-zinc-700 text-sm font-medium">
            <li>
              <a
                href="#introduction"
                className={active === "introduction" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Introdução
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={active === "about" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#future"
                className={active === "future" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Perspectiva e Futuro
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
