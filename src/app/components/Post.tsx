import React from 'react'
import Image from 'next/image'
import baloon from '../../../public/icons/balloon.svg'
import trash from '../../../public/icons/trash.svg'
import edit from '../../../public/icons/edit.svg'

type Props = {
  profile: Teacher;
}

const Post = ({profile} : Props) => {
  return (
    <>
      <div className='rounded-xl w-11/12 h-full bg-secondary p-4 m-2'>
        <div className='flex'>
          <div className='relative h-10 w-10 overflow-hidden rounded-full bg-white'>
            <Image 
            src={profile.photo}
            alt="user-pic"
            fill
            sizes="max"
            />
          </div>
          <div className='flex items-center ml-3'>
            <h1 className='font-semibold text-xs text-white pr-5'>{profile.name}</h1>
            <ul className='flex list-disc'>
              <li className='text-xs text-gray-400 pr-5'>15/05/2024, às 20:14</li>
              <li className='text-xs text-gray-400 pr-5'>Morty Gamer</li>
              <li className='text-xs text-gray-400'>Viagem Interdimensional</li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-xs text-white mt-2 p-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nunc laoreet mauris molestie orci mollis vestibulum.
            Donec nunc quam, tristique a mauris nec, efficitur maximus velit.
            Nullam sit amet dui sed felis malesuada blandit.Nullam ornare id turpis at lobortis.
            Donec feugiat, libero et viverra facilisis, enim leo pretium ex, in ornare nisl neque vitae dolor</p>
        </div>
        <div className='flex p-2'>
          <div className='h-5 w-5 relative'>
            <Image
            src={baloon}
            alt="comment-icon"
            fill
            sizes="max"
            className='cursor-pointer'
            />
          </div>
          <div className='flex items-center ml-1'>
            <p className='text-xs text-white'>2 comentários</p>
          </div>
          <div className='grow flex justify-end'>
            <div className='h-5 w-5 relative mx-2'>
              <Image 
              src={edit}
              alt="edit-icon"
              fill
              sizes="max"
              className='cursor-pointer'
              />
            </div>
          </div>
          <div className='h-5 w-5 relative mx-2'>
            <Image
            src={trash}
            alt="trash-icon"
            fill
            sizes="max"
            className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Post;