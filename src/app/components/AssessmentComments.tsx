import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import x from '@/../public/icons/customX.svg'
import trash from '@/../public/icons/trash.svg'
import edit from '@/../public/icons/edit.svg'
import curvedArrow from '@/../public/icons/curvedArrow.svg'
import Post from './Post'
import ConfirmDelete from './ConfirmDelete'
import EditModal from "./EditModal"
import userPic from "@/../public/images/default-user.jpg"
import { comment } from 'postcss'

type Props = {
    closeModal: () => void;
    assessmentId: number;
    profile: User;
    discipline: string;
    disciplineId: number;
    teacherId: number;
    createdAt: string;
    content: string;
    commentsList: Comment[];
}

const AssessmentComments = ({closeModal, profile, discipline, disciplineId, teacherId, createdAt, content, assessmentId, commentsList} : Props) => {

  const [confirmation, setConfirmation] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [commentId, setCommentId] = useState(0);

  const handleEdit = (id: number) => {
    setEditModal(true);
    setCommentId(id);
  }

  const handleDelete = (id: number) => {
    setConfirmation(true);
    setCommentId(id);
  }

  return (
    <>
       <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
            <div className='w-full h-screen bg-[#ECEBE9] border-l border-l-white border-r border-r-white overflow-y-scroll md:w-1/2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
              <div className='absolute h-10 w-10 right-10 top-10'>
                <Image
                src={x}
                alt='x-icon'
                fill
                sizes='max'
                draggable={false}
                className='cursor-pointer'
                onClick={closeModal}
                />
              </div>
            <div className='h-fit flex justify-center items-center flex-col mt-12'>
              {<Post
              assessmentId={assessmentId}
              discipline={discipline}
              profile={profile}
              createdAt={createdAt}
              content={content}
              commentSection={true}
              commentsList={commentsList}
              teacherId={teacherId}
              disciplineId={disciplineId}
              />}
                {commentsList.map((item) => {
                  const date = new Intl.DateTimeFormat('pt-br', {
                    dateStyle: 'short',
                    timeStyle:'short',
                  }).format(Date.parse(item.created_at))
                  return (
                    <>
                    <div key={item.id} className='w-11/12 h-fit flex items-center justify-center'> 
                      <div className='relative h-10 w-10 mb-24 ml-2 mr-5'>
                        <Image
                        src={curvedArrow}
                        alt='arrow-icon'
                        fill
                        sizes='max'
                        draggable={false}
                        />
                      </div>
                      <div className='rounded-xl w-4/5 h-fit p-4 border border-white mb-3 bg-secondary sm:flex-1'>
                        <div className='flex flex-col'>
                          <div className='flex justify-center'>
                            <div className='relative h-10 w-10 overflow-hidden rounded-full bg-white'>
                              <Image 
                              src={userPic}
                              alt="user-pic"
                              fill
                              sizes="max"
                              draggable={false}
                              />
                            </div>
                              <h1 className='font-semibold text-xs text-white pr-5 ml-3 items-center flex'>{profile.name}</h1>
                          </div>
                          <div className='flex items-center justify-center ml-3 mt-3'>
                            <ul className='flex list-disc'>
                              <li className='text-xs hidden text-gray-400 pr-5 md:pr-5 md:block'>{date}</li>
                              <li className='text-xs text-gray-400 pr-5 md:pr-5'>{profile.name}</li>
                              <li className='text-xs text-gray-400'>{discipline}</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <p className='text-xs text-white mt-2 p-3'>{item.content}</p>
                        </div>
                        <div className='flex p-2'>
                          <div className='flex items-center'>
                            <div className='flex items-center my-0 ml-2 md:my-0'>
                            </div>
                          </div>
                          <div className='grow flex justify-end'>
                            <div className='h-5 w-5 relative mx-2'>
                              <Image 
                              src={edit}
                              alt="edit-icon"
                              fill
                              sizes="max"
                              className='cursor-pointer'
                              draggable={false}
                              onClick={() => handleEdit(item.id)}
                              />
                            </div>
                          </div>
                          <div onClick={() => handleDelete(item.id)} className='h-5 w-5 relative mx-2'>
                            <Image
                            src={trash}
                            alt="trash-icon"
                            fill
                            sizes="max"
                            className='cursor-pointer'
                            draggable={false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })}
            </div>
        </div>
      </div>
      {confirmation && <ConfirmDelete closeConfirmation={() => setConfirmation(false)} isAComment={true} id={commentId}/>}
      {editModal && <EditModal closeModal={() => setEditModal(false)} isAComment={true} assessmentId={assessmentId} isEditing={true} disciplineId={disciplineId} teacherId={teacherId} commentId={commentId}/>}
    </>
  )
}

export default AssessmentComments;