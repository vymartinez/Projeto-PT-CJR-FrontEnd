"use client"

import React, { useState } from 'react'
import glass from '@/../public/icons/magnifying-glass.svg'
import Image from 'next/image'
import { useTeachersList } from '../hooks/teachersContext'
import AssessmentModal from './AssessmentModal'

export const SearchBar = () => {

  const [modal, setModal] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const teachersCtx = useTeachersList()
  const [heading, setHeading] = useState('')

  if (teachersCtx) {
  const verifyResults = (e : React.ChangeEvent<HTMLInputElement>) => {
    const searchWord = e.target.value;
    setInputValue(searchWord)
    const filter = teachersCtx.Teachers.filter((teacher) => teacher.name.toLowerCase().includes(searchWord.toLowerCase()))
    teachersCtx.setTeachersList(filter)
    if (searchWord === '') {
      setHeading('')
    } else {
        setHeading(`Nenhum resultado para '${searchWord}'`)
      if (filter.length > 0) {
        let phrase = 'resultado encontrado';
        filter.length == 1 ? phrase : phrase = 'resultados encontrados';
        setHeading(`${filter.length} ${phrase} para '${searchWord}'`)
      }
    }
  }

  const handleModal = () => {
    setModal(!modal)
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
      <div className='flex flex-col items-center md:items-start md:flex-row md:mx-auto md:container'>
        <div className='flex justify-start px-3 mt-5'>
          <button onClick={handleModal} className='w-fit h-fit rounded-md text-white py-2 px-4 bg-gradient-to-b from-secondary to-button text-xs ml-5'>Nova Avaliação</button>
        </div>
        <div className='font-bold text-md my-5 mx-auto'>
          {heading}
        </div>
      </div>
        {modal && <AssessmentModal closeModal={handleModal}/>}
    </>
  )
}
return null;
}