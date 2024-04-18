'use client';
import Link from "next/link"
import useScrollPosition from "./useScrollPosition";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
   const scrollPosition = useScrollPosition();
   const [scroll, setScroll] = useState(false)
   const pathname = usePathname()

   if (scrollPosition > 400 && !scroll)
      setScroll(true)
   else if (scrollPosition < 400 && scroll)
      setScroll(false)

   return (
      <nav
         className='z-50 flex flex-col justify-center items-center w-screen h-[4.8rem] fixed bg-rice text-moss'
      >
         <div
            className={"relative flex flex-row justify-center items-center my-5 duration-700 ease-in-out " + (scroll || pathname === '/projects' || pathname === '/designs' || pathname === '/about' ? 'pl-0 pr-[43vw]' : 'px-[33vw]')}
         >
            <Link
               href='/'
               className="absolute w-24 -left-32"
            >
               <Image
                  src="/assets/logoSmall.png"
                  className={"h-full w-full ease-in-out duration-200 " + (scroll || pathname === '/projects' || pathname === '/designs' || pathname === '/about' ? 'opacity-100' : 'opacity-0')}
                  alt=""
                  width="1080"
                  height="1080"
               />
            </Link>
            <Link
               href='/projects'
               className="mx-16 hover:mx-20 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               projects
            </Link>
            <p>/</p>
            <Link
               href='/designs'
               className="mx-16 hover:mx-20 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               designs
            </Link>
            <p>/</p>
            <Link
               href='/about'
               className="mx-16 hover:mx-20 hover:scale-110 ease-in-out duration-400 transition-all"
            >
               about
            </Link>
         </div>
      </nav>
   )
}