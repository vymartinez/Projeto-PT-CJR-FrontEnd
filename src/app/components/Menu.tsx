import React, { useState } from 'react'
import Image from 'next/image';
import arrowRight from '@/../public/icons/arrow-right.svg'
import Link from 'next/link';
import EditProfile from './EditProfile';
import danger from "@/../public/icons/danger.svg"
import ConfirmDelete from './ConfirmDelete';

const Menu = () => {
  const [modal, setModal] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    setModal(true);
  }

  return (
    <>   
        <nav className='flex flex-col w-fit bg-gradient-to-t from-secondary to-button rounded-md absolute right-2'>
          <div className=' border-x-[12px] border-x-transparent border-b-[12px] -mt-3 border-b-button top-0 absolute ml-14 sm:ml-12 sm:-mt-2 sm:border-b-8 sm:border-x-8'></div>
            <Link href={'/users/1'} className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white hover:opacity-80'>
                Meu perfil
            </Link>
            <div onClick={handleClick} className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white hover:opacity-80'>
                Editar perfil
            </div>
            <div className='flex justify-center hover:opacity-80 cursor-pointer border-b border-1 border-white'>
              <Link href="/" className='text-center py-2 pl-4 pr-1 text-xs font-bold text-red-700'>
                Sair
              </Link>
              <div className='relative h-3 w-3 mt-3'>
                <Image 
                src={arrowRight}
                alt="arrow-right"
                fill
                className='cursor-pointer'
                draggable={false}
                />
              </div>
            </div>
            <div onClick={() => setConfirmation(true)} className='flex justify-center hover:opacity-80 cursor-pointer'>
              <div className='text-center py-2 pl-4 pr-1 text-xs font-bold text-yellow-400'>
                Excluir
              </div>
              <div className='relative h-3 w-3 mt-2.5'>
                <Image
                src={danger}
                alt='danger-icon'
                fill
                sizes='max'
                draggable={false}
                className='cursor-pointer'
                />
              </div>
            </div>
        </nav>
      {modal && <EditProfile closeModal={() => setModal(false)}/>}
      {confirmation && <ConfirmDelete closeConfirmation={() => setConfirmation(false)}/>}
   </>
  )
}

export default Menu;