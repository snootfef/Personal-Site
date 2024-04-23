'use client'
import { MouseEventHandler } from "react"
import { DesignProps } from "../Interfaces/Interfaces"

export default function designIcon({ design, index, onClick }: { design: DesignProps, index: number, onClick: MouseEventHandler }) {
   return (
      <main
         className="flex flex-col items-center"
         onClick={onClick}
      >
         <div
            className={'min-w-[15vw] h-[55vh] m-5'}
         >
            <section
               style={{
                  backgroundImage: "url('/assets/" + design.img + "')",
                  backgroundPosition: "center"
               }}
               className="rounded-full front flex flex-col items-center justify-center w-full h-full"
            >
            </section>
         </div>
         <p
            className="text-base text-center font-bold"
         >
            {design.name}
         </p>
      </main >
   )
}