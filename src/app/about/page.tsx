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
                  className="rounded-full front flex flex-col items-center justify-center w-[22vw] 2xl:h-[80vh] xl:h-[70vh]"
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
                  className='z-0 opacity-60'
               >
                  <img
                     className='absolute w-[15vw] 2xl:left-[20rem] xl:left-[20rem] top-[0rem]'
                     src="/assets/star3.PNG"
                  />
                  <img
                     className='absolute w-[28vw] 2xl:left-[5rem] xl:left-[3rem] 2xl:top-[32rem] xl:top-[33rem] rotate-[200deg]'
                     src="/assets/star7.PNG"
                  />
                  <img
                     className='absolute w-[20vw] 2xl:left-[48rem] 2xl:top-[50rem] xl:top-[45rem] xl:left-[45rem] rotate-45'
                     src="/assets/star5.PNG"
                  />
                  <img
                     className='absolute w-[25vw] 2xl:right-[10rem] xl:right-[10rem] top-[12rem]'
                     src="/assets/star1.PNG"
                  />
               </div>
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutFlowers.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "125%"
                  }}
                  className='z-10 my-16 ml-20 mr-16 rounded-full w-[18vw] 2xl:h-[60vh] xl:h-[50vh] bg-moss'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutUoft.jpg')",
                     backgroundPosition: "left 10% top 80%",
                     backgroundSize: "120%"
                  }}
                  className='z-10 mt-[16rem] rounded-full w-[15vw] 2xl:h-[45vh] xl:h-[40vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutCake.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "140%"
                  }}
                  className='z-10 mt-56 2xl:ml-[15rem] xl:ml-[9rem] rounded-full w-[20vw] 2xl:h-[72vh] xl:h-[61vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutDog.jpg')",
                     backgroundPosition: "center",
                     backgroundSize: "120%"
                  }}
                  className='z-10 ml-[5rem] mt-[28rem] rounded-full w-[16vw] 2xl:h-[60vh] xl:h-[50vh] bg-green-400'
               />
            </section>
            <section
               className='z-30 flex flex-row w-full h-[110vh] relative bg-rice'
            >
               <div
                  className='z-0 opacity-60'
               >
                  <img
                     className='absolute w-[28vw] -left-[8rem] 2xl:top-[30rem] xl:top-[22rem] rotate-[200deg]'
                     src="/assets/star5.PNG"
                  />
                  <img
                     className='absolute w-[30vw] 2xl:left-[32rem] 2xl:top-[32rem] xl:top-[24rem] xl:left-[18rem] -rotate-45'
                     src="/assets/star7.PNG"
                  />
                  <img
                     className='absolute 2xl:w-[25vw] xl:w-[20vw] 2xl:right-[12rem] xl:right-[5rem] 2xl:top-[30rem] xl:top-[32rem]'
                     src="/assets/star2.PNG"
                  />
               </div>
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutFood.JPG')",
                     backgroundPosition: "left 60% bottom 40%",
                     backgroundSize: "140%"
                  }}
                  className='z-10 2xl:ml-[8rem] xl:ml-[6rem] mt-[9rem] rounded-full w-[16vw] 2xl:h-[55vh] xl:h-[50vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutCapybara.JPG')",
                     backgroundPosition: "left 50% bottom 30%",
                     backgroundSize: "150%"
                  }}
                  className='z-10 ml-16 rounded-full w-[20vw] h-[69vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutOrchestra.jpg')",
                     backgroundPosition: "left 50% bottom 30%",
                     backgroundSize: "120%"
                  }}
                  className='z-10 ml-24 mt-[18rem] rounded-full w-[20vw] 2xl:h-[70vh] xl:h-[65vh] bg-green-400'
               />
               <div
                  style={{
                     backgroundImage: "url('/assets/about/aboutSki.jpg')",
                     backgroundPosition: "left 30% bottom 0%",
                     backgroundSize: "95%"
                  }}
                  className='z-10 ml-8 mt-[15rem] rounded-full w-[18vw] 2xl:h-[45vh] xl:h-[43vh] bg-green-400'
               />
            </section>
         </section>
         <Footer />
      </main >
   );
}