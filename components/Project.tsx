import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'

type Props = {}

type ProjectsType = {
  name: string,
  img: string,
  info: string,
  link_code: string,
  link_web: string
}


export default function Project( project: ProjectsType ) {
  return (
    <div>
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, y: 0 }}
        src={ project.img }
        className='max-w-lg md:max-w-md sm:max-w-sm' alt="" />
      <div className='space-x-6 mt-5 text-center'>
        <Link href={ project.link_code }>
          <button
            type='submit'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
              View source code
            </button>
        </Link>
        <Link href={ project.link_web }>
          <button
            type='submit'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
              View website
            </button>
        </Link>
      </div>
    </div>
  )
}