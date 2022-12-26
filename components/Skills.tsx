import React from 'react'
import { motion }  from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings';
import { urlFor } from '../sanity';
// import skills from '../data/skills'

type Props = {
  skills: SkillType[];
}

export default function Skills({ skills }: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1.5}}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover a skill for currently proficiency</h3>

        <div className='grid grid-cols-5 gap-5 pt-14'>
          {
            skills?.slice(0, skills.length / 2).map((skill) => (
              <Skill
                key={skill._id}
                proficiency={skill.progress}
                imageLink={urlFor(skill.image).url()}
                alt={skill.title}
              />
            ))
          }
          {
            skills?.slice( skills.length / 2, skills.length).map((skill) => (
              <Skill
                key={skill._id}
                proficiency={skill.progress}
                imageLink={urlFor(skill.image).url()}
                alt={skill.title}
                directionLeft={true}
              />
            ))
          }
        </div>

      </motion.div>
      
    </div>
  )
}