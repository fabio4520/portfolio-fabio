import React from 'react'
import { motion } from 'framer-motion'

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
          <div className='flex space-x-2 my-2'>
          <img
            className='h-7 w-7 rounded-full'
            src="https://camo.githubusercontent.com/fb369e3a940701ea56e03aa4dacd7385d141734c3d97258234c4fb84256468d9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f727562792f727562792d6f726967696e616c2e737667"
            alt="ruby"
          />
          <img
            className='h-7 w-7 rounded-full'
            src="https://camo.githubusercontent.com/fb369e3a940701ea56e03aa4dacd7385d141734c3d97258234c4fb84256468d9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f727562792f727562792d6f726967696e616c2e737667"
            alt="ruby"
          />
          <img
            className='h-7 w-7 rounded-full'
            src="https://camo.githubusercontent.com/fb369e3a940701ea56e03aa4dacd7385d141734c3d97258234c4fb84256468d9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f727562792f727562792d6f726967696e616c2e737667"
            alt="ruby"
          />
          
          {/* tech used */}
          {/* tech used */}
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