import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import experiences from '../data/experience'
import { start } from 'repl'

type Experience = {
  company: string,
  img: string,
  position: string,
  start_date: string,
  end_date: string,
  technologies: Array<Tech>,
  duties: Array<Item>
}

type Tech = {
  name: string,
  src: string
}

type Item = {
  item: string
}
export default function ExperienceCard( experience: Experience) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const start_date = new Date(experience.start_date)
  const end_date = new Date(experience.end_date)
  const stringStartDate = months[start_date.getMonth()] + ", " + start_date.getFullYear()
  const stringEndDate = months[end_date.getMonth()] + ", " + end_date.getFullYear()
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center mt-10 bg-[#43586939] p-7 hover:opacity-100 opacity-60 transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:m-w-[200px] xl:m-h-[200px] object-cover object-center"
        src={experience.img}
        alt={ experience.company }
      />

      <div className='px-0 md:px-10'>
        <div className='flex justify-between'>
          <div>
            <h4 className='text-3xl font-light'>{ experience.position }</h4>
            <p className='font-bold text-xl mt-1'>{ experience.company }</p>
          </div>
          <div className='flex gap-x-2'>
            {
              experience.technologies.map((tech, i) => (
                <Image
                  key={i}
                  src={tech.src}
                  alt={tech.name}
                  height={32}
                  width={32}
                  objectFit='contain'
                />
              ))
            }
          </div>
        </div>
        
        <p className='uppercase py-2 text-gray-400'>{ stringStartDate } - { stringEndDate }</p>

        <ul className='list-disc space-y-1 ml-5 text-lg'>
          {
            experience.duties.map((dutie, i) => (
              <li key={i}>{ dutie.item }</li>
            ))
          }
        </ul>
      </div>

    </article>
  )
}