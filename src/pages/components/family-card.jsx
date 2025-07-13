import dadAndMe from '../../assets/dad-and-me.jpg'
import family from '../../assets/family.jpeg'

export default function FamilyCard() {
   return (
      <div className="flex lg:flex-row  flex-col-reverse gap-6 items-start max-w-5xl bg-white p-10 rounded-lg shadow-lg border border-zinc-200">
         <div className="space-y-4">
            <h1 className="max-sm:text-2xl text-4xl font-bold text-indigo-700">Histórico familiar</h1>
            <p className="text-lg max-sm:text-md text-zinc-700 leading-relaxed">
               Moro em <span className="text-orange-500 font-semibold">Nova Independência</span>, com minha mãe e minha avó. Pai falecido.
               Sou filha única e cresci em um ambiente familiar <span className="italic">afetuoso e acolhedor</span>.
            </p>
            <p className="text-lg text-zinc-600 italic leading-relaxed">
               “Como minha mãe sempre diz: Se você já tem o
               <span className="text-orange-500 font-semibold"> não</span>, então vá atrás do
               <span className="text-orange-500 font-semibold"> sim</span>.”
            </p>
         </div>
         <div className="w-full h-full gap-2 flex justify-end items-end max-lg:justify-between max-lg:items-start">
            <img src={family} alt="Foto da minha família" className="max-w-100 h-60 object-cover object-[50%_25%]  w-full min-w-40 rounded-lg" />
            <img src={dadAndMe} alt="Foto com meu pai" className="min-w-20 min-h-20 max-w-auto max-h-60 object-cover object-[50%_25%] rounded-lg shadow-md" />
         </div>

      </div>
   )
}