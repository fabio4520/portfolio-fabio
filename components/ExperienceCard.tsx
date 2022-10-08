import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center mt-10 bg-[#43586939] p-7 hover:opacity-100 opacity-60 transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 rounded-full xl:m-w-[200px] xl:m-h-[200px] object-cover object-center"
        src='https://mallaventura.pe/uploads/shares/marcas/Logos%20marcas/smart-fit-vertical.png'
        alt='Smartfit'
      />

      <div className='px-0 md:px-10'>
        <div className='flex justify-between'>
          <div>
            <h4 className='text-3xl font-light'>Rails developer junior</h4>
            <p className='font-bold text-xl mt-1'>SmartFit</p>
          </div>
          <div className='flex gap-x-2'>
            <Image
              src="https://abrudz.github.io/logos/Ruby.svg"
              alt="ruby"
              height={28}
              width={28}
            />
            <Image
              src="https://abrudz.github.io/logos/Ruby.svg"
              alt="ruby"
              height={28}
              width={28}
            />
            <Image
              src="https://abrudz.github.io/logos/Ruby.svg"
              alt="ruby"
              height={28}
              width={28}
            />
            <Image
              src="https://abrudz.github.io/logos/Ruby.svg"
              alt="ruby"
              height={28}
              width={28}
            />
          </div>
        </div>
        
        <p className='uppercase py-2 text-gray-400'>Started work... - Ended...</p>

        <ul className='list-disc space-y-1 ml-5 text-lg'>
          <li>I was part of SmartSystem Latam team which is a team of backend developers that solve issues of the system, add new features and works in a new project to integrate into the main system.</li>
          <li> I was a ror developer junior who works daily with the Ruby on Rails framework in the main system of the company that impacts more than 3 million clients, around 13 countries, in more than 1000 units throughout Brazil and Latin America. </li>
          <li>I also configured an email report from Sql server and create a landing in php with no knowledge in this programming language at the first. </li>
        </ul>
      </div>

    </article>
  )
}