'use client'

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import unb from "@/../public/images/unb.avif"
import logo from "@/../public/images/unb-logo.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const validationSchema = Yup.object({
    email: Yup.string().email("Endereço de email inválido").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  const initialValues = { email: "", password: ""};

  const handleSubmit = (values: any) => {
    console.log(values);
  }

  return (
    <div className="w-full flex min-h-screen bg-extra flex-col h-0 xl:flex-row">
      <div className='xl:w-3/4 xl:h-screen w-full h-[1000px] relative'>
        <Image src={unb} alt="unb-pic" fill sizes='max'/>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center mx-auto">
        <div className='relative w-1/4 h-[12.5%] my-4'>
          <Image src={logo} alt='unb-logo' fill sizes='max'/>
        </div>
      <div className="flex flex-col justify-center items-center my-auto h-1/2">
        <h2 className="mb-16 w-3/4 flex items-center justify-center h-36 text-center text-black text-xs md:text-2xl lg:text-3xl xl:text-5xl font-normal">Avaliação de Professores</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="flex flex-col">
            <div className="mb-4">
              <Field
                name="email"
                type="email"
                id= "email"
                placeholder ="Email"
                className= "mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-550 sm:text-sm rounded-md"
              />
            </div>
            <div className="mb-4">
              <Field
                name="password" 
                type="password"
                id= "password"
                placeholder="Senha"
                className= "mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-550 sm:text-sm rounded-md"
              />
              <div className="inline-flex space-x-12">
                <button
                type= "submit"
                className= "mt-16 w-full bg-secondary text-white py-2 px-14 rounded-md hover:bg-[#075985]/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-black"
                >
                Entrar
                </button>
                <button
                  type= "button"
                  className="mt-16 w-full bg-secondary text-white py-2 px-12 rounded-md hover:bg-[#075985]/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-black whitespace-nowrap"
                >
                  Criar Conta
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      </div>
    </div>
  );
}
