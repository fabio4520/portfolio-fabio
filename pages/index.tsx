import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { client } from '../sanity'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, skills, projects, socials }: Props) => {
  return (
    <div className='bg-[rgb(18,22,25)] h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Fabio&apos;s portfolio</title>
      </Head>
      
      {/* Header */}
      <Header socials={ socials } />

      {/* Hero */}
      <section id="hero" className='snap-center'>
        <Hero pageInfo={ pageInfo } />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About pageInfo={ pageInfo } />
      </section>
    
      {/* Experience */}
      <section id='experience' className='snap-start'>
        <WorkExperience experiences={ experiences } />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={ skills} />
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects projects={ projects } />
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <ArrowUpCircleIcon
           className='h-10 w-10 rounded-full filter text-[#f7ab0a]/40 hover:text-[#f7ab0a]'
          />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home


export async function getStaticProps() {
  const pageInfo:PageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const socials: Social[] = await client.fetch(`*[_type == "social"]`)
  const skills: Skill[] = await client.fetch(`*[_type == "skill"]`)
  const projects: Project[] = await client.fetch(`
  *[_type == "project"]{
    ...,
    technologies[]->
  }
  `)
  const experiences: Experience[] = await client.fetch(`
  *[_type == "experience"]{
    ...,
    technologies[]->
  }
  `)
  
  return {
    props: {
      pageInfo,
      socials,
      skills,
      projects,
      experiences
    },
    revalidate: 10
  };
}