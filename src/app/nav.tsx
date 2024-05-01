'use client';
import Link from "next/link"
import useScrollPosition from "./useScrollPosition";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Nav() {
   const scrollPosition = useScrollPosition();
   const [scroll, setScroll] = useState(false)
   const pathname = usePathname()

   const pages = ['/projects', '/designs', '/about']

   if (scrollPosition > 400 && !scroll)
      setScroll(true)
   else if (scrollPosition < 400 && scroll)
      setScroll(false)

   return (
      <nav
         className='z-50 flex flex-col justify-center items-center w-screen h-[4.8rem] fixed bg-rice text-moss'
      >
         <div
            className={"relative flex flex-row justify-center items-center my-5 duration-700 ease-in-out"}
         >
            <Link
               href='/'
               className="absolute w-20 -left-[32rem]"
            >
               <Image
                  src="/assets/logoSmall.png"
                  className={"h-full w-full ease-in-out duration-200 hover:scale-105 " + (scroll || pages.includes(pathname) ? 'opacity-100' : 'opacity-0')}
                  alt=""
                  width="100"
                  height="1080"
               />
            </Link>
            <Link
               href='/projects'
               className="mx-16 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               projects
            </Link>
            <p>/</p>
            <Link
               href='/designs'
               className="mx-16 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               designs
            </Link>
            <p>/</p>
            <Link
               href='/about'
               className="mx-16 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               about
            </Link>
            <div
               className="flex absolute -right-[32rem]"
            >
               <a className='pr-2  hover:scale-110 ease-in-out transition-all duration-200' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
               </a>
               <a className='pr-2  hover:scale-110' href='https://www.linkedin.com/in/delin-gu/' target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
               </a>
               <a className='pr-2  hover:scale-110' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
                  <RiMailFill />
               </a>
            </div>
         </div>
      </nav>
   )
}