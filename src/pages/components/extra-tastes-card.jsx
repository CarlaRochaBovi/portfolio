export default function ExtraTastesCard() {
   return (
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-white rounded-lg shadow-lg border border-zinc-200">

         <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
            <h2 className="text-2xl max-sm:text-xl font-bold text-indigo-700 mb-2">Um hobby:</h2>
            <p className="text-lg max-sm:text-md text-zinc-800 mb-4 text-center">Jogar videogame</p>
            <img src="./assets/gamepad.png" alt="Jogar videogame" className="w-40 h-40 object-cover max-sm:w-30 max-sm:h-30" />
         </div>

         <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-sm border border-zinc-100">
            <h2 className="text-2xl max-sm:text-xl font-bold text-indigo-700 mb-2">Uma curiosidade:</h2>
            <p className="text-lg max-sm:text-md text-zinc-800 mb-4 text-center">Gosto de resolver cubos mágicos!</p>
            <img src="./assets/rubiks-cube.png" alt="Cubos mágicos" className="w-40 h-40 object-cover max-sm:w-30 max-sm:h-30" />
         </div>

      </div>
   );
}
