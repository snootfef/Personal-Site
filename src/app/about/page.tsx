'use client'
import Nav from '../nav'
import Footer from '../footer';
import { IoIosArrowDown } from "react-icons/io";

export default function Page() {

   function handleClick() {
      (document.getElementById('bottom') as HTMLInputElement).scrollIntoView({ behavior: 'smooth' });
   }

   return (
      <main
         className='flex flex-col min-w-screen overflow-y-scroll bg-rice'
      >
         <Nav />
         <section
            className='flex flex-col items-center justify-center h-screen relative '
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
            className='min-h-screen w-full relative'
         >
            <h2
               className='mt-24 ml-24'
            >
               i love...
            </h2>
            <section
               className='z-40 flex flex-row w-full h-[90vh] relative bg-rice'
            >
               <div
                  className='my-16 ml-12 mr-4 rounded-full w-[18vw] h-[60vh] bg-moss'
               />
               <div
                  className='mt-[16rem] rounded-full w-[15vw] h-[45vh] bg-green-400'
               />
               <div
                  className='mt-56 ml-[22rem] rounded-full w-[20vw] h-[72vh] bg-green-400'
               />
               <div
                  className='ml-12 mt-[30rem] rounded-full w-[16vw] h-[60vh] bg-green-400'
               />
            </section>
            <section
               className='z-30 flex flex-row w-full h-[110vh] relative bg-rice'
            >
               <div
                  className='ml-[8rem] mt-[7rem] rounded-full w-[16vw] h-[55vh] bg-green-400'
               />
               <div
                  className='ml-12 mt-[2rem] rounded-full w-[20vw] h-[69vh] bg-green-400'
               />
               <div
                  className='ml-32 mt-[18rem] rounded-full w-[20vw] h-[70vh] bg-green-400'
               />
               <div
                  className='ml-8 mt-[15rem] rounded-full w-[18vw] h-[45vh] bg-green-400'
               />
            </section>
         </section>
         <Footer />
      </main >
   );
}