'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import unb from '../../../public/images/unb.avif';
import unbLogo from '@/../public/images/unb-logo.png'
import { RegisterForm } from '../components/RegisterForm'; // Ajuste o caminho conforme necessário


const inter = Inter({ subsets: ['latin'] });

const Cadastro = () => {
  // Defina os estilos que serão passados para o RegisterForm
  const formStyles = {
    label: 'text-gray-600 text-sm md:text-md font-semibold', // Adicione ou ajuste classes conforme necessário
    field: 'border border-gray-300 p-2 rounded w-full mt-1', // Adicione ou ajuste classes conforme necessário
    button: 'mt-16 sm:w-32  md:w-36 lg:40 w-full text-xs sm:text-sm md:text-md bg-secondary text-white py-2 md:px-10 rounded-md hover:bg-[#075985]/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-black whitespace-nowrap', // Adicione ou ajuste classes conforme necessário
  };

  return (
    <div className="w-full flex min-h-screen bg-extra flex-col items-center h-0 xl:flex-row overflow-y-auto overflow-x-hidden">
      <div className='relative block h-10 w-20 sm:h-20 sm:w-40 xl:hidden mt-5'>
        <Image src={unbLogo} alt='unb-logo' fill sizes='max'/>
      </div>
      <div className="xl:w-3/4 xl:h-screen w-full h-[300px] relative xl:block hidden">
        <Image src={unb} alt="Logo" fill sizes='max'/>
      </div>
      <div className="w-1/2 px-8 py-5 flex flex-col justify-center">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-600 text-center w-full">Avaliação de Professores</h2>
        <div className="mt-4 flex items-center justify-between">
          <span className="border-b border-red-700 w-1/5 lg:w-1/4"></span>
          <a href="#" className="text-xs text-center text-gray-500 uppercase">Cadastre-se</a>
          <span className="border-b w-1/5 border-red-700 lg:w-1/4"></span>
        </div>
        <div className="mt-8">
          <RegisterForm styles={formStyles} />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
