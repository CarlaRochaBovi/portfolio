export default function FamilyCard() {
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl bg-white p-10 rounded-lg shadow-lg border border-zinc-200">
         <div className="space-y-4">
            <h1 className="text-4xl font-bold text-indigo-700">Histórico familiar</h1>
            <p className="text-lg text-zinc-700 leading-relaxed">
               Moro em <span className="text-orange-500 font-semibold">Nova Independência</span>, com minha mãe e minha avó, pai falecido.
               Sou filha única e cresci em um ambiente familiar <span className="italic">afetuoso e acolhedor</span>.
            </p>
            <p className="text-lg text-zinc-600 italic leading-relaxed">
               “Como minha mãe sempre diz: Se você já tem o
               <span className="text-orange-500 font-semibold"> não</span>, então vá atrás do
               <span className="text-orange-500 font-semibold"> sim</span>.”
            </p>
         </div>
         <div className="flex items-center justify-center">
            <img src="/family.svg" alt="Família" className="w-60 h-auto opacity-80" />
         </div>
      </div>
   )
}