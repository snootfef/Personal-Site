import { DesignProps } from "../Interfaces/Interfaces"
import { designArtwork } from '../data/designs'

export default function designIcon({ design }: { design: DesignProps }) {
   return (
      <main
         className="flex flex-col items-center w-full h-[65vh] m-5"
      >
         <section
            style={{
               backgroundImage: "url('/assets/" + design.img + "')",
               backgroundPosition: "center"
            }}
            className="rounded-full front flex flex-col items-center justify-center w-full h-full"
         >

         </section>
         <p>
            {design.name}
         </p>
      </main>
   )
}