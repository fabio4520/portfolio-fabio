import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
// import projects from '../data/projects'
import Project from './Project';
import { Project as ProjectType } from '../typings';

type Props = {
  projects: ProjectType[];
}


export default function Projects({ projects }: Props) {
  projects.sort(function(a, b) {
    return new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime();
  });  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.2}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 text-white'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {
          projects.map((project, i) => (
            <div
              className=' w-screen snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen flex-shrink-0'
              key={project._id}>
              <Project project={ project } />
              <div className='overflow-y-auto max-h-72 md:h-auto md:overflow-y-visible'>
                <h4 className=' text-lg md:text-4xl font-semibold text-center'>
                  <span className='underline decoration-[#F7AB0A]/50'>
                    Case Study {i+1} of {projects.length}:</span> {project.title}
                </h4>
                <p className='md:text-lg text-left mt-2'>{ project.summary }</p>
              </div>
            </div>
        ))
        }
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  )
}