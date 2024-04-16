import { ProjectProps } from "../Interfaces/Interfaces"

export default function projectIcon({ project, index, flip, setFlip }: { project: ProjectProps, index: number, flip: number, setFlip: Function }) {
   return (
      <main
         className="flex flex-col items-center"
      >
         <div className={`card ${flip === index ? "flip" : ""} w-[12.5vw] h-[65vh] m-5`}>
            <section
               onClick={() => setFlip(index)}
               className="rounded-full front flex flex-col items-center justify-center w-full h-full"
               style={{
                  backgroundImage: "url('/assets/" + project.img + "')",
                  backgroundPosition: "center"
               }}
            >
            </section>
            <section
               onClick={() => setFlip(-1)}
               className="flex flex-col items-center justify-center rounded-full back bg-moss text-rice w-full h-full"
            >
               <p
                  className="m-3 italic text-center"
               >
                  {project.tools}
               </p>
               <div
                  className="h-[0.09rem] w-36 bg-rice"
               />
               <p
                  className="text-s m-3 text-center"
               >
                  {project.description}
               </p>
            </section>
         </div>
         <section
            className="flex flex-col justify-center items-center w-24 h-12 text-moss"
         >
            <h2
               className="text-lg text-center"
            >
               {project.name}
            </h2>

         </section>
      </main >
   )
}