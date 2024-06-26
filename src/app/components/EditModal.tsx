import React, { useState } from 'react'
import H from '@/../public/icons/h.svg'
import bold from '@/../public/icons/bold.svg'
import italic from '@/../public/icons/italic.svg'
import question from '@/../public/icons/question.svg'
import photo from '@/../public/icons/photo.svg'
import link from '@/../public/icons/link.svg'
import x from '@/../public/icons/x.svg'
import trash from '@/../public/icons/trash.svg'
import Image from 'next/image'
import ConfirmDelete from './ConfirmDelete'
import { patchAssessment, patchComment, postComment } from '@/utils/api'
import { useLoggedUser } from '../hooks/loggedUserContext'

type Props = {
    closeModal: () => void;
    isAComment?: boolean;
    isEditing?: boolean;
    disciplineId: number;
    teacherId: number;
    assessmentId: number;
    commentId?: number;
    content: string;
}

const EditAssessmentModal = ({closeModal, isAComment, isEditing, disciplineId, teacherId, assessmentId, commentId, content}: Props) => {

    const [textArea, setTextArea] = useState(content)
    const [confirmation, setConfirmation] = useState(false);

    const loggedUserCtx = useLoggedUser();

    const handleComment = () => {
        if (loggedUserCtx) {
            postComment({
                content: textArea,
                userId: loggedUserCtx.User.id,
                assessmentId: assessmentId,
            })
        }
        location.reload()
        closeModal()
    }

    const handleEdit = () => {
        if (loggedUserCtx) {
            patchAssessment({
                content: textArea,
                userId: loggedUserCtx.User.id,
                teacherId: teacherId,
                subjectId: disciplineId,
                assessmentId: assessmentId,
            })
        }
        location.reload()
        closeModal()
    }

    const handleEditComment = () => {
        if (commentId && loggedUserCtx) {
            patchComment({
                content: textArea,
                userId: loggedUserCtx.User.id,
                assessmentId: assessmentId,
                commentId: commentId,
            })
        }
        location.reload()
        closeModal()
    }

  return (
    <>
    <div  className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
        <div className=' h-full w-full  bg-secondary flex items-center justify-center flex-col pt-3 md:rounded-xl md:h-2/3 md:w-2/3 md:pt-5 md:p-2 lg:p-4 lg:pt-10 lg:h-2/3'>
            <div onClick={closeModal} className=' absolute top-0 right-0 font-bold text-3xl h-10 w-10 m-5 md:hidden'>
                <Image
                src={x}
                alt='x-icon'
                fill
                sizes='max'
                draggable={false}
                className='cursor-pointer'
                />
            </div> 
            <div className='rounded-xl bg-extra h-1/2 w-5/6 relative mt-3 lg:h-3/4'>
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
                {!isAComment && <textarea maxLength={250} value={textArea} onChange={(e) => setTextArea(e.target.value)} className='w-full h-full rounded-b-xl text-md outline-none flex items-start resize-none px-10 py-5 overflow-hidden lg:text-xl'></textarea>}
                {isAComment && <textarea maxLength={200} value={textArea} onChange={(e) => setTextArea(e.target.value)} className='w-full h-full rounded-b-xl text-md outline-none flex items-start resize-none px-10 py-5 overflow-hidden lg:text-xl'></textarea>}
            </div>
            <div className='flex justify-center w-full h-fit relative bottom-0 mt-12 bg-secondary p-4 rounded-b-xl lg:justify-end'>
                <div className='flex justify-center items-center w-fit md:w-full md:justify-start'>
                    {!isAComment && <div onClick={() => setConfirmation(true)} className='h-6 w-6 relative md:ml-5'>
                        <Image
                        src={trash}
                        alt='trash-icon'
                        fill
                        sizes='max'
                        draggable={false}
                        className='cursor-pointer'
                        />
                    </div>}
                </div>
                <button onClick={closeModal} className='py-2 px-3 text-white bg-red-600 text-sm mx-3 rounded-xl'>
                    Cancelar
                </button>
                {isAComment && !isEditing && <button onClick={handleComment} className='py-2 px-3 bg-lime-600 text-white text-sm mx-3 rounded-xl'>
                  <p>Comentar</p>
                </button>}
                {!isAComment && isEditing && <button onClick={handleEdit} className='py-2 px-3 bg-lime-600 text-white text-sm mx-3 rounded-xl'>
                  <p>Editar</p>
                </button>}
                {isAComment && isEditing && <button onClick={handleEditComment} className='py-2 px-3 bg-lime-600 text-white text-sm mx-3 rounded-xl'>
                  <p>Editar</p>
                </button>}
            </div>
        </div>
    </div>
    {confirmation && <ConfirmDelete closeConfirmation={() => setConfirmation(false)} isAComment={isAComment} id={isAComment && commentId ? commentId : assessmentId}/>}
    </>
  )
}

export default EditAssessmentModal;