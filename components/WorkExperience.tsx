import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
// import experiences from "../data/experience"
import { Experience } from '../typings'

type Props = {
  experiences: Experience[];
}

export default function WorkExperience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.2}}
      className='h-screen text-white flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Experience</h3>
      
      <div className='w-full flex space-x-5 overflow-x-scroll overflow-y-hidden p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {
          experiences.sort(function (a:Experience, b:Experience) {
            return new Date(b.dateStarted).valueOf() - new Date(a.dateStarted).valueOf();
          }).map((experience, i) => (
            <ExperienceCard key={i} experience={experience } />
          ))
        }
      </div>

    </motion.div>
  )
}