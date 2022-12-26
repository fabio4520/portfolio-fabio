import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Social } from '../typings'

type Props = {
  socials: Social[]
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition = {{
          duration: 1.5
        }}
        className='flex flex-row items-center'>
        {/* Social icons */}

        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor='rgb(229, 198, 135)'
            bgColor='transparent'
          />
        ))}

       
      </motion.div>

      {/* Avatar */}
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center text-[#E5C687] cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='rgb(229, 198, 135)'
          bgColor='transparent'
        />
        <Link href='#contact'>
          <p className='uppercase hidden md:inline-flex text-sm text-[#E5C687]'>Let&apos;s work together!</p>        
        </Link>
      </motion.div>
    </header>
  )
}