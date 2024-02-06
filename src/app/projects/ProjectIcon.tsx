interface Props { project: { name: string, description: string, img: string } }

export default function projectIcon({ project }: Props) {
   return (
      <main
         className="rounded-md"
         style={{
            backgroundImage: project.img
         }}
      >
         <h2>
            project.name
         </h2>
         <p>
            project.description
         </p>
      </main>
   )
}