import ExtraTastesCard from "./components/extra-tastes-card";
import FamilyCard from "./components/family-card";
import TastesCard from "./components/tastes-card";

export default function AboutPage() {
   return (
      <section id="about" className="h-full min-h-screen flex flex-col items-center gap-10 justify-start my-20 p-10">
         <FamilyCard />
         <TastesCard />
         <ExtraTastesCard />
      </section>

   )
}