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
        className="flex h-screen w-screen flex-col items-center justify-center bg-rice text-rock"
      >
        <section
          className="flex flex-col items-center justify-center h-full pt-8"
        >
          <h1
            className='mb-8 text-moss'
          >
            HI, I'M
          </h1>
          <img
            src='/assets/logo.png'
            className='w-[65rem]'
          />
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
        className="flex h-screen w-screen bg-rice text-moss"
        id="bottom"
      >
        <section
          className="w-1/2 m-20 flex flex-col justify-center"
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
          className="relative w-1/2 mt-16"
        >
          <img
            className='absolute top-16 w-[22vw] hover:scale-110 ease-in-out'
            src='/assets/orange.png'
          />
          <img
            className='absolute top-[32rem] left-[16rem] w-[7vw] hover:scale-110'
            src='/assets/blueberry1.png'
          />
          <img
            className='absolute top-[24rem] left-[28rem] w-[7vw] hover:scale-110'
            src='/assets/blueberry2.png'
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
