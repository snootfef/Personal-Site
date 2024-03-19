'use client'
import { useState } from 'react';
import Nav from '../nav'
import DesignIcon from './DesignIcon';
import { designArtwork } from '../data/designs'
import { designGraphics } from '../data/designs'
import { DesignProps } from '../Interfaces/Interfaces';

export default function Page() {
   const [sidebar, setSidebar] = useState(0);
   const sidebarNames = ["Artworks", "Graphics"];

   return (
      <main
         className='flex flex-col items-center min-w-screen h-screen overflow-auto'
      >
         <Nav />
         <section
            className='flex flex-row items-center justify-center h-full w-screen mt-16'
         >
            <section
               id="sidebar"
               className='flex flex-col w-[25vw] items-center justify-center'
            >
               {sidebarNames.map((name: string) =>
                  <p
                     className='p-2'
                  >
                     {name}
                  </p>
               )}
            </section>
            <div
               className='flex flex-row w-[75vw] overflow-x-scroll'
            >
               {designArtwork.map((design: DesignProps) =>
                  <DesignIcon
                     design={design}>
                  </DesignIcon>
               )}
            </div>
         </section>
      </main>
   );

}