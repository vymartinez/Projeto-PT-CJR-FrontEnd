import React from 'react'
import H from '@/../public/icons/h.svg'
import bold from '@/../public/icons/bold.svg'
import italic from '@/../public/icons/italic.svg'
import question from '@/../public/icons/question.svg'
import photo from '@/../public/icons/photo.svg'
import link from '@/../public/icons/link.svg'
import Image from 'next/image'

const EditAssessmentModal = () => {

  return (
    <>
    <div  className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-[#F1F1F1]/60 z-[1] flex-col'>
        <div className='h-[5/8] w-2/3 bg-secondary rounded-full flex items-center flex-col'>
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
    </div>
    </>
  )
}

export default EditAssessmentModal;