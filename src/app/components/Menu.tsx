import React from 'react'
import Image from 'next/image';
import arrowRight from '../../../public/icons/arrow-right.svg'

const Menu = () => {
  return (
    <>   
        <nav className='flex flex-col w-fit bg-button rounded-md absolute right-2 z-[1] before:w-6 before:h-6 before:content-[""] before:block before:mb-6 before:absolute before:bg-button before:rotate-45 before:ml-3 before:right-6 before:-top-2 before:z-[-1]'>
            <div className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Meu perfil
            </div>
            <div className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Editar perfil
            </div>
            <div className='flex justify-center hover:opacity-80'>
            <div className='text-center cursor-pointer py-2 pl-4 pr-1 border-1 border-solid border-sky-800 text-xs font-bold text-red-600'>
                Sair
            </div>
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
        </nav>
   </>
  )
}

export default Menu;