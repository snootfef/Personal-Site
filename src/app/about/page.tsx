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
            className='flex flex-col items-center justify-center h-screen relative font-playfair font-bold'
         >
            <section
               className='flex flex-row items-center justify-center italic text-3xl text-moss'
            >
               <h2
                  className='m-32'
               >
                  about
               </h2>
               <section
                  style={{
                     backgroundImage: "url('/assets/about/about1.JPG')",
                     backgroundPosition: "left 48% bottom 50%",
                     backgroundSize: "150%"
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
            className='min-h-screen w-full relative font-playfair'
         >
            <h2
               className='mt-28 ml-24 italic font-bold text-xl text-moss'
            >
               my life currently...
            </h2>
            <section
               className='z-40 flex flex-row w-full h-[90vh] relative bg-rice'
            >
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutFlowers.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "125%"
                  }}
                  className='my-16 ml-20 mr-16 rounded-full w-[18vw] h-[60vh] bg-moss'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutUoft.jpg')",
                     backgroundPosition: "left 10% top 80%",
                     backgroundSize: "120%"
                  }}
                  className='mt-[16rem] rounded-full w-[15vw] h-[45vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutCake.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "140%"
                  }}
                  className='mt-56 ml-[15rem] rounded-full w-[20vw] h-[72vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutDog.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "120%"
                  }}
                  className='ml-[5rem] mt-[28rem] rounded-full w-[16vw] h-[60vh] bg-green-400'
               />
            </section>
            <section
               className='z-30 flex flex-row w-full h-[110vh] relative bg-rice'
            >
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutFood.JPG')",
                     backgroundPosition: "left 60% bottom 40%",
                     backgroundSize: "140%"
                  }}
                  className='ml-[8rem] mt-[9rem] rounded-full w-[16vw] h-[55vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutCapybara.JPG')",
                     backgroundPosition: "left 50% bottom 30%",
                     backgroundSize: "150%"
                  }}
                  className='ml-16 rounded-full w-[20vw] h-[69vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutOrchestra.jpg')",
                     backgroundPosition: "left 50% bottom 30%",
                     backgroundSize: "120%"
                  }}
                  className='ml-24 mt-[18rem] rounded-full w-[20vw] h-[70vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutSki.jpg')",
                     backgroundPosition: "left 30% bottom 0%",
                     backgroundSize: "95%"
                  }}
                  className='ml-8 mt-[15rem] rounded-full w-[18vw] h-[45vh] bg-green-400'
               />
            </section>
         </section>
         <Footer />
      </main >
   );
}