import Nav from '../nav'
import DesignIcon from './DesignIcon';
import designs from '../data/designs'
import { DesignProps } from '../Interfaces/Interfaces';
import { DesignSetProps } from '../Interfaces/Interfaces';

export default function Page() {
   return (
      <main
         className='flex flex-col items-center w-screen min-h-screen overflow-auto relative'
      >
         <Nav />
         <section
            className='flex flex-row justify-center w-full h-[65vh] overflow-x-scroll'
         >
            <p
               className='text-black mt-20'
            >
               images go here
            </p>
            {designs.map((design: DesignSetProps) => <DesignIcon design={project} index={index} flip={flip} setFlip={setFlip}></ProjectIcon>)}
         </section>
         <section>
            <p>
               description goes here
            </p>
         </section>
      </main>
   );

}