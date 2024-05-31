import React, { useState } from 'react'
import { Comments } from '../data/Comments'
import Image from 'next/image'
import x from '@/../public/icons/customX.svg'
import trash from '@/../public/icons/trash.svg'
import edit from '@/../public/icons/edit.svg'
import curvedArrow from '@/../public/icons/curvedArrow.svg'
import { Users } from '../data/Users'
import { Assessments } from '../data/Assessments'
import Post from './Post'
import ConfirmDelete from './ConfirmDelete'
import EditModal from "./EditModal"

type Props = {
    closeModal: () => void;
    assessmentId: number;
}

const AssessmentComments = ({closeModal, assessmentId} : Props) => {

  const [confirmation, setConfirmation] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const comments = Comments.filter((item) => {
    if (item.assessmentId === assessmentId) {
      return item;
    }
  })
  const user = Comments.map((item) => {
    return Users[item.userId];
  })
  return (
    <>
       <div className='fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50 z-[1] flex-col'>
            <div className='w-full md:w-1/2 h-screen bg-[#ECEBE9] border-l border-l-white border-r border-r-white overflow-y-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
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
              id={assessmentId}
              discipline={user[assessmentId].course}
              profile={user[assessmentId]}
              createdAt={Assessments[assessmentId].createdAt}
              text={Assessments[assessmentId].text}
              commentSection={true}
              />}
                {comments.map((item) => {
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
                              src={user[item.id].photo}
                              alt="user-pic"
                              fill
                              sizes="max"
                              draggable={false}
                              />
                            </div>
                              <h1 className='font-semibold text-xs text-white pr-5 ml-3 items-center flex'>{user[item.userId].name}</h1>
                          </div>
                          <div className='flex items-center justify-center ml-3 mt-3'>
                            <ul className='flex list-disc'>
                              <li className='text-xs hidden text-gray-400 pr-5 md:pr-5 md:block'>{item.createdAt}</li>
                              <li className='text-xs text-gray-400 pr-5 md:pr-5'>{user[item.id].name}</li>
                              <li className='text-xs text-gray-400'>{user[item.id].course}</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <p className='text-xs text-white mt-2 p-3'>{item.text}</p>
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
                              onClick={() => setEditModal(true)}
                              />
                            </div>
                          </div>
                          <div onClick={() => setConfirmation(true)} className='h-5 w-5 relative mx-2'>
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
                    {confirmation && <ConfirmDelete closeConfirmation={() => setConfirmation(false)}/>}
                    {editModal && <EditModal closeModal={() => setEditModal(false)} isAComment={false}/>}
                    </>
                  )
                })}
            </div>
        </div>
      </div>
    </>
  )
}

export default AssessmentComments;