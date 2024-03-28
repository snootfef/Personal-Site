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
         className='flex flex-col items-center min-w-screen overflow-y-scroll bg-rice text-moss'
      >
         <Nav />
         <section
            className='flex flex-row items-center justify-center h-screen w-screen mt-8'
         >
            <section
               id="sidebar"
               className='flex flex-col w-[25vw] items-center justify-center'
            >
               {sidebarNames.map((name: string, index) =>
                  <p
                     className='p-2 cursor-pointer'
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
               className='w-[75vw] h-full'
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
         <Footer />
      </main>
   );

}