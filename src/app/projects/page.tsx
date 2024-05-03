"use client";
import Nav from '../nav'
import Footer from '../footer';
import { useState } from "react";
import projects from '../data/projects'
import ProjectIcon from './ProjectIcon';
import { ProjectProps } from '../Interfaces/Interfaces';

export default function Page() {
   const [flip, setFlip] = useState(-1);

   return (
      <main
         className="flex flex-col items-center w-screen min-h-screen overflow-auto relative bg-rice"
      >
         <div
            className='z-0 opacity-50'
         >
            <img
               className='absolute w-[21vw] -left-[7.5rem] top-[6.5rem]'
               src="/assets/star2.png"
            />
            <img
               className='absolute w-[28vw] -right-[5rem] top-[42rem] rotate-[184deg]'
               src="/assets/star5.png"
            />
            <img
               className='absolute w-[20vw] left-[28.5rem] top-[40rem] rotate-45'
               src="/assets/star5.png"
            />
            <img
               className='absolute w-[25vw] right-[7rem] top-[4.5rem]'
               src="/assets/star1.png"
            />
         </div>
         <Nav />
         <section
            className='mx-20 w-full flex flex-col items-center mt-20 mb-2 text-moss'
         >
            <h2
               className='text-[2rem] my-2 italic font-bold font-playfair'
            >
               projects
            </h2>
            <p>
               click to learn more!
            </p>
         </section>
         <section
            className='mx-20 flex flex-row justify-center w-screen h-full mb-20'
         >
            {projects.map((project: ProjectProps, index) => <ProjectIcon key={index} project={project} index={index} flip={flip} setFlip={setFlip}></ProjectIcon>)}
         </section>
         <Footer />
      </main>
   )
}