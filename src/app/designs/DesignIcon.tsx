import { DesignProps } from "../Interfaces/Interfaces"
import designs from '../data/designs'

export default function designIcon({ design }: { design: DesignProps }) {
   return (
      <main>
         <section
            style={{
               backgroundImage: "url('/assets/" + design.img + "')",
               backgroundPosition: "center"
            }}
         >

         </section>
         <p>
            {design.name}
         </p>
      </main>
   )
}