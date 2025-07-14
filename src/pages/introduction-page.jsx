// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion"
import { Check } from 'lucide-react'
import { useEffect, useState } from "react"

const phrases = [
   "Lamentar é diferente de se arrepender.",
   "Escolher não escolher, não é bem uma escolha.",
   "Busque a paz com as ferramentas da guerra.",
   "Quem não está disposto a sacrificar nada, não consegue mudar nada!",
   "O que é melhor? Vida construída sobre uma mentira, ou morte nascida da verdade?"
]


export default function IntroductionPage() {

   const [index, setIndex] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setIndex((prev) => (prev + 1) % phrases.length)
      }, 7000);

      return () => clearInterval(interval)
   }, [])
   return (
      <section id="introduction" className="h-screen flex flex-col items-center pt-20 justify-center p-10 gap-5">
         <div className="text-center space-y-2">
            <p className="max-sm:text-2xl text-3xl text-zinc-700">
               Meu nome é
            </p>
            <p className="max-sm:text-4xl text-6xl font-semibold text-indigo-700">
               Carla Rocha Bovi.
            </p>
            <p className="max-sm:text-2xl text-2xl text-zinc-600">
               Tenho 18 anos.
            </p>
         </div>

         <ul className="max-sm:text-xl flex w-fit items-center justify-center flex-wrap text-zinc-700 text-2xl font-semibold gap-5">
            <li className="flex items-center justify-center gap-1">
               <Check className="text-orange-500" size={32} strokeWidth={3} />
               Curiosa
            </li>

            <li className="flex items-center justify-center gap-1">
               <Check className="text-orange-500" size={32} strokeWidth={3} />
               Empenhada
            </li>

            <li className="flex items-center justify-center gap-1">
               <Check className="text-orange-500" size={32} strokeWidth={3} />
               Colaborativa
            </li>
         </ul>

         <motion.div
            layout
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-orange-50 border-2 border-orange-200 rounded-lg shadow-md px-6 py-4 mt-10"
         >
            <div className="flex items-center gap-2">
               <span className="max-sm:text-4xl text-orange-500 text-5xl font-bold leading-none select-none">&quot;</span>

               <AnimatePresence mode="wait">
                  <motion.span
                     key={index}
                     initial={{ opacity: 0, y: 3 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -3 }}
                     transition={{ duration: 0.5 }}
                     className="max-sm:text-xl text-2xl font-medium text-zinc-700 leading-tight text-center"
                  >
                     {phrases[index]}
                  </motion.span>
               </AnimatePresence>

               <span className="max-sm:text-4xl text-orange-500 text-5xl font-bold leading-none select-none">&quot;</span>
            </div>
         </motion.div>
      </section>
   )
}