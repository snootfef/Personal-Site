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
            className='z-0 opacity-60'
         >
            <img
               className='absolute w-[21vw] 2xl:-left-[7.5rem] xl:left-[5rem] top-[6.5rem]'
               src="/assets/star2.PNG"
            />
            <img
               className='absolute w-[28vw] -right-[5rem] 2xl:top-[42rem] xl:top-[33rem] rotate-[184deg]'
               src="/assets/star5.PNG"
            />
            <img
               className='absolute w-[20vw] 2xl:left-[28.5rem] 2xl:top-[40rem] xl:top-[30rem] xl:left-[18rem] rotate-45'
               src="/assets/star5.PNG"
            />
            <img
               className='absolute w-[25vw] 2xl:right-[7rem] xl:right-[10rem] top-[4.5rem]'
               src="/assets/star1.PNG"
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