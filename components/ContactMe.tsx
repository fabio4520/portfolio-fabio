import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import { showToast } from '../helpers/toastService'

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}
type Props = {}

export default function ContactMe({ }: Props) {
  const {register, handleSubmit} = useForm<Inputs>()

  // const onSubmit: SubmitHandler<Inputs> = (formData) => {
  //   window.location.href = `mailto:fabioleofc@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. \n${formData.message}. \nEmail: ${formData.email}`;
  // };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la solicitud fue exitosa, puedes redirigir al usuario a una página de confirmación o mostrar un mensaje de éxito.
        showToast("Correo enviado exitosamente!", "success")
      } else {
        // Manejar errores si la solicitud no fue exitosa
        console.error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className='h-screen text-white flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

      <div className='flex flex-col space-y-5 mt-6'>
        <h4 className='text-4xl font-semibold text-center'>
          Let&apos;s work together! { " " }
          <span className='decoration-[#f7ab0a]/50 underline'>Let&apos;s talk</span>
        </h4>

        <div className='space-y-2'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>(+51) 961-032-467</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>fabioleofc@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#f7ab0a] h-7 w-7 animate-pulse' />
            <p className='text-2xl'>Lima - Peru</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto'>
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
            <input {...register('name')} type="text" className='contactInput' placeholder='Name'/>
            <input {...register('email')} type="email" className='contactInput' placeholder='Email'/>
          </div>

          <input {...register('subject')} type="text" className='contactInput' placeholder='Subject' />

          <textarea {...register('message')} className='contactInput' placeholder='Message'></textarea>

          <button
            type='submit'
            className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'
          >Submit</button>

        </form>

      </div>
    </div>
  )
}