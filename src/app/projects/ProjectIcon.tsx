import ProjectProps from "../Interfaces/Interfaces"

export default function projectIcon({ project }: { project: ProjectProps }) {
   return (
      <main
         className="flex flex-col items-center"
      >
         <section
            className="flex flex-col items-center justify-center rounded-full w-[12.5vw] h-[65vh] m-5"
            style={{
               backgroundImage: "url('/assets/" + project.img + "')",
               backgroundPosition: "center"
            }}
         >
         </section>
         <section
            className="flex flex-col justify-center items-center w-24 h-12"
         >
            <h2
               className="text-lg"
            >
               {project.name}
            </h2>
            <p
               className="text-xs"
            >
               {project.description}
            </p>
         </section>
      </main >
   )
}