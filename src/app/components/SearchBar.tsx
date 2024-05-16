"use client"

import React, { useState } from 'react'

export const SearchBar = () => {
    
    const [inputValue, setInputValue] = useState('')

    const verifyResults = (e : React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }   

    return (
        <input type="text" placeholder='Buscar Professor(a)' value={inputValue} onChange={(e) => verifyResults(e)} className='rounded-lg w-1/4 text-center py-2'/>
    )
}
