import * as React from 'react';

interface EmailTemplateProps {
  name: string,
  email: string,
  subject: string,
  message: string
}

export default function EmailTemplate({ name,email,subject, message}: EmailTemplateProps) {
  return (
    <div className='bg-light-300 p-10 rounded-lg shadow-lg'>
      <h1 className='font-bold text-xl uppercase tracking-widest'>Información Portafolio Fabio</h1>
      <div className='font-semibold text-lg flex flex-col gap-1 mt-2'>
        <p>Nombres: <span className='font-light'>{ `${name}` }</span></p>
        <p>Email: <span className='font-light'>{ `${email}` }</span></p>
        <p>Subject: <span className='font-light'>{`${subject}`}</span></p>
        <p>Mensaje: <span className='font-light'>{`${message}`}</span></p>
      </div>
    </div>
  )
}