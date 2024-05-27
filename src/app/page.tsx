'use client'

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';


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
    <div className="w-full flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full bg-background shadow-md rounded-lg overflow-hidden">
        <div className="flex h-full">
          <div className="w-1/2 bg-gray-200">
          <img className="w-full h-full" src="/images/university.png" />
         </div>
         <div className="w-1/2">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="mb-6 w-96 h-36 text-center text-black text-5xl font-normal">Avaliação de Professores</h2>
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
      </div>
    </div>
  );
}
