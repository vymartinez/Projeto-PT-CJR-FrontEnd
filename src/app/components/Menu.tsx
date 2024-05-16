import React from 'react'

const Menu = () => {
  return (
    <>   
        <nav className='flex flex-col w-fit bg-button rounded-md absolute right-10 before:w-6 before:h-6 border border-sky-800 border-1 before:content-[""] before:block before:mb-6 before:absolute before:bg-button before:rotate-45 before:ml-3 before:border-t-sky-800 before:border-r-sky-800 before:-top-2 before:z-[-1] z-[1]'>
            <div className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Meu perfil
            </div>
            <div className='text-center cursor-pointer py-2 px-4 border-b border-1 border-solid border-white text-xs font-semibold text-white/90 hover:opacity-80'>
                Editar perfil
            </div>
            <div className='text-center cursor-pointer py-2 px-4 border-1 border-solid border-sky-800 text-xs font-bold text-red-600 hover:opacity-80'>
                Sair
            </div>
        </nav>
   </>
  )
}

export default Menu;