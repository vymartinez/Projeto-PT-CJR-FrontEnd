"use client"

import React, { useState, useEffect } from 'react'
import Teacher from './Teacher'
import { Teachers } from '../data/Teachers'
import glass from '../../../public/icons/magnifying-glass.svg'
import Image from 'next/image'

export const SearchedTeachers = () => {

  const [teachersDisplaying, setTeachersDisplaying] = useState(12);
  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth > 1280) {
        setTeachersDisplaying(12)
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280){
        setTeachersDisplaying(8)
      } else {
        setTeachersDisplaying(6)
      }
    }
  });
    const [inputValue, setInputValue] = useState('')
    const [teachersList, setTeachersList] = useState(Teachers)
    const [heading, setHeading] = useState('')

    const verifyResults = (e : React.ChangeEvent<HTMLInputElement>) => {
      const searchWord = e.target.value;
      setInputValue(searchWord)
      const filter = Teachers.filter((teacher) => teacher.name.toLowerCase().includes(searchWord.toLowerCase()))
      setTeachersList(filter)
      if (searchWord === '') {
        setHeading('')
      } else {
          setHeading(`Nenhum resultado para '${searchWord}'`)
        if (filter.length > 0) {
          let noun = 'resultado encontrado';
          filter.length == 1 ? noun : noun= 'resultados encontrados';
          setHeading(`${filter.length} ${noun} para '${searchWord}'`)
        }
      }
    }   

    return (
        <>
        <div className='w-full py-8 px-40 flex container mx-auto flex-col items-center sm:flex-row sm:justify-between sm:items-end'>
              <h1 className='font-semibold text-center text-lg sm:-ml-36 lg:text-xl xl:text-2xl'>
                Lista de Professores
              </h1>
              <div className='w-1/4'>
                <div className='flex justify-center'>
                <div className='relative mt-3 ml-2 left-8 w-5 h-5 bg-white flex'>
                  <Image
                  src={glass}
                  fill
                  sizes='max'
                  alt="magnifying-glass"
                  draggable={false}
                  />
                </div>
                  <input type="text" placeholder='Buscar Professor(a)' value={inputValue} onChange={(e) => verifyResults(e)}
                  className='rounded-md text-center px-3 py-2 mt-3 placeholder:text-xs focus:outline-none sm:px-5 sm:m-0 sm:placeholder:text-sm md:px-10 lg:placeholder:text-md'/>
                </div>
              </div>
            </div>
            <div className='container h-2 rounded-full bg-primary mx-auto w-3/4 sm:w-full'></div>
            <div className='text-center font-bold text-md m-5'>
              {heading}
            </div>
            <div className={`grid grid-cols-1 grid-rows-2 container mx-auto sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-rows-1 xl:grid-cols-6`}>
            {teachersList.slice(0, teachersDisplaying).map(item => {
              return (
                <>
                    <Teacher
                    id={item.id}
                    key={item.id}
                    name={item.name} 
                    disciplinesId={item.disciplinesId}
                    department={item.department}
                    photo={item.photo}
                    createdAt={item.createdAt}
                    updatedAt={item.updatedAt}
                    />
                </>
              )
              })}
              </div>   
        </>
    )
}
