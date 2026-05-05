import { PiX } from "react-icons/pi";
import { Button } from "./Button";
import { Navbar } from "./Navbar";

interface SheetMenuProps {
  closeSheetMenu: () => void;
}

export function SheetMenu({ closeSheetMenu }: SheetMenuProps) {
  return (
    <div className="fixed bg-[#131319]/95 backdrop-blur-sm flex w-full h-full justify-center items-center z-[9999] inset-0">
      <Button className="absolute top-10 right-10" onClick={closeSheetMenu} variant="iconOnly" size="fit">
        <PiX size={40} />
      </Button>
      <Navbar />
    </div>
  );
}
