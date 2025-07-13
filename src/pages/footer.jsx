import { Heart } from 'lucide-react'

export default function Footer() {
   return(
      <footer className="flex gap-2 items-center bg-white shadow-[0_-10px_20px_rgba(0,0,0,0.1)] justify-center p-10">
         <h1 className="text-2xl text-center text-indigo-700 font-semibold animate-[bounce_2s_.1s_ease-in-out_infinite] delay-700">
            Obrigada pela atenção!
         </h1>
         <Heart className='text-indigo-700 animate-[bounce_2s_ease-in-out_infinite]' />

      </footer>
   )
}