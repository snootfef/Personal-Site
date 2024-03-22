'use client'
import Nav from '../nav'
import { IoIosArrowDown } from "react-icons/io";

export default function Page() {

   function handleClick() {
      (document.getElementById('bottom') as HTMLInputElement).scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <main
         className='flex flex-col min-w-screen overflow-y-auto'
      >
         <Nav />
         <section
            className='flex flex-col items-center justify-center h-screen relative'
         >
            <section
               className='flex flex-row items-center justify-center'
            >
               <h2
                  className='m-32'
               >
                  about
               </h2>
               <section
                  style={{
                     backgroundImage: "url('/assets/test2.jpg')",
                     backgroundPosition: "center"
                  }}
                  className="rounded-full front flex flex-col items-center justify-center w-[22vw] h-[80vh]"
               >
               </section>
               <h2
                  className='m-32'
               >
                  me
               </h2>
            </section>
            <button
               onClick={handleClick}
            >
               <IoIosArrowDown
                  className="absolute bottom-1 text-4xl opacity-25 hover:opacity-75 ease-in"
               />
            </button>
         </section>
         <section
            id='bottom'
            className='flex h-screen'
         >
            <h2
               className='mt-24 ml-24'
            >
               i love...
            </h2>
         </section>
      </main >
   );
}