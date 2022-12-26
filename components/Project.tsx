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
    <div>
      <motion.img
        initial={{ y: -300, opacity: 0 }}
        transition={{duration: 1.5}}
        whileInView={{ opacity: 1, y: 0 }}
        src={ urlFor(project?.image).url() }
        className='max-w-lg md:max-w-md sm:max-w-sm' alt="" />
      <div className='space-x-6 mt-5 text-center'>
        <Link href={ project.linkToSourceCode ? project.linkToSourceCode : '#' }>
          <button
            type='button'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
              View source code
            </button>
        </Link>
        <Link href={ project?.linkToWebsite }>
          <button
            type='button'
            className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
              View website
            </button>
        </Link>
      </div>
    </div>
  )
}