import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

// Change metadata later

export const metadata: Metadata = {
  title: "Carla Rocha Bovi - Portfólio",
  description: "Conheça meus projetos de desenvolvimento web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.className} min-h-screen antialiased`}
    >
      <body className="bg-[#131319] text-[#ABA9BE] flex flex-col">
        <header className="w-full px-14 border-b border-white/10 h-18 grid grid-cols-3 items-center bg-[#131319]">
          <h2 className="text-2xl text-[#C799FF] font-bold">
            {" "}
            &lt;CARLA.PORTFOLIO/&gt;{" "}
          </h2>

          {/* add section navigation highlight later */}
          <nav className="text-md gap-6 lg:gap-10 flex justify-center">
            <Link
              className="text-[#ABA9BE]/70 font-medium hover:text-[#C799FF]"
              href="/"
            >
              Início
            </Link>
            <Link
              className="text-[#ABA9BE]/70 font-medium hover:text-[#C799FF]"
              href="/"
            >
              Projetos
            </Link>

            <Link
              className="text-[#ABA9BE]/70 font-medium hover:text-[#C799FF]"
              href="/"
            >
              Contato
            </Link>
          </nav>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 rounded-xs text-[#131319] font-semibold bg-[#C799FF] hover:brightness-85 duration-150 transition cursor-pointer"
            >
              Contate-me
            </button>
          </div>
        </header>

        <main className="px-14 flex flex-col flex-1">{children}</main>

        <footer className="w-full border-t-2 border-white/10 p-4 flex bg-[#131319]">
          <p className="text-center">Carla Rocha Bovi - Portfólio</p>
        </footer>
      </body>
    </html>
  );
}
