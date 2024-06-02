"use client"

import React, { ChangeEvent } from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Nome é obrigtório'),
  email: Yup.string().required('Email é obrigatório'),
  password: Yup.string().min(11, 'A senha deve conter no mínimo 11 caracteres').required('Senha é obrigatório'),
  curso: Yup.string().required('Por favor informe seu curso'),
  departamento: Yup.string().required('Por favor informe o seu departamento'),
})

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
  curso: string;
  departamento: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ styles }) => (
  <>
    <Formik <FormValues>
      initialValues={{
        name: '',
        email: '',
        password: '',
        curso: '',
        departamento: '',
      }}

      validationSchema={validationSchema}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
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

        <label className={styles.label} htmlFor='curso'>
          Curso
        </label>
        <Field className={styles.field} id='curso' name='curso' />

        <label className={styles.label} htmlFor='departamento'>
          Departamento
        </label>
        <Field className={styles.field} id='departamento' name='departamento' />
        
        <div className='mt-8 flex justify-center'>
          <button type='submit' className={styles.button}>
            Cadastrar
          </button>
        </div>
      </Form>
    </Formik>
  </>
);
function handleFileChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
}

