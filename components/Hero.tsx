import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import FabioHeroImage from '../images/fabio_fiestas.jpg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

export default function Hero({ }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! The name's Fabio Fiestas",
      "Guy-who-loves-to-dream.tsx",
      "<ButLovesCoffeeMore/>"
    ],
    loop: true,
    delaySpeed: 2000
  })
  // Sky is the limit. You never live same experience twice.
  // Frank McCourt
  return (
    <div className='text-white h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <div className='h-44 w-44 mx-auto relative'>
        <Image src={FabioHeroImage}
          className="rounded-full"
          layout='fill'
          objectFit='cover'
          alt='Fabio Fiestas' />
      </div>
      <div className='z-30'>
        <h2 className='text-gray-500 text-sm uppercase pb-2 tracking-[12px]'>Full stack developer</h2>
        <h1 className='text-4xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
      </div>

      <blockquote className="p-1 italic border-l-4 text-gray-300 border-neutral-500">
        <div className='flex flex-row text-2xl'>
          <div className="h-3 text-3xl text-left">
          &rdquo;
          </div>
          <p className='px-4 text-center'>
            Sky is the limit. You never live same experience twice.
          </p>
          <div className="h-3 text-3xl text-right">
          &rdquo;
          </div>
        </div>
        <cite>- Frank McCourt</cite>
      </blockquote>
      
      <div className='pt-1 z-30'>
        <Link href="#about">
          <button className='heroButton'>About</button>
        </Link>
        <Link href="#experience">
          <button className='heroButton'>Experience</button>
        </Link>
        <Link href="#skills">
          <button className='heroButton'>Skills</button>
        </Link>
        <Link href="#projects">
          <button className='heroButton'>Projects</button>
        </Link>
      </div>

      
    </div>
  )
}