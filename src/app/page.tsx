'use client';
import Image from "next/image";
import Nav from './nav'
import { FaGithub } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {

  function handleClick() {
    (document.getElementById('bottom') as HTMLInputElement).scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="flex flex-col items-center relative overflow-x-hidden overflow-y-auto no-scrollbar">
      <Nav />
      <section
        className="flex h-screen w-screen flex-col items-center justify-center bg-black text-white"
      >
        <section
          className="flex flex-col items-center justify-center h-full pt-8"
        >
          <p>hi, I'm</p>
          <h1>Delin Gu</h1>
        </section>
        <section
          className="pb-8"
        >
          {/* character icons */}
          <button
            onClick={handleClick}
          >
            <IoIosArrowDown
              className="text-4xl opacity-25 hover:opacity-75 ease-in"
            />
          </button>
        </section>
      </section>
      <section
        className="flex h-screen w-screen bg-white"
        id="bottom"
      >
        <section
          className="w-1/2 m-24 flex flex-col justify-center"
        >
          <p
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div
            className="mt-8"
          >
            <FaGithub />
          </div>
        </section>
        <div
          className="w-1/2 m-24"
        >
          asdfasdf
        </div>
      </section>
    </main>
  );
}
