import React from 'react'
import Link from 'next/link';

const Error404 = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-center h-screen w-screen'>
        <h1 className='font-bold text-6xl my-2'>404</h1>
        <h1 className='text-3xl my-2'>Página não encontrada</h1>
        <Link href="/feed" 
        className='text-xl my-2 text-center py-3 px-5 bg-gradient-to-b from-secondary to-button rounded-full text-white/90 border hover:text-white/80 border-black'>Clique aqui para retornar ao feed de professores</Link>
      </div>
    </>
  )
}

export default Error404;