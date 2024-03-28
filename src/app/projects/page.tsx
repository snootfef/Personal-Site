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
         <Nav />
         <section
            className='w-full flex flex-col items-center justify-center mt-20 mb-10'
         >
            <h2
               className='text-black my-2'
            >
               projects
            </h2>
            <p>
               click to learn more!
            </p>
         </section>
         <section
            className='flex flex-row justify-center w-screen h-full mt-15 mb-20'
         >
            {projects.map((project: ProjectProps, index) => <ProjectIcon project={project} index={index} flip={flip} setFlip={setFlip}></ProjectIcon>)}
         </section>
         <Footer />
      </main>
   )
}