'use client';
import Link from "next/link"
import useScrollPosition from "./useScrollPosition";
import { useEffect, useState } from "react";

export default function Nav() {
   const scrollPosition = useScrollPosition();
   const [scroll, setScroll] = useState(false)

   if (scrollPosition > 400 && !scroll)
      setScroll(true)
   else if (scrollPosition < 400 && scroll)
      setScroll(false)

   return (
      <nav
         className='z-50 flex flex-col justify-center items-center w-screen h-[4.1rem] fixed bg-rice text-moss'
      >
         <div
            className={"flex flex-row justify-center items-center my-5 duration-700 ease-in-out " + (scroll ? 'pr-0 pl-[60vw]' : 'px-[33vw]')}
         >
            <Link
               href='/'
               className="mx-16"
            >
               home
            </Link>
            <Link
               href='/projects'
               className="mx-16"
            >
               projects
            </Link>
            <p>/</p>
            <Link
               href='/designs'
               className="mx-16"
            >
               designs
            </Link>
            <p>/</p>
            <Link
               href='/about'
               className="mx-16"
            >
               about
            </Link>
         </div>
      </nav>
   )
}