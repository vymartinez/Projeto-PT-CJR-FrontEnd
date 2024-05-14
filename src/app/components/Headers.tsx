import React from 'react'
import bell from '../../../public/icons/bell.svg'
import arrowLeft from '../../../public/icons/arrow-right.svg'
import logo from '../../../public/images/unb-logo.png'
import Image from 'next/image'
import user from '../../../public/images/default-user.jpg'

export const HeaderLogged = () => {
  return (
    <>
        <header className='w-full h-24 bg-sky-700 flex'>
            <div className='mx-8 my-6 flex-1'>
              <Image
              src={logo}
              alt="logo-unb"
              width={92}
              height={46}
              />
            </div>
            <div className='my-7 mx-16'>
              <Image 
              src={bell}
              alt="bell"
              width={45}
              height={45}
              />
            </div>
            <div className='rounded-full w-16 h-16 border border-solid border-sky-800 border-1 overflow-hidden my-4'>
              <Image
              src={user}
              alt="user-pic"
              style={{
                objectFit: 'cover',
              }}
              />
            </div>
            <div className='my-7 mx-4'>
              <Image 
              src={arrowLeft}
              alt="arrow-left"
              width={40}
              height={40}
              />
            </div>
        </header>
    </>
  )
}

export const HeaderUnlogged = () => {
  return (
    <>
        <header className='w-full h-24 bg-sky-700 flex'>
            <div className='mx-8 my-6 flex-1'>
              <Image
              src={logo}
              alt="logo-unb"
              width={92}
              height={46}
              />
            </div>
            <button className='w-40 h-10 bg-green-600 rounded-xl my-7 mx-8 border border-1 border-white text-white capitalize text-sm'>
                Login
            </button>
        </header>
    </>
  )
}