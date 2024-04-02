import React from 'react'
import Link from 'next/link';
import { motion } from 'framer-motion'
import { Project as ProjectType } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  project: ProjectType;
}


export default function Project({ project }: Props ) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        src={urlFor(project?.image).url()}
        className='max-w-xs md:max-w-md md:max-h-72' alt={ project.title} />
      <div className='flex gap-2 md:block md:space-x-6 mt-5 md:text-center'>
        <Link href={ project.linkToSourceCode ? project.linkToSourceCode : '#' }>
          <button
            type='button'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold md:text-lg'>
              View source code
            </button>
        </Link>
        <Link href={ project?.linkToWebsite }>
          <button
            type='button'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold md:text-lg'>
              View website
            </button>
        </Link>
      </div>
    </div>
  )
}