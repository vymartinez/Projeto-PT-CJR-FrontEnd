import React from 'react'
import Image from 'next/image'

const Teacher = ( {  name, discipline, department, photo } : Teacher) => {
    if (photo === '') {
        photo = '/images/default-user.jpg'
    }
  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='relative h-52 w-40 bg-white rounded-lg my-5 border-2 hover:border-primary cursor-pointer lg:h-64 lg:w-48'>
                <div className='rounded-3xl h-24 w-24 relative bg-center m-auto mt-5 mb-4 lg:w-32 lg:h-32'>
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
                    <p className=' text-sm text-black lg:text-md'>{name}</p>
                    <p className='mt-1 text-gray-400 text-xs md:text-xs md:mt-2 xl:text-sm'>{discipline}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher;