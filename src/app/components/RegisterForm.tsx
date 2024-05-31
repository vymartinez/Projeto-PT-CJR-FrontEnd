"use client"

import React from 'react';
import { Formik, Field, Form } from 'formik';

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
    <Formik<FormValues>
      initialValues={{
        name: '',
        email: '',
        password: '',
        curso: '',
        departamento: '',
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
      <label htmlFor="foto">Foto:</label>
        <input
            id="foto"
            name="foto"
            type="file"
            accept="image/*"
            className="border rounded-lg p-2"
            onChange={handleFileChange}
        />
        

        <label className={styles.label} htmlFor='name'>
          Nome completo
        </label>
        <Field className={styles.field} id='name' name='name' />

        <label className={styles.label} htmlFor='email'>
          Email
        </label>
        <Field className={styles.field} id='email' name='email' type='email' />

        <label className={styles.label} htmlFor='password'>
          Password
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
        
        <div className='mt-8'>
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
