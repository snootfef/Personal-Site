import { DesignProps } from "../Interfaces/Interfaces"
import { designArtwork } from '../data/designs'

export default function designIcon({ design, index, flip, setFlip }: { design: DesignProps, index: number, flip: number, setFlip: Function }) {
   return (
      <main
         className="flex flex-col items-center"
      >
         <div
            className={`card ${flip === index ? "flip" : ""} min-w-[12.5vw] h-[65vh] m-5`}
         >
            <section
               onClick={() => setFlip(index)}
               style={{
                  backgroundImage: "url('/assets/" + design.img + "')",
                  backgroundPosition: "center"
               }}
               className="rounded-full front flex flex-col items-center justify-center w-full h-full"
            >
            </section>
            <section
               onClick={() => setFlip(-1)}
               className="flex items-center justify-center rounded-full back bg-purple-300 w-full h-full"
            >
               <p
                  className="text-xs"
               >
                  aaaaaa
               </p>
            </section>
         </div>
         <p>
            {design.name}
         </p>
      </main>
   )
}