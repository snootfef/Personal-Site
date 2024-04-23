import { DesignProps } from "../Interfaces/Interfaces"

const Modal = ({ open, onClose, designs }: { open: boolean, onClose: Function, designs: DesignProps }) => {
   if (!open) return null

   return (
      <div
         className="flex justify-center items-center w-screen h-screen bg-black bg-opacity-25"
         onClick={() => { onClose }}
      >
         <section
         >
            <img
               src={"/assets/" + designs.img}
            />
            <h2>
               {designs.name}
            </h2>
         </section>
      </div >
   )
}

export default Modal;