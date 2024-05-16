"use client"

import React, { useState } from 'react'
import Teacher from './Teacher'
import { Teachers } from '../data/Teachers'
import glass from '../../../public/icons/magnifying-glass.svg'
import Image from 'next/image'

export const SearchBar = () => {

    const largeScreen = window.matchMedia('(min-width: 1536px)').matches
    const [inputValue, setInputValue] = useState('')
    const [teachersList, setTeachersList] = useState(Teachers)

    const verifyResults = (e : React.ChangeEvent<HTMLInputElement>) => {
        const searchWord = e.target.value;
        setInputValue(searchWord)
        const filter = Teachers.filter((teacher) => teacher.name.toLowerCase().includes(searchWord.toLowerCase()))
        setTeachersList(filter)
    }   

    return (
        <>
        <div className='w-full py-8 px-40 flex justify-between items-end container mx-auto'>
              <h1 className='xl:text-2xl text-lg lg:text-xl -ml-10 font-semibold'>
                Novos Professores
              </h1>
              <div className='w-1/4'>
                <div className='absolute mt-2.5 ml-2 w-5 h-5 bg-white'>
                  <Image
                  src={glass}
                  alt="magnifying-glass"
                  fill
                  />
                </div>
                <input type="text" placeholder='Buscar Professor(a)' value={inputValue} onChange={(e) => verifyResults(e)} className='rounded-md text-center py-2 px-10 lg:placeholder:text-md placeholder:text-sm'/>
              </div>
            </div>
            <div className='container mx-auto w-full h-2 rounded-full bg-primary'></div>
            <div className={`grid grid-cols-2 grid-rows-2 xl:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 container mx-auto`}>
            {teachersList.slice(0, 6).map(item => {
              return (
                <>
                    <Teacher 
                    key={item.key}
                    name={item.name} 
                    discipline={item.discipline}
                    department={item.department}
                    photo={item.photo}
                    />
                </>
              )
              })}
              </div>
              {largeScreen &&
                <div className={`grid grid-cols-2 grid-rows-2 xl:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 container mx-auto`}>
                {teachersList.slice(7, 12).map(item => {
                  return (
                    <>
                        <Teacher 
                        key={item.key}
                        name={item.name} 
                        discipline={item.discipline}
                        department={item.department}
                        photo={item.photo}
                        />
                    </>
                  )
                  })}
              </div>} 
        </>
    )
}
