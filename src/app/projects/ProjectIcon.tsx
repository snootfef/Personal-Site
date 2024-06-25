import { ProjectProps } from "../Interfaces/Interfaces"

export default function projectIcon({ project, index, flip, setFlip }: { project: ProjectProps, index: number, flip: number, setFlip: Function }) {
   return (
      <main
         className="flex flex-col items-center"
      >
         <div className={`card ${flip === index ? "flip" : ""} w-[12.5vw] 2xl:h-[65vh] xl:h-[56vh] m-5`}>
            <section
               onClick={() => setFlip(index)}
               className="rounded-full front flex flex-col items-center justify-center w-full h-full"
               style={{
                  backgroundImage: "url('/assets/" + project.img + "')",
                  backgroundPosition: "center",
                  backgroundSize: "500%"
               }}
            >
            </section>
            <section
               onClick={() => setFlip(-1)}
               className="flex flex-col items-center justify-center rounded-full back bg-moss text-rice w-full h-full"
            >
               <p
                  className="m-3 xl:text-[0.85rem] italic text-center"
               >
                  {project.tools}
               </p>
               <div
                  className="h-[0.09rem] w-36 bg-rice"
               />
               <p
                  className="2xl:text-sm xl:text-[0.83rem] m-3 text-center"
               >
                  {project.description}
               </p>
               <p
                  className="text-xs m-3 italic"
               >
                  {project.date}
               </p>
            </section>
         </div>
         <section
            className="flex flex-col justify-center items-center w-24 h-12 text-moss"
         >
            <h2
               className="text-base text-center font-bold"
            >
               {project.name}
            </h2>
         </section>
      </main >
   )
}