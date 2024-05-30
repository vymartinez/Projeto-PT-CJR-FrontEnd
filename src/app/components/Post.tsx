import React, { useState } from 'react'
import Image from 'next/image'
import baloon from '@/../public/icons/balloon.svg'
import trash from '@/../public/icons/trash.svg'
import edit from '@/../public/icons/edit.svg'
import EditModal from './EditModal'
import AssessmentComments from './AssessmentComments'
import { Comments } from '../data/Comments'
import ConfirmDelete from './ConfirmDelete'
import Link from 'next/link'

type Props = {
  profile: Teacher | User;
  id: number;
  discipline: string;
  createdAt: string;
  text: string;
  commentSection: boolean;
}

/*const data = new Intl.DateTimeFormat('pt-br', {
  dateStyle: 'short',
  timeStyle:'long',
}).format()
console.log(data)*/

const Post = ({profile, id, discipline, createdAt, text, commentSection} : Props) => {
  const [modal, setModal] = useState(false);
  const [isAComment, setIsAComment] = useState(false);
  const [comments, setComments] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const handleEdit = () => {
    setIsAComment(false)
    setModal(true)
  }

  const handleComment = () => {
    setIsAComment(true)
    setModal(true)
  }

  var commentsLength = 0;

  Comments.filter(comment => { 
    if (comment.userId === profile.id) {
      commentsLength += 1;
    }
  })

  return (
    <>
      <div className='rounded-xl w-11/12 h-full bg-secondary p-4 m-2 mb-5 border border-extra'>
        <div className='flex flex-col'>
          <div className='flex justify-center'>
            <Link href={`/users/${profile.id}`} className='relative h-10 w-10 overflow-hidden rounded-full bg-white'>
              <Image 
              src={profile.photo}
              alt="user-pic"
              fill
              sizes="max"
              draggable={false}
              />
            </Link>
              <div className='font-semibold text-xs text-white pr-5 ml-3 items-center flex'>
                <Link href={`/users/${profile.id}`}>{profile.name}</Link>
              </div>
          </div>
          <div className='flex items-center justify-center ml-3 mt-3'>
            <ul className='flex list-disc'>
              <li className='text-xs hidden text-gray-400 pr-5 md:pr-5 md:block'>{createdAt}</li>
              <li className='text-xs text-gray-400 pr-5 md:pr-5'>{profile.name}</li>
              <li className='text-xs text-gray-400'>{discipline}</li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-xs text-white mt-2 p-3'>{text}</p>
        </div>
        <div className='flex p-2'>
          <div className='flex items-center'>
            <div className='h-5 w-5 relative'>
              <Image
              src={baloon}
              alt="comment-icon"
              fill
              sizes="max"
              className='cursor-pointer'
              draggable={false}
              onClick={handleComment}
              />
            </div>
            <div className='flex items-center my-0 ml-2 md:my-0'>
              {!commentSection && <p onClick={() => commentsLength > 0 ? setComments(true) : null} className={`text-xs text-white ${commentsLength > 0 ? 'cursor-pointer hover:underline' : ''}`}>
                {commentsLength == 1 ? commentsLength + ' comentário' : commentsLength + " comentários"}
              </p>}
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
              onClick={handleEdit}
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
      {modal && <EditModal closeModal={() => setModal(false)} isAComment={isAComment}/>}
      {comments && <AssessmentComments closeModal={() => setComments(false)} assessmentId={id}/>}
      {confirmation && <ConfirmDelete closeConfirmation={() => setConfirmation(false)}/>}
    </>
  )
}

export default Post;