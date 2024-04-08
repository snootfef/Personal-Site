import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
   return (
      <footer
         className="w-screen h-32 p-10 flex flex-row justify-around bg-moss text-rice"
      >
         <h2
            className="font-xl"
         >
            portfolio v.1
         </h2>
         <div
            className="flex flex-row"
         >
            <a className='pr-2' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
               <FaGithub />
            </a>
            <a className='pr-2' href='https://www.linkedin.com/in/delin-gu/' target="_blank" rel="noopener noreferrer">
               <FaLinkedin />
            </a>
         </div>
      </footer>
   );
}