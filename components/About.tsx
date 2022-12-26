import React from 'react'
import FabioAboutImage from '../images/fabio_fiestas_about.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'


type Props = {
  pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.2}}
      className='h-screen text-white flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(pageInfo.profilePic).url()}
        className='flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[400px] xl:h-[500px]'
        alt={ pageInfo?.name }
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Who I am?</h4>
        <p className='text-base'>
          { pageInfo?.backgroundInformation }
        </p>
      </div>

    </motion.div>
  )
}