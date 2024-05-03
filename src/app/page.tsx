'use client';
import Nav from './nav'
import Footer from './footer';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
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
            className='mt-14 mb-4 text-moss font-playfair italic font-bold text-xl'
          >
            hi, i&apos;m
          </h1>
          <img
            src='/assets/logo.svg'
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
              className="text-4xl opacity-25 hover:opacity-75 hover:scale-110 ease-in"
            />
          </button>
        </section>
      </section>
      <section
        className=" relative flex h-screen w-screen bg-rice text-moss"
        id="bottom"
      >
        <div
          className='z-0 opacity-50'
        >
          <img
            className='absolute w-[18vw] left-[46rem] top-[6.5rem]'
            src="/assets/star8.png"
          />
          <img
            className='absolute w-[26.5vw] right-[10rem] top-[7rem] -rotate-45'
            src="/assets/star7.png"
          />
          <img
            className='absolute w-[15vw] -left-[3rem] top-[26.5rem] -rotate-[25deg]'
            src="/assets/star8.png"
          />
          <img
            className='absolute w-[17vw] left-[63rem] top-[34rem] rotate-90'
            src="/assets/star5.png"
          />
          <img
            className='absolute w-[10vw] left-[7rem] top-[32rem] rotate-90'
            src="/assets/star3.png"
          />
        </div>
        <section
          className="w-[40%] ml-36 flex flex-col justify-center"
        >
          <h2
            className='font-playfair font-bold italic my-4 text-3xl'
          >
            welcome!
          </h2>
          <p
          >
            I&apos;m Delin, a first year Systems Design Engineering student at the University of Waterloo. Welcome to delingu.com, a glimpse into some of my projects, designs, and what I&apos;ve been up to.
          </p>
          <div
            className="mt-4 flex flex-row text-[1.25rem]"
          >
            <a className='pr-2' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className='pr-2' href='https://www.linkedin.com/in/delin-gu/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a className='pr-2' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
              <RiMailFill />
            </a>
          </div>
        </section>
        <div
          className="relative w-[60%] mt-16 -right-36"
        >
          <img
            className='absolute top-16 w-[24vw] ease-in-out'
            src='/assets/orange.png'
          />
          <img
            className='absolute top-[32rem] left-[16rem] w-[8vw]'
            src='/assets/blueberry1.png'
          />
          <img
            className='absolute top-[24rem] left-[28rem] w-[9vw]'
            src='/assets/blueberry2.png'
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
