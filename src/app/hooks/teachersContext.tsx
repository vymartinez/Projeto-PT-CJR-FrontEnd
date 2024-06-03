"use client"

import { createContext, useState, ReactNode, useContext } from "react"

type ContextType = {
    TeachersList: Teacher[];
    setTeachersList: (teacher: Teacher[]) => void;
}

export const InitialValue = Teachers;
export const TeachersContext = createContext<ContextType | null>(null);

export const TeachersContextProvider = ({children}: {children : ReactNode}) => {
    const [TeachersList, setTeachersList] = useState(InitialValue);
    return (
    <TeachersContext.Provider value={{TeachersList, setTeachersList}}>
        {children}
    </TeachersContext.Provider>
    );
}   

export const useTeachersList = () => useContext(TeachersContext);