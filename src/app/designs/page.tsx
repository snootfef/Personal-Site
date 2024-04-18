'use client'
import { useState } from 'react';
import Nav from '../nav'
import Footer from '../footer';
import DesignIcon from './DesignIcon';
import { designArtwork } from '../data/designs'
import { designGraphics } from '../data/designs'
import { DesignProps } from '../Interfaces/Interfaces';

export default function Page() {
   const [flip, setFlip] = useState(-1);
   const [sidebar, setSidebar] = useState(designArtwork);
   const sidebarNames = ["Artworks", "Graphics"];
   const designArray = [designArtwork, designGraphics];

   return (
      <main
         className='flex flex-col items-center min-w-screen overflow-auto bg-rice text-moss'
      >
         <Nav />
         <div
            className='min-h-screen'
         >
            <section
               className='w-full flex flex-col items-center justify-center mt-20 mb-2 text-moss'
            >
               <h2
                  className='text-[2rem] my-2 italic font-bold font-playfair'
               >
                  designs
               </h2>
               <p>
                  click to learn more!
               </p>
            </section>
            <section
               className='flex flex-row items-center justify-center h-full w-screen'
            >
               <section
                  id="sidebar"
                  className='flex flex-col w-[20vw] items-center justify-center'
               >
                  {sidebarNames.map((name: string, index) =>
                     <p
                        className='p-2 cursor-pointer hover:scale-110 ease-in-out transition-all duration-400'
                        onClick={() => setSidebar(designArray[index])}
                     >
                        {name}
                     </p>
                  )}
                  <p
                     className='text-xs italic'
                  >
                     click to learn more!
                  </p>
               </section>
               <div
                  className='w-[75vw] h-full mt-8'
               >
                  <div
                     className='w-full h-full flex flex-row items-center flex-nowrap overflow-x-scroll'
                  >
                     {sidebar.map((design: DesignProps, index) =>
                        <DesignIcon
                           design={design} index={index} flip={flip} setFlip={setFlip}>
                        </DesignIcon>
                     )}
                  </div>
               </div>
            </section>
         </div>
         <Footer />
      </main>
   );

}