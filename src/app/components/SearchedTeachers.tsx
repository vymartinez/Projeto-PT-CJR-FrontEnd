"use client"

import React, { useState } from 'react'
import Teacher from './Teacher'
import { Teachers } from '../data/Teachers'
import glass from '../../../public/icons/magnifying-glass.svg'
import Image from 'next/image'

export const SearchedTeachers = () => {

  const [teachersDisplaying, setTeachersDisplaying] = useState(12);
  React.useEffect(() => {
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
        <div className='w-full py-8 px-40 flex sm:flex-row flex-col items-center sm:justify-between sm:items-end container mx-auto'>
              <h1 className='xl:text-2xl text-lg lg:text-xl sm:-ml-36 font-semibold text-center'>
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
                  <input type="text" placeholder='Buscar Professor(a)' value={inputValue} onChange={(e) => verifyResults(e)} className='rounded-md sm:m-0 mt-3 text-center py-2 md:px-10 placeholder:text-xs sm:px-5 px-3 lg:placeholder:text-md sm:placeholder:text-sm focus:outline-none'/>
                </div>
              </div>
            </div>
            <div className='container mx-auto w-3/4 sm:w-full h-2 rounded-full bg-primary'></div>
            <div className='text-center font-bold text-md m-5'>
              {heading}
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 grid-rows-2 md:grid-rows-2 xl:grid-rows-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 container mx-auto`}>
            {teachersList.slice(0, teachersDisplaying).map(item => {
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
        </>
    )
}
