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
      <nav className={'flex items-center w-screen h-14 fixed bg-white text-black duration-700 ease-in-out ' + (scroll ? 'pr-0 pl-[60vw]' : 'px-[33vw]')}>
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