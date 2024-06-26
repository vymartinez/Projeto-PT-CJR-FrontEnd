"use client"

import React, { useState } from 'react'
import bell from '@/../public/icons/bell.svg'
import logo from '@/../public/images/unb-logo.png'
import Image from 'next/image'
import user from '@/../public/images/default-user.jpg'
import Menu from '../components/Menu'
import Link from 'next/link'
import { useLoggedUser } from '../hooks/loggedUserContext'

type Props = {
  photo?: {
    type: string;
    data: number[];
  }
}

export const HeaderLogged = ({photo} : Props) => {

  const [menu, setMenu] = useState(false);

  return (
    <>
        <header className='w-screen h-24 bg-primary flex z-[-1]'>
            <Link href={'/feed'} className='relative w-16 h-8 mx-8 my-8 border border-white border-1 sm:w-24 sm:h-12 sm:my-6'>
              <Image
              src={logo}
              alt="logo-unb"
              fill
              sizes="max"
              draggable={false}
              />
            </Link>
            <div className='my-7 mx-8 flex-1 justify-end flex sm:mx-16'>
              <Image 
              src={bell}
              alt="bell"
              width={45}
              height={45}
              className='cursor-pointer w-auto h-auto'
              draggable={false}
              />
            </div>
            <div onClick={() => setMenu(!menu)} className='relative mr-3 rounded-full w-12 h-12 cursor-pointer my-6 border border-solid border-background border-1 overflow-hidden sm:w-16 sm:h-16 sm:my-4'>
              <Image
              src={photo ? String.fromCharCode(...photo.data) : user}
              alt="user-pic"
              fill
              sizes='max'
              draggable={false}
              style={{
                objectFit: 'cover',
              }}
              />
            </div>
        </header>
            {menu && <Menu/>}
    </>
  )
}

export const HeaderUnlogged = () => {

  return (
    <>
        <header className='w-full h-24 bg-primary flex justify-between'>
            <Link href={'/feed'} className='relative w-16 h-8 mx-8 my-8 border border-white border-1 sm:w-24 sm:h-12 sm:my-6'>
              <Image
              src={logo}
              alt="logo-unb"
              fill
              sizes="max"
              draggable={false}
              />
            </Link>
            <Link href="/" className='bg-gradient-to-b from-sky-800 to-button rounded-xl my-8 mx-6 border border-1 border-background text-white/90 flex justify-center items-center capitalize text-sm w-28 h-8 md:w-40 md:h-10 md:mx-8 md:my-7'>
                Login
            </Link>
        </header>
    </>
  )
}

export const ActiveHeader = () => {

  const loggedUserCtx = useLoggedUser();

  return (
    <>
      {loggedUserCtx?.isLogged ? <HeaderLogged photo={loggedUserCtx?.User.photo}/> : <HeaderUnlogged/>}
    </>
  )
}