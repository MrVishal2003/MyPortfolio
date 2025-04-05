import React from 'react';
import aboutImg from '../assets/About.jpg';
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
        className='my-20 text-center text-4xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        🪁About <span className='text-neutral-500'>Me.☀️</span>
      </motion.h1>

      <div className='flex flex-wrap'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 px-4 lg:p-8'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-center'
          >
            <img
              src={aboutImg}
              alt='Portrait of Vishal Hadiyal'
              className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className='w-full lg:w-1/2 px-4'>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className='flex justify-center text-justify lg:justify-start'
          >
            <article className='my-4 max-w-xl py-6 font-medium leading-relaxed text-base lg:text-lg'>
              Hello! I’m <b>Vishal Hadiyal</b>, a Computer Engineering student at <b>R.K. University, Rajkot</b>. My passion for web development started with learning HTML, CSS, and JavaScript, and I have been building dynamic and responsive web applications ever since.
              <br /><br />
              I specialize in frontend technologies like <b>React.js, TailwindCSS, and Redux</b>, and have experience working with <b>backend tools like Node.js, MongoDB, and Firebase</b>. I enjoy solving coding challenges and continuously improving my skills by exploring new frameworks and technologies.
              <br /><br />
              My projects include a <b>To-Do List App</b>, a <b>MegaBlog Platform</b>, and a <b>Hotel Management System</b>, each demonstrating my ability to build real-world applications. I am always looking for opportunities to collaborate and contribute to innovative projects.

              {/* Optional Resume Button */}
              <div className="mt-6">
                <a
                  href="/Resume.pdf" // replace with your actual resume file path
                  download
                  className="inline-block bg-neutral-900 text-white px-6 py-2 rounded-md hover:bg-neutral-700 transition"
                >
                  Download Resume
                </a>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
