import React from 'react'
import Image from 'next/image'

const Teacher = ( {  name, discipline, department, photo } : Teacher) => {
    if (photo === '') {
        photo = '/images/default-user.jpg'
    }
  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='relative lg:h-64 lg:w-48 h-52 w-40 bg-white rounded-lg my-5 hover:opacity-80 cursor-pointer'>
                <div className='rounded-3xl lg:w-32 lg:h-32 h-24 w-24 relative bg-center m-auto mt-5 mb-4 xs:mb-3'>
                    <Image
                    src={photo}
                    alt='teacher-pic'
                    fill
                    sizes="max"
                    style={{
                        objectFit: 'cover',
                    }}
                    className='rounded-3xl relative'
                    draggable={false}
                    />
                </div>
                <div className='flex justify-center flex-col text-center mt-3 md:mt-6'>
                    <p className='lg:text-md text-sm text-black'>{name}</p>
                    <p className='xl:text-sm md:text-xs text-xs  text-gray-400 md:mt-2 mt-1'>{discipline}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher;