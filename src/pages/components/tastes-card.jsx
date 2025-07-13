export default function TastesCard() {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_3px_1fr] gap-10 max-sm:gap-5 w-full max-w-5xl bg-white p-6 sm:p-10 rounded-lg shadow-lg border border-zinc-200">
         <h1 className="col-span-full text-2xl sm:text-4xl font-bold text-indigo-700 text-center sm:text-start">
            Atividades que...
         </h1>

         <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-indigo-700 mb-4">Gosto</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-lg text-neutral-700 marker:text-orange-500">
               <li>Desenvolver aplicações</li>
               <li>Ler</li>
               <li>Ouvir música</li>
               <li>Assistir anime</li>
            </ul>
         </div>

         <div className="hidden sm:block w-[3px] bg-gradient-to-b from-orange-400 to-indigo-700 rounded-full self-stretch" />

         <div>
            <h2 className="text-lg sm:text-2xl font-semibold text-indigo-700 mb-4">Não gosto</h2>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-lg text-neutral-700 marker:text-orange-500">
               <li>Ser interrompida enquanto estou concentrada</li>
               <li>Convivência com pessoas que não demonstram empatia</li>
               <li>Falta de interesse por debates construtivos</li>
            </ul>
         </div>
      </div>


   );
}
