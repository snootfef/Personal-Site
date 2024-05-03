'use client'
import { useState } from 'react';
import Nav from '../nav'
import Footer from '../footer';
import DesignIcon from './DesignIcon';
import { designArtwork } from '../data/designs'
import { designGraphics } from '../data/designs'
import { DesignProps } from '../Interfaces/Interfaces';
import Modal from './Modal';

export default function Page() {
   const [openModal, setOpenModal] = useState(false)
   const [designDisplay, setDesignDisplay] = useState(0)
   const [sidebar, setSidebar] = useState(designGraphics);
   const sidebarNames = ["graphics", "artworks"];
   const designArray = [designGraphics, designArtwork];

   return (
      <main
         className='relative flex flex-col items-center max-w-screen bg-rice text-moss'
      >
         <img
            className='absolute w-[13vw] left-[8.5rem] top-[20rem]'
            src="/assets/star4.PNG"
         />
         <div
            className='z-0 opacity-50'
         >
            <img
               className='absolute w-[25vw] right-[18rem] top-[5rem] rotate-180'
               src="/assets/star2.PNG"
            />
            <img
               className='absolute w-[24vw] right-[5.5rem] top-[35rem]'
               src="/assets/star5.PNG"
            />
            <img
               className='absolute w-[11vw] left-[30rem] top-[6.5rem] rotate-90'
               src="/assets/star3.PNG"
            />
            <img
               className='absolute w-[21vw] -left-[8rem] bottom-[4rem] rotate-180'
               src="/assets/star1.PNG"
            />
         </div>
         <Nav />
         <div
            className='min-h-screen'
         >
            <section
               className='max-w-screen flex flex-col items-center justify-center mt-20 mb-2 text-moss'
            >
               <h2
                  className='text-[2rem] my-2 italic font-bold font-playfair'
               >
                  designs
               </h2>
               <p
                  className='mt-2'
               >
                  click to learn more <span className="px-1" />  /  <span className="px-1" /> shift + scroll to scroll
               </p>
            </section>
            <section
               className='h-full flex flex-row items-center justify-center w-screen'
            >
               <section
                  id="sidebar"
                  className='flex flex-col w-[15vw] items-center justify-center'
               >
                  {sidebarNames.map((name: string, index) =>
                     <p
                        key={index}
                        className='py-4 pr-24 cursor-pointer hover:scale-110 ease-in-out transition-all duration-400 font-playfair italic font-bold text-xl underline'
                        onClick={() => setSidebar(designArray[index])}
                     >
                        {name}
                     </p>
                  )}
               </section>
               <div
                  className='w-[80vw] h-[65vh] mt-4'
               >
                  <div
                     className='mr-20 w-full h-full flex flex-row items-center flex-nowrap overflow-x-scroll'
                  >
                     {sidebar.map((design: DesignProps, index) =>
                        <DesignIcon
                           key={index}
                           design={design}
                           index={index}
                           onClick={() => {
                              setDesignDisplay(index);
                              setOpenModal(true)
                           }}
                        />
                     )}
                     <div
                        className={'flex items-center w-full h-full text-xl font-bold italic font-playfair pl-28 ' + (sidebar == designArtwork ? "opacity-100" : "opacity-0")}
                     >
                        <p>
                           coming soon!
                        </p>
                     </div>
                  </div>
               </div>
            </section>
         </div>
         <Footer />
         <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            designs={sidebar[designDisplay]}
         />
      </main>
   );

}