import React from 'react'
import { motion }  from 'framer-motion'
import Skill from './Skill'

type Props = {}

export default function Skills({}: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration: 1.5}}
        className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover a skill for currently proficiency</h3>

        <div className='grid grid-cols-4 gap-5 pt-14'>
          <Skill proficiency={84} directionLeft imageLink='https://camo.githubusercontent.com/fb369e3a940701ea56e03aa4dacd7385d141734c3d97258234c4fb84256468d9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f727562792f727562792d6f726967696e616c2e737667'/>
          <Skill proficiency={75} directionLeft imageLink='https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667'/>
          <Skill proficiency={80} imageLink='https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667'/>
          <Skill proficiency={80} imageLink='https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667'/>
          <Skill proficiency={85} directionLeft imageLink='https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667'/>
          <Skill proficiency={65} directionLeft imageLink='https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png'/>
          <Skill proficiency={65} imageLink='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png'/>
          <Skill proficiency={75} imageLink='https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667'/>
          <Skill proficiency={80} directionLeft imageLink='https://scontent.flim28-1.fna.fbcdn.net/v/t39.30808-6/299463877_560030875914611_8025210373789510385_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VWjk93f_v50AX_GrwdA&_nc_ht=scontent.flim28-1.fna&oh=00_AT_KDNB_n0-TNRQXkZDm34uEluGr3-noey0Fi7quIBxgxA&oe=6344BAF7'/>
          <Skill proficiency={80} directionLeft imageLink='https://camo.githubusercontent.com/d7e3eaf17315d119bfec4fdc4c99399e5eb924542ba61a5ca21cc0a30f5e2c54/68747470733a2f2f63646e2e69636f6e2d69636f6e732e636f6d2f69636f6e73322f323431352f504e472f3531322f626f6f7473747261705f706c61696e5f776f72646d61726b5f6c6f676f5f69636f6e5f3134363632302e706e67' />
          <Skill proficiency={84} imageLink='https://camo.githubusercontent.com/5fa137d222dde7b69acd22c6572a065ce3656e6ffa1f5e88c1b5c7a935af3cc6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2e737667' />
          <Skill proficiency={70} imageLink='https://seeklogo.com/images/J/jira-logo-FD39F795A7-seeklogo.com.png'/>
        </div>

      </motion.div>
      
    </div>
  )
}