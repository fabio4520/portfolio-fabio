import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(18,22,25)] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Fabio&apos;s portfolio</title>
      </Head>
      
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>
    
      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}


    </div>
  )
}

export default Home
