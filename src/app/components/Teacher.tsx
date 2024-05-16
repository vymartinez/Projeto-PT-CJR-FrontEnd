import React from 'react'
import Image from 'next/image'

const Teacher = ( {  name, discipline, department, photo } : Teacher) => {
    if (photo === '') {
        photo = '/images/default-user.jpg'
    }
  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='relative lg:h-64 lg:w-48 md:h-52 md:w-40 bg-white rounded-lg my-5 hover:opacity-80 cursor-pointer'>
                <div className='rounded-3xl lg:w-32 lg:h-32 md:h-24 md:w-24 relative bg-center m-auto my-5'>
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
                    <p className='lg:text-md text-black'>{name}</p>
                    <p className='xl:text-sm md:text-xs text-gray-400 mt-2'>{discipline}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher;