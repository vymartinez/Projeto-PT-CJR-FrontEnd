"use client"

import React, { useEffect, useState } from 'react'
import { useTeachersList } from '../hooks/teachersContext'
import Teacher from './Teacher';

const TeachersList = () => {
    const teachersCtx = useTeachersList()
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
  return (
    <div className={`grid grid-cols-1 grid-rows-2 container mx-auto sm:grid-cols-2 md:grid-rows-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-rows-1 xl:grid-cols-6`}>
      {teachersCtx?.TeachersList.slice(0, teachersDisplaying).map(item => {
        return (
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
        )
        })}
</div>
  )
}

export default TeachersList