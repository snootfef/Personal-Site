import { MouseEventHandler } from "react";
import { DesignProps } from "../Interfaces/Interfaces"

const Modal = ({ open, onClose, designs }: { open: boolean, onClose: MouseEventHandler, designs: DesignProps }) => {
   if (!open) return null

   return (
      <div
         className="z-50 absolute flex justify-center items-center w-screen h-screen bg-black bg-opacity-85 text-rice"
         onClick={onClose}
      >
         <section
            onClick={(e) => {
               e.stopPropagation();
            }}
            className="m-8"
         >
            <img
               src={"/assets/designs/" + designs.img}
               className="w-[450px] mb-6"
            />
            <h2
               className=""
            >
               {designs.name}
            </h2>
            <p
               className="italic text-sm"
            >
               {designs.date}
            </p>
         </section>
         <div
            className="m-8 w-96"
         >
            <section
               className=""
            >
               <p
                  className="my-3 italic"
               >
                  {designs.tools}
               </p>
               <div
                  className="h-[0.09rem] w-36 bg-rice"
               />
               <p
                  className="text-s my-3"
               >
                  {designs.description}
               </p>
            </section>
         </div>
      </div >
   )
}

export default Modal;