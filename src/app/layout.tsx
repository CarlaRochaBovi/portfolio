import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PiList } from "react-icons/pi";
import { Header } from "@/components/Header";

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
      <body className="relative bg-[#131319] text-[#ABA9BE] flex flex-col">
        <Header />

        <main className="px-14 pt-0 flex flex-col flex-1">{children}</main>

        <footer className="w-full border-t-2 border-white/10 p-4 flex bg-[#131319]">
          <p className="text-center">Carla Rocha Bovi - Portfólio</p>
        </footer>
      </body>
    </html>
  );
}
