import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import user from '@/../public/images/default-user.jpg'

const Teacher = ( {  id, name, teacherSubjects, photo } : Teacher) => {

    const router = useRouter()
    const handleClick = (key : number) => {
        router.push(`/teachers/${key}`)
    }

    const filteredDisciplines = Disciplines.filter(item => {
            if (teacherSubjects === teacherSubjects) {
                return item;
            }
    })

    const disciplines = filteredDisciplines.map(item => {
        return item.name;
    })

  return (
    <>
        <div className='flex justify-center w-full'>
            <div className='relative h-52 w-40 bg-white rounded-lg my-5 border-2 hover:border-primary cursor-pointer lg:h-64 lg:w-48' onClick={() => handleClick(id)}>
                <div className='rounded-3xl h-24 w-24 relative bg-center m-auto mt-5 mb-4 lg:w-32 lg:h-32'>
                    <Image
                    src={user}
                    alt='teacher-pic'
                    fill
                    sizes="max"
                    style={{
                        objectFit: 'cover',
                    }}
                    className='rounded-3xl relative'
                    draggable={false}
                    priority={false}
                    />
                </div>
                <div className='flex justify-center flex-col text-center mt-3 md:mt-6'>
                    <p className=' text-sm text-black lg:text-md'>{name}</p>
                    <p className='mt-1 text-gray-400 text-xs md:text-xs md:mt-2 xl:text-sm'>{disciplines.slice(0, 2).join(', ')}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Teacher;