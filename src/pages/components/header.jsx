import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("introduction");


  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
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

  function handleNavClick(id) {
    setActive(id);
    setMobileMenu(false);
  }

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-indigo-600">Carla Rocha</h2>

        {/* Ícone do menu mobile */}
        <div
          className="sm:hidden cursor-pointer text-indigo-700 p-2 hover:bg-indigo-100 rounded-full transition-all duration-300"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <Menu className="size-8" />
        </div>

        {/* Menu mobile */}
        <nav
          className={`sm:hidden fixed left-0 top-0 w-full h-screen bg-indigo-50 z-40 transition-all duration-500 ${mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >

          <X onClick={() => {
            setMobileMenu(!mobileMenu)
          }} className="text-indigo-700 size-8 absolute right-8 top-6"/>
          <ul className="flex flex-col items-center justify-center h-full gap-10 text-zinc-700 text-2xl font-medium">
            <li>
              <a
                href="#introduction"
                onClick={() => handleNavClick("introduction")}
                className={active === "introduction" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Introdução
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleNavClick("about")}
                className={active === "about" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Sobre mim
              </a>
            </li>
            <li>
              <a
                href="#future"
                onClick={() => handleNavClick("future")}
                className={active === "future" ? "text-orange-500" : "hover:text-indigo-700"}
              >
                Perspectiva e Futuro
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu desktop */}
        <nav className="hidden sm:flex">
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
  );
}
