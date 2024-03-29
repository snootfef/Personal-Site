'use client';
import Nav from './nav'
import Footer from './footer';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

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
          className="w-3/4 m-24 flex flex-col justify-center"
        >
          <p
          >
            Hi! I'm Delin, a first year Systems Design Engineering student at the University of Waterloo. Welcome to delingu.com, a glimpse into what I've been up to.
          </p>
          <div
            className="mt-8 flex flex-row"
          >
            <a className='pr-2' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className='pr-2' href='https://www.linkedin.com/in/delin-gu/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <FaExternalLinkAlt />
          </div>
        </section>
        <div
          className="w-1/2 m-24"
        >
          asdfasdf
        </div>
      </section>
      <Footer />
    </main>
  );
}
