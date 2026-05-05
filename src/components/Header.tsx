"use client";
import { useState } from "react";
import { Button } from "./Button";
import { Navbar } from "./Navbar";
import { PiList } from "react-icons/pi";
import { SheetMenu } from "./SheetMenu";

export function Header() {
  const [isSheetMenuOpen, setIsSheetMenuOpen] = useState<boolean>(false);

  function openSheetMenu() {
    setIsSheetMenuOpen(true);
  }

  function closeSheetMenu() {
    setIsSheetMenuOpen(false);
  }
  return (
    <header className="fixed w-full uppercase px-14 border-b border-white/10 h-20 flex justify-between items-center bg-[#131319]">
      <div>
        <h2 className="text-2xl text-[#C799FF] font-bold">
          {" "}
          &lt;CARLA.PORTFOLIO/&gt;{" "}
        </h2>
      </div>

      {isSheetMenuOpen && <SheetMenu closeSheetMenu={closeSheetMenu} />}

      <div className=" items-center hidden lg:flex justify-center w-full">
        <Navbar />
        <Button variant="primary" size="minimum">
          Contate-me
        </Button>
      </div>

      <Button onClick={openSheetMenu} variant="iconOnly" size="fit">
        <PiList className="text-[#C799FF] block lg:hidden" size={40} />
      </Button>
    </header>
  );
}
