import React, { useState } from 'react'
import H from '@/../public/icons/h.svg'
import bold from '@/../public/icons/bold.svg'
import italic from '@/../public/icons/italic.svg'
import question from '@/../public/icons/question.svg'
import photo from '@/../public/icons/photo.svg'
import link from '@/../public/icons/link.svg'
import Image from 'next/image'
import { Teachers } from '../data/Teachers'
import { Disciplines } from '../data/Disciplines'
import OptionsMenu from './OptionsMenu'

type Props = {
    closeModal: () => void;
}

const AssessmentModal = ({closeModal}: Props) => {

    const [textArea, setTextArea] = useState('')
    const [disciplines, setDisciplines] = useState('')
    const [teachers, setTeachers] = useState('')
    const [disciplineOptionsMenu, setDisciplineOptionsMenu] = useState(false)
    const [teacherOptionsMenu, setTeacherOptionsMenu] = useState(false)

    const teacherOptions = Teachers.filter(teacher => {
        if (teacher.name.toLowerCase().includes(teachers.toLowerCase())) {
            return teacher;
        }
    })
    const disciplinesOptions = Disciplines.filter(discipline => {
        if (discipline.name.toLowerCase().includes(disciplines.toLowerCase())) {
            return discipline;
        }
    })

    const handleDisciplinesOptions = () => {
        setDisciplineOptionsMenu(!disciplineOptionsMenu)
    }

    const handleTeacherOptions = () => {
        setTeacherOptionsMenu(!teacherOptionsMenu)
    }

    const handleSendAssessment = () => {
        closeModal()
    }

    const handleTeacherInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTeachers(e.target.value);
        if (teachers === '') {
            setTeacherOptionsMenu(true)
        }
        if (e.target.value === '') {
            setTeacherOptionsMenu(false)
        }
    }

    const handleDisciplineInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDisciplines(e.target.value);
        if (disciplines === '') {
            setDisciplineOptionsMenu(true)
        }
        if (e.target.value === '') {
            setDisciplineOptionsMenu(false)
        }
    }

  return (
    <>
        <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#F1F1F1]/60 z-[1] flex-col'>
            <div className='bg-secondary h-full w-full flex flex-col p-4 md:h-2/3 md:w-2/3 md:rounded-xl'>
                <div className='flex flex-col'>
                    <div className='pt-3 px-3 flex items-center'>
                        <input type='text' value={teachers} onChange={(e) => handleTeacherInput(e)} placeholder='Nome do Professor' className='text-sm text-left w-full rounded-full px-3 py-2 outline-none'></input>
                        <div onClick={handleTeacherOptions} className='h-0 w-0 relative -ml-6 border-x-8 border-x-transparent border-t-8 border-t-gray-600 cursor-pointer'></div>
                    </div>
                        <div className='flex justify-center'>
                            {teacherOptionsMenu && <OptionsMenu options={teacherOptions} setItem={setTeachers} onClick={handleTeacherOptions}/>}
                        </div>
                </div>
                <div className='flex flex-col'>
                    <div className='pt-3 px-3 flex items-center'>
                        <input type='text' value={disciplines} onChange={(e) => handleDisciplineInput(e)} placeholder='Disciplina' className='text-sm text-left pl-3 rounded-full w-full py-2 outline-none'></input>
                        <div onClick={handleDisciplinesOptions} className='h-0 w-0 relative -ml-6 border-x-8 border-x-transparent border-t-8 border-t-gray-600 cursor-pointer'></div>
                    </div>
                        <div className='flex justify-center'>
                            {disciplineOptionsMenu && <OptionsMenu options={disciplinesOptions} setItem={setDisciplines} onClick={handleDisciplinesOptions}/>}
                        </div>
                </div>
                <div className='h-3/4 w-5/6 container mx-auto pt-3 mt-3'>
                <div className='rounded-xl bg-extra h-full w-full top-0 relative'>
                    <div className='flex justify-start w-full rounded-t-xl p-3 border-b-2 border-b-gray-600 h-3 pb-7'>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={bold}
                            alt='bold-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={italic}
                            alt='italic-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={H}
                            alt='h-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={link}
                            alt='link-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={photo}
                            alt='photo-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                        <div className='relative h-5 w-5 ml-1'>
                            <Image
                            src={question}
                            alt='question-icon'
                            fill
                            sizes='max'
                            draggable={false}
                            className='cursor-pointer'
                            />
                        </div>
                    </div>
                    <textarea maxLength={300} value={textArea} onChange={(e) => setTextArea(e.target.value)} className='w-full h-full rounded-b-xl text-md outline-none flex items-start resize-none px-10 py-5 overflow-hidden'></textarea>
                </div>
                </div>
            <div className='flex justify-center w-full h-fit relative bottom-0 mt-12 bg-secondary p-4 rounded-b-xl lg:justify-end'>
                <button onClick={closeModal} className='py-2 px-3 text-white bg-red-600 text-sm mx-3 rounded-xl'>
                    Cancelar
                </button>
                <button onClick={handleSendAssessment} className='py-2 px-3 bg-primary text-white text-sm mx-3 rounded-xl'>
                    Avaliar
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default AssessmentModal