"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postUser } from '@/utils/api';
import { isAxiosError } from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres').required('Senha é obrigatória'),
  course: Yup.string().required('Por favor informe seu curso'),
  department: Yup.string().required('Por favor informe o seu departamento'),
});

interface RegisterFormProps {
  styles: {
    label: string;
    field: string;
    button: string;
  };
}

interface FormValues {
  name: string;
  email: string;
  password: string;
  course: string;
  department: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ styles }) => {

  const [invalidName, setInvalidName] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);

  const router = useRouter();

  const onSubmit = async (values: FormValues) => {
    try {
      await postUser(values);
      router.push('/');
    } catch(error) {
      if ( isAxiosError(error) && error.response?.status === 409 && error.response.request.response.includes('email')) {
        setInvalidEmail(true);
      } else if (isAxiosError(error) && error.response?.status === 409) {
        setInvalidName(true);
      }
    }
  };

  return (
    <Formik<FormValues>
      initialValues={{
        name: '',
        email: '',
        password: '',
        course: '',
        department: '',
      }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
        <Form>
          <label className={styles.label} htmlFor='name'>
            Nome completo
          </label>
          <Field className={styles.field} id='name' name='name' />
          <ErrorMessage name='name' component='div' className='text-red-500 text-sm' />

          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <Field className={styles.field} id='email' name='email' type='email' />
          <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />

          <label className={styles.label} htmlFor='password'>
            Senha
          </label>
          <Field className={styles.field} id='password' name='password' type='password' />
          <ErrorMessage name='password' component='div' className='text-red-500 text-sm' />

          <label className={styles.label} htmlFor='course'>
            Curso
          </label>
          <Field className={styles.field} id='course' name='course' />
          <ErrorMessage name='course' component='div' className='text-red-500 text-sm' />

          <label className={styles.label} htmlFor='department'>
            Departamento
          </label>
          <Field className={styles.field} id='department' name='department' />
          <ErrorMessage name='department' component='div' className='text-red-500 text-sm' />

          {invalidEmail && <p className="text-red-500 text-sm text-center mt-10">Email já existente</p>}
          {invalidName && <p className="text-red-500 text-sm text-center mt-10">nome já existente</p>}

          <div className='mt-8 flex justify-center'>
            <button type='submit' className={styles.button}>
              Cadastrar
            </button>
          </div>
        </Form>
    </Formik>
  );
};
