import { ProjectProps } from "../Interfaces/Interfaces";

const projects: Array<ProjectProps> = [
   { name: 'delingu.com', description: 'A personal website/portfolio, all about me.', img: 'gradient2.jpg', tools: 'TypeScript, Tailwind, CSS, React, Next.js', date: 'January 2024' },
   { name: 'Healthcare AI Chatbot', description: 'Prototype and roadmap of the creation of an AI Healthcare Chatbot, utilizing MS tools, project management, and artificial intelligence techniques.', img: 'gradient3.jpg', tools: 'MS Azure, MS AI Tools, Github', date: 'March 2024' },
   { name: 'Buggy Buddies', description: 'A hardware project made for the MakeUoft 2024 hackathon that connects your face with your small, buggy buddies on the ground using LED displays and OpenCV.', img: 'gradient6.jpg', tools: 'Arduino, OpenCV, Python, C++', date: 'February 2024' },
   { name: 'Cat Generator', description: 'A quick and fun introduction into web development. Chat with a unique roster of cats and rate their messages!', img: 'gradient1.jpg', tools: 'JavaScript, React, CSS, Figma', date: 'Janury 2023' },
   { name: 'ProFolio', description: 'Website design mockup for aspiring professionals and new graduates to showcase their projects and portfolios while connecting with hiring companies and like-minded creatives.', img: 'gradient4.jpg', tools: 'Figma, Photoshop', date: 'October 2023' },
   { name: 'Goose Graphs', description: 'A goose-themed graphing and functions education game inspired by Desmos Marbles.', img: 'gradient5.jpg', tools: 'Java, Photoshop', date: 'June 2023' }
];

export default projects;