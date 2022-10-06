import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center'>
      <div>
        {/* Social icons */}
        <SocialIcon
          url='https://www.linkedin.com/in/fabio-fiestas/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url='https://www.instagram.com/fabio4520/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon url='https://github.com/fabio4520'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      {/* Avatar */}
      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Let&apos;s work together!</p>
      </div>
    </header>
  )
}