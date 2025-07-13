export default function FuturePage() {
   return (
      <section id="future" className="h-screen flex flex-col items-center justify-center text-center gap-8">
         <div className="max-w-3xl space-y-4 mt-10">
            <h1 className="text-4xl font-bold text-indigo-700">Perspectiva de futuro</h1>
            <p className="text-zinc-500 text-base italic">Minhas metas e planos com a tecnologia</p>


            <p className="text-lg text-zinc-700 leading-relaxed">
               Um dos meus grandes sonhos é fazer intercâmbio para o Canadá ou Inglaterra e, se possível, conquistar um emprego estável e morar lá.
               Atualmente curso Análise e Desenvolvimento de Sistemas na Faculdade Unifadra, em Dracena.
               Meu principal objetivo profissional é atuar como desenvolvedora Web Full Stack.
            </p>
         </div>

         <div className="bg-white border border-zinc-200 rounded-lg shadow-md p-6 mt-4 w-full max-w-3xl">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">Sobre este portfólio:</h2>
            <p className="text-zinc-700 mb-4">
               Este portfólio foi inteiramente desenvolvido por mim com foco em design limpo, moderno e responsivo.
            </p>

            <div className="flex items-center justify-center gap-6 flex-wrap text-zinc-600 text-sm font-medium">
               <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full shadow-sm">ReactJS</span>
               <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full shadow-sm">TailwindCSS</span>
               <span className="px-4 py-2 bg-violet-100 text-violet-700 rounded-full shadow-sm">Framer Motion</span>
               <span className="px-4 py-2 bg-sky-100 text-sky-700 rounded-full shadow-sm">Lucide Icons</span>
               <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full shadow-sm">Vite</span>
            </div>
            <a
               href="https://github.com/carlarochabovi"
               target="_blank"
               className="mt-6 inline-block px-6 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
            >
               Ver repositório no GitHub
            </a>

         </div>
      </section>
   );
}
