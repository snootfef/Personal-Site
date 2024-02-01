import Link from "next/link"

export default function Nav() {
   return (
      <nav className='flex justify-center items-center min-w-full h-14 fixed bg-white text-black'>
         <Link
            href='/projects'
            className="m-16"
         >
            projects
         </Link>
         <p>/</p>
         <Link
            href='/designs'
            className="m-16"
         >
            designs
         </Link>
         <p>/</p>
         <Link
            href='/about'
            className="m-16"
         >
            about
         </Link>
      </nav>
   )
}