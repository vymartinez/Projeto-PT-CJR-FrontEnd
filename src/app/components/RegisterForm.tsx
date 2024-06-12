"use client"

import React from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { postUser } from '@/utils/api';

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
  const router = useRouter();

  const onSubmit = (values: FormValues) => {
    postUser(values);
    router.replace("/");
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

          <label className={styles.label} htmlFor='email'>
            Email
          </label>
          <Field className={styles.field} id='email' name='email' type='email' />

          <label className={styles.label} htmlFor='password'>
            Senha
          </label>
          <Field className={styles.field} id='password' name='password' type='password' />

          <label className={styles.label} htmlFor='course'>
            Curso
          </label>
          <Field className={styles.field} id='course' name='course' />

          <label className={styles.label} htmlFor='department'>
            Departamento
          </label>
          <Field className={styles.field} id='department' name='department' />

          <div className='mt-8 flex justify-center'>
            <button type='submit' className={styles.button}>
              Cadastrar
            </button>
          </div>
        </Form>
    </Formik>
  );
};
