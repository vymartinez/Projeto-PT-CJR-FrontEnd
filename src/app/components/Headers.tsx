"use client"

import React, { useState } from 'react'
import bell from '../../../public/icons/bell.svg'
import arrowLeft from '../../../public/icons/arrow-right.svg'
import logo from '../../../public/images/unb-logo.png'
import Image from 'next/image'
import user from '../../../public/images/default-user.jpg'
import Menu from '../components/Menu'

export const HeaderLogged = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => openMenu ? setOpenMenu(false) : setOpenMenu(true);

  return (
    <>
        <header className='w-full h-24 bg-primary flex z-[-1]'>
            <div className='mx-8 my-6 border border-white border-1'>
              <Image
              src={logo}
              alt="logo-unb"
              width={92}
              height={46}
              />
            </div>
            <div className='my-7 mx-16 flex-1 justify-end flex'>
              <Image 
              src={bell}
              alt="bell"
              width={45}
              height={45}
              className='cursor-pointer'
              />
            </div>
            <div onClick={handleClick} className='rounded-full w-16 h-16 border border-solid border-background border-1 overflow-hidden my-4 cursor-pointer'>
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
              className='cursor-pointer'
              />
            </div>
        </header>
            {openMenu && <Menu />}
    </>
  )
}

export const HeaderUnlogged = () => {
  return (
    <>
        <header className='w-full h-24 bg-primary flex justify-between'>
            <div className='mx-8 my-6 border border-white border-1'>
              <Image
              src={logo}
              alt="logo-unb"
              width={92}
              height={46}
              />
            </div>
            <button className='md:w-40 md:h-10 md:mx-8 md:my-7 bg-button rounded-xl my-8 mx-6 border border-1 border-background text-white/90 capitalize text-sm w-28 h-8'>
                Login
            </button>
        </header>
    </>
  )
}