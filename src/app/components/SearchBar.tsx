"use client"

import React, { useState } from 'react'
import Teacher from './Teacher'
import { Teachers } from '../data/Teachers'
import glass from '../../../public/icons/magnifying-glass.svg'

export const SearchBar = () => {

    let teachersDisplaying = 0;
    const [inputValue, setInputValue] = useState('')
    const [teachersList, setTeachersList] = useState(Teachers)

    const verifyResults = (e : React.ChangeEvent<HTMLInputElement>) => {
        teachersDisplaying = 0;
        const searchWord = e.target.value;
        setInputValue(searchWord)
        const filter = Teachers.filter((teacher) => teacher.name.toLowerCase().includes(searchWord.toLowerCase()))
        setTeachersList(filter)
    }   

    return (
        <>
        <div className='w-full py-8 px-40 flex justify-between items-end'>
              <h1 className='text-2xl font-semibold'>
                Novos Professores
              </h1>
              <input type="text" placeholder='Buscar Professor(a)' value={inputValue} onChange={(e) => verifyResults(e)} className='rounded-lg w-1/4 text-center py-2'/>
            </div>
            <div className={`grid grid-cols-6`}>
            {teachersList.map(item => {
            if(teachersDisplaying > 6) {
                return;
            }
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
