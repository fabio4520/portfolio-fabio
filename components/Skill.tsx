import React from 'react'
import {motion} from 'framer-motion'

type Props = {
  directionLeft?: boolean;
  imageLink: string;
  proficiency: number;
  alt: string
}

export default function Skill({ directionLeft, imageLink, proficiency, alt }: Props) {
  return (
    <div className='group relative flex cursor-pointer text-center'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={imageLink}
        alt={ alt }
        className='rounded-full border border-gray-500 object-cover w-24 h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{ proficiency }%</p>
        </div>
      </div>

    </div>
  )
}
