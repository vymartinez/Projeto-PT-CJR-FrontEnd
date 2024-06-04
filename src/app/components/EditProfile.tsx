import React, { useRef } from 'react'
import camera from '@/../public/icons/camera.svg'
import x from '@/../public/icons/x.svg'
import Image from 'next/image'
import defaultUser from '@/../public/images/default-user.jpg'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from "yup"
import { sendPhoto } from '@/utils/api'

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
        newPassword: Yup.string().min(6, "Nova senha deve ter pelo menos 6 caracteres").oneOf([Yup.ref("passwordConfirmation")], "As senhas não coincidem"),
        passwordConfirmation: Yup.string().min(6, "Nova senha deve ter pelo menos 6 caracteres").oneOf([Yup.ref("newPassword")], "As senhas não coincidem").when("newPassword", ([newPassword], schema) => {
            if (newPassword) {
                return schema.required("Confirmação de senha é obrigatória");
            }
            return schema;
        }),
        password: Yup.string().oneOf([Yup.ref("oldPassword")], "As senhas não coincidem").when("newPassword", ([newPassword], schema) => {
            if (newPassword) {
                return schema.required("Senha antiga é obrigatória");
            }
            return schema;
        }),
    })

    const onSubmit = (values:any) => {
        console.log(values)
        handleSubmit()
        closeModal();
    }

    const handleSubmit = () => {
        if (fileRef.current?.files && fileRef.current.files.length > 0) {
            const file = fileRef.current.files[0];
            const data = new FormData();
            data.append('file', file);
            console.log(data);
            sendPhoto({photo: data, userId: 1}); //ajeitar após autenticação
        }
    }

  return (
    <>
    <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
        <div className='w-full h-full bg-extra relative sm:rounded-3xl sm:w-2/3 sm:h-fit lg:w-2/5'>
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
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none placeholder:text-xs mb-2 sm:w-1/2 sm:placeholder:text-sm'
                    placeholder='Nome'/>
                    <ErrorMessage name='name' component="span" className='text-red-600 text-xs'/>

                    <Field name="email" type="email" id="email"
                    className='rounded-full w-2/3 h-fit py-2 px-3 placeholder:text-xs focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Email'/>
                    <ErrorMessage name='email' component="span" className='text-red-600 text-xs'/>

                    <Field name="course" type="text" id="course"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none placeholder:text-xs my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Curso'/>
                    <ErrorMessage name='course' component="span" className='text-red-600 text-xs'/>

                    <Field name="department" type="text" id="department"
                    className='rounded-full w-2/3 h-fit py-2 px-3 placeholder:text-xs focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Departamento'/>
                    <ErrorMessage name='department' component="span" className='text-red-600 text-xs'/>

                    <Field name="newPassword" type="password" id="newPassword"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none placeholder:text-xs my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Nova senha'/>
                    <ErrorMessage name='newPassword' component="span" className='text-red-600 text-xs'/>

                    <Field name="passwordConfirmation" type="password" id="passwordConfirmation"
                    className='rounded-full w-2/3 h-fit py-2 px-3 placeholder:text-xs focus:outline-none my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Confirmar nova senha'/>
                    <ErrorMessage name='passwordConfirmation' component="span" className='text-red-600 text-xs'/>

                    <Field name="password" type="password" id="password"
                    className='rounded-full w-2/3 h-fit py-2 px-3 focus:outline-none placeholder:text-xs my-2 sm:w-1/2 sm:placeholder:text-sm' 
                    placeholder='Senha Atual'/>
                    <ErrorMessage name='password' component="span" className='text-red-600 text-xs'/>

                    <input type="file" ref={fileRef} className='hidden'/>

                    <button type='submit' className='text-center py-2 mb-4 px-4 bg-button text-white text-xs rounded-full mt-8 mb- w-3/5 h-fit sm:w-1/5 sm:text-sm'>Salvar</button>
                </Form>
            </Formik>
        </div>
    </div>
    </>
  )
}

export default EditProfile;