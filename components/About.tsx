import React from 'react'
import FabioAboutImage from '../images/fabio_fiestas_about.jpg'
import { motion } from 'framer-motion'
import Image from 'next/image'


type Props = {}

export default function About({}: Props) {
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
        src='https://i.im.ge/2022/10/09/1G7V5x.fabio-fiestas-about.jpg'
        className='flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:w-64 xl:w-[400px] xl:h-[500px]'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Who I am?</h4>
        <p className='text-base'>
          I&apos;m Fabio Fiestas! and here&apos;s a little about me...<br/>
          I&apos;m a mechanical electrical engineer... wait, what? Exactly I&apos;ve studied some engineer but at some point at my career I discovered my passion for coding. So I started a programming bootcamp for 6 month at Codeable, I&apos;ve learnt Rails/react stack developing many projects in this time. I&apos;m passionate, enthusiastic, I love learn by myself but I also love learning from other people.
          I have previous experience as a ruby on rails developer, I&apos;ve worked supporting the team with some features in the main system. I&apos;m currently learning Nodejs and React Native and building some projects with this stack.
        </p>
      </div>

    </motion.div>
  )
}