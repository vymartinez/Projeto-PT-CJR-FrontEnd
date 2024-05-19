import React from 'react'
import Image from 'next/image'

type Props = {
  profile: Teacher;
}

const Post = ({profile} : Props) => {
  return (
    <>
      <div className='rounded-xl w-4/5 h-full bg-secondary p-4 m-2'>
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
            <h1 className='font-bold text-xs text-white'>{profile.name}</h1>
          </div>
        </div>

      </div>
    </>
  )
}

export default Post;