import React, { useRef } from 'react'
import camera from '@/../public/icons/camera.svg'
import x from '@/../public/icons/x.svg'
import Image from 'next/image'
import defaultUser from '@/../public/images/default-user.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"

type Props = {
    closeModal: () => void;
}

const EditProfile = ({closeModal} : Props) => {

    const fileRef = useRef<HTMLInputElement>(null)

    const oldPassword: string = "testando"

    const initialValues = {name: "", email: "", course: "", department: "", newPassword: "", passwordConfirmation: "", password: "", oldPassword: oldPassword}

    const validationSchema = Yup.object({
        name: Yup.string().optional(),
        email: Yup.string().email("email inválido").optional(),
        course: Yup.string().optional(),
        department: Yup.string().optional(),
        newPassword: Yup.string().min(6, "New password must be at least 6 characters long").oneOf([Yup.ref("passwordConfirmation")], "Passwords don't match"),
        passwordConfirmation: Yup.string().min(6, "Password confirmation must be at least 6 characters long").oneOf([Yup.ref("newPassword")], "Passwords don't match").when("newPassword", ([newPassword], schema) => {
            if (newPassword) {
                return schema.required("Confirmation password is required");
            }
            return schema;
        }),
        password: Yup.string().oneOf([Yup.ref("oldPassword")], "Passwords don't match").when("newPassword", ([newPassword], schema) => {
            if (newPassword) {
                return schema.required("Old password is required");
            }
            return schema;
        }),
    })

    const onSubmit = (values:any) => {
        console.log(values)
        closeModal();
    }

  return (
    <>
    <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
        <div className='w-full h-full bg-extra relative sm:rounded-3xl sm:w-2/3 sm:h-5/6 lg:w-2/5'>
            <div className='h-9 w-9 absolute right-5 top-5'>
                <Image
                src={x}
                alt="x-icon"
                fill
                sizes='max'
                draggable={false}
                className='cursor-pointer'
                onClick={closeModal}
                />
            </div>
            <div className='flex justify-center items-center w-full h-fit'>
                <div className='relative rounded-full w-36 h-36 border border-gray-500 overflow-hidden mt-10 sm:mt-5'>
                    <Image
                    src={defaultUser}
                    alt='user-pic'
                    fill
                    sizes='max'
                    draggable={false}
                    />
                </div>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className='flex justify-center items-center flex-col'>
                    <div onClick={() => fileRef.current?.click()} className='relative -top-8 border-gray-500 border h-14 w-14 rounded-full bg-white cursor-pointer'>
                        <Image
                        src={camera}
                        alt='camera-icon'
                        fill
                        sizes='max'
                        draggable={false}
                        />
                    </div>
                    <Field name="name" type="text" id="name"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none mb-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs'
                    placeholder='Nome'/>
                    <ErrorMessage name='name' component="span" className='text-red-600 text-xs'/>

                    <Field name="email" type="email" id="email"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Email'/>
                    <ErrorMessage name='email' component="span" className='text-red-600 text-xs'/>

                    <Field name="course" type="text" id="course"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Curso'/>
                    <ErrorMessage name='course' component="span" className='text-red-600 text-xs'/>

                    <Field name="department" type="text" id="department"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Departamento'/>
                    <ErrorMessage name='department' component="span" className='text-red-600 text-xs'/>

                    <Field name="newPassword" type="password" id="newPassword"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Nova senha'/>
                    <ErrorMessage name='newPassword' component="span" className='text-red-600 text-xs'/>

                    <Field name="passwordConfirmation" type="password" id="passwordConfirmation"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Confirmar nova senha'/>
                    <ErrorMessage name='passwordConfirmation' component="span" className='text-red-600 text-xs'/>

                    <Field name="password" type="password" id="password"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm placeholder:text-xs' 
                    placeholder='Senha Atual'/>
                    <ErrorMessage name='password' component="span" className='text-red-600 text-xs'/>

                    <input type="file" ref={fileRef} className='hidden'/>

                    <button type='submit' className='text-center py-2 px-4 bg-button text-white rounded-full mt-8 w-3/5 h-fit sm:w-1/5 text-xs sm:text-sm'>Salvar</button>
                </Form>
            </Formik>
        </div>
    </div>
    </>
  )
}

export default EditProfile;