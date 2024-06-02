'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import unb from '../../../public/images/university.png';
import { RegisterForm } from '../components/RegisterForm'; // Ajuste o caminho conforme necessário


const inter = Inter({ subsets: ['latin'] });

const Cadastro = () => {
  // Defina os estilos que serão passados para o RegisterForm
  const formStyles = {
    label: 'text-gray-600 font-semibold', // Adicione ou ajuste classes conforme necessário
    field: 'border border-gray-300 p-2 rounded w-full mt-1', // Adicione ou ajuste classes conforme necessário
    button: 'bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700', // Adicione ou ajuste classes conforme necessário
  };

  return (
    <div className="w-full flex min-h-screen flex-col h-0 xl:flex-row overflow-y-auto overflow-x-hidden">
      <div className="xl:w-3/4 xl:h-screen w-full h-[300px] relative">
        <Image src={unb} alt="Logo"  fill sizes='max'/>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-600 text-center">Avaliação de professores</h2>
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
