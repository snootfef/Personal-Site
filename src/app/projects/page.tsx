import Nav from '../nav'
import projects from '../data/projects'
import ProjectIcon from './ProjectIcon';

interface Props { name: string, description: string, img: string }

export default function Page() {

   return (
      <main
         className="flex flex-col"
      >
         <Nav />
         {projects.map((project: Props) => <ProjectIcon project={project}></ProjectIcon>)}
      </main>
   )
}