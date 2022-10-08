import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

type Props = {}

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.2}}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 text-white'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-30 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
        {projects.map((project, i) => (
          <div key={i} className='w-screen snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen flex-shrink-0'>
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{duration: 1.5}}
              whileInView={{ opacity: 1, y: 0 }}
              src="https://mellifluous-madeleine-455192.netlify.app/assets/img/tweetable%20individual.png"
              className='max-w-lg md:max-w-md sm:max-w-sm' alt="" />
            <div className='space-x-10'>
              <Link href="">
                <button
                  type='submit'
                  className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
                    View source code
                  </button>
              </Link>
              <Link href="">
                <button
                  type='submit'
                  className='bg-[#f7ab0a] py-2 px-5 rounded-md text-black font-bold text-lg'>
                    View website
                  </button>
              </Link>
            </div>
            <div>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50'>
                  Case Study {i + 1} of {projects.length}:
                </span> Tweetable
              </h4>
              <p className='text-lg text-center md:text-left'>
              This is a web application that attempt to be a replicate of Twitter. A person can sign up with an email. If the user is not logged, he can see all tweets and retweets but he can’t create one. Once the user is logged, can make all the tweets he wants. I hope you enjoy the app!
              </p>
            </div>
          </div>
        ))
        }
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'>

      </div>
    </motion.div>
  )
}