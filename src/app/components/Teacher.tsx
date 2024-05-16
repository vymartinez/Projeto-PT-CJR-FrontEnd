import React from 'react'
import Image from 'next/image'

const Teacher = ( {  name, discipline, department, photo } : Teacher) => {
    if (photo === '') {
        photo = '/images/default-user.jpg'
    }
  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='absolute h-64 w-48 bg-white rounded-lg my-5 hover:opacity-80 cursor-pointer'>
                <div className='rounded-3xl w-32 h-32 relative bg-center m-auto my-5'>
                    <Image
                    src={photo}
                    alt='teacher-pic'
                    fill
                    style={{
                        objectFit: 'cover',
                    }}
                    className='rounded-3xl relative'
                    />
                </div>
                <div className='flex justify-center flex-col text-center mt-6'>
                    <p className='text-md text-black'>{name}</p>
                    <p className='text-sm text-gray-400 mt-2'>{discipline}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher;