export default function TastesCard() {
   return (
      <div className="grid grid-cols-[1fr_3px_1fr] gap-10 w-full max-w-5xl bg-white p-10 rounded-lg shadow-lg border border-zinc-200">
         <h1 className="col-span-3 text-4xl font-bold text-indigo-700 text-start">
            Atividades que...
         </h1>

         {/* Gosto */}
         <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Gosto</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 marker:text-orange-500">
               <li>Desenvolver aplicações</li>
               <li>Ler</li>
               <li>Ouvir música</li>
               <li>Assistir anime</li>
            </ul>
         </div>

         {/* Divider */}
         <div className="w-[3px] bg-gradient-to-b from-orange-400 to-indigo-700 rounded-full self-stretch" />

         {/* Não gosto */}
         <div>
            <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Não gosto</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-neutral-700 marker:text-orange-500">
               <li>Ser interrompida enquanto estou concentrada em uma atividade</li>
               <li>Convivência com pessoas que não demonstram empatia ou respeito pelo próximo</li>
               <li>Falta de interesse por debates construtivos ou por diferentes pontos de vista</li>
            </ul>
         </div>
      </div>

   );
}
