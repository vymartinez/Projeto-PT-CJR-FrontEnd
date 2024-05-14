import React from 'react'
import Image from 'next/image'
import logo from '../../../public/images/unb-logo.png'

const HeaderUnlogged = () => {
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

export default HeaderUnlogged;