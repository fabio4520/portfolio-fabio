import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fabio&apos;s portfolio</title>
      </Head>
      
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id="hero">
        <Hero/>
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}


    </div>
  )
}

export default Home
