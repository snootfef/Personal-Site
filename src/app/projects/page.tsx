import Nav from '../nav'
import projects from '../data/projects'
import ProjectIcon from './ProjectIcon';
import ProjectProps from '../Interfaces/Interfaces';

export default function Page() {

   return (
      <main
         className="flex flex-col items-center w-screen h-screen overflow-auto relative"
      >
         <Nav />
         <section
            className='flex flex-row justify-center w-screen h-full mt-24'
         >
            {projects.map((project: ProjectProps) => <ProjectIcon project={project}></ProjectIcon>)}
         </section>
      </main>
   )
}