import React from 'react'
import H from '@/../public/icons/h.svg'
import bold from '@/../public/icons/bold.svg'
import italic from '@/../public/icons/italic.svg'
import question from '@/../public/icons/question.svg'
import photo from '@/../public/icons/photo.svg'
import link from '@/../public/icons/link.svg'
import Image from 'next/image'

type Props = {
    closeModal: () => void;
}

const AssessmentModal = ({closeModal}: Props) => {
  return (
    <>
        <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#F1F1F1]/60 z-[1] flex-col'>
            <div className='bg-secondary rounded-t-xl h-1/5 w-2/3 flex flex-col p-4'>
                <div className='py-3 px-3 flex items-center'>
                    <input type='text' placeholder='Nome do Professor' className='text-sm text-left w-full rounded-full pl-3 py-2 outline-none'></input>
                    <div className='h-0 w-0 relative -ml-6 border-x-8 border-x-transparent border-t-8 border-t-gray-600 cursor-pointer'></div>
                </div>
                <div onClick={closeModal} className='py-3 px-3 flex items-center'>
                    <input type='text' placeholder='Disciplina' className='text-sm text-left pl-3 rounded-full w-full py-2 outline-none'></input>
                    <div className='h-0 w-0 relative -ml-6 border-x-8 border-x-transparent border-t-8 border-t-gray-600 cursor-pointer'></div>
                </div>
                <div className='w-2/3 bg-secondary rounded-xl flex items-center flex-col'>
            <div className='rounded-xl bg-extra h-3/4 w-5/6 top-0 relative'>
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
                <textarea maxLength={500} className='w-full h-full rounded-b-xl text-md outline-none flex items-start resize-none px-10 py-5 overflow-hidden'></textarea>
            </div>
        </div>
            <div className='flex justify-end w-full h-fit relative bottom-0 mt-12 bg-secondary p-4 rounded-b-xl'>
                <button onClick={closeModal} className='py-2 px-3 text-white bg-red-600 text-sm mx-3 rounded-xl'>
                    Cancelar
                </button>
                <button className='py-2 px-3 bg-primary text-white text-sm mx-3 rounded-xl'>
                    Avaliar
                </button>
            </div>
            </div>
        </div>
    </>
  )
}

export default AssessmentModal