'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import unb from "@/../public/images/unb.avif"
import logo from "@/../public/images/unb-logo.png"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLoggedUser } from '../hooks/loggedUserContext';
import { getToken } from '@/utils/api';
import { isAxiosError } from 'axios';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

const [invalid, setInvalid] = useState(false);

const router = useRouter();

const loggedUserCtx = useLoggedUser();

const validationSchema = Yup.object({
    email: Yup.string().email("Endereço de email inválido").required("Required"),
    password: Yup.string().required("Required"),
  });
  
  const initialValues = { email: "", password: ""};

  const handleSubmit = async (values: any) => {
    try {
      const accessToken = await getToken(values);
        document.cookie = `access_token=${accessToken}; path=/; max-age=${7 * 24 * 60 * 60}; Secure; SameSite=Strict`
        loggedUserCtx?.setIsLogged(true)
        router.refresh()
    } catch(error) {
      if (isAxiosError(error) && error.response?.status === 401) {
        setInvalid(true)
      }
    }
  }
    useEffect(() => {
      if (loggedUserCtx?.isLogged) {
        router.replace("/feed")
      }
    });

  return (
    <div className="w-full flex min-h-screen bg-extra flex-col h-0 xl:flex-row overflow-y-auto overflow-x-hidden">
      <div className='xl:w-3/4 xl:h-screen w-full h-[300px] relative'>
        <Image src={unb} alt="unb-pic" fill sizes='max'/>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col items-center justify-center mx-auto">
        <div className='relative w-1/4 h-[12.5%] my-4'>
          <Image src={logo} alt='unb-logo' fill className='object-contain' sizes='max'/>
        </div>
      <div className="flex flex-col justify-center items-center my-auto h-1/2 w-1/2">
        <h2 className="mb-16 w-3/4 flex items-center justify-center h-36 text-center text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal">Avaliação de Professores</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="flex flex-col w-full items-center">
            <div className="mb-4 max-w-80">
              <Field
                name="email"
                type="email"
                id= "email"
                placeholder ="Email"
                className= "mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-550 sm:text-sm rounded-md mb-4"
              />
              <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
              <Field
                name="password" 
                type="password"
                id= "password"
                placeholder="Senha"
                className= "mt-1 block w-full px-3 py-2 mb-4 border border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-550 sm:text-sm rounded-md"
              />
              <ErrorMessage name='password' component='div' className='text-red-500 text-sm' />
              {invalid && <p className="text-red-500 text-sm text-center">Email ou senha inválidos</p>}
              <div className="flex justify-center gap-12">
                <button
                onClick={handleSubmit}
                type= "submit"
                className= "mt-16 sm:w-32 md:w-36 lg:w-40 w-full bg-secondary text-white py-2 px-6 lg:px-8 rounded-md hover:bg-[#075985]/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-black"
                >
                Entrar
                </button>
                <Link href="/register"
                  type= "button"
                  className="mt-16 sm:w-32 md:w-36 lg:40 w-full bg-secondary text-white py-2 px-6 lg:px-8 rounded-md hover:bg-[#075985]/70 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-black whitespace-nowrap"
                >
                  Criar Conta
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      </div>
    </div>
  );
}
