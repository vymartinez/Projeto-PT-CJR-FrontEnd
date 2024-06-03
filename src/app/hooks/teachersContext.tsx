"use client"

import { getTeachers } from "@/utils/api";
import { createContext, useState, ReactNode, useContext } from "react"

type ContextType = {
    TeachersList: Teacher[];
    setTeachersList: (teacher: Teacher[]) => void;
    Teachers: Teacher[];
}

type Props = {
    children: ReactNode;
    Teachers: Teacher[];
}

export const TeachersContext = createContext<ContextType | null>(null);

export const TeachersContextProvider = ({children, Teachers}: Props) => {

    const [TeachersList, setTeachersList] = useState(Teachers);
    return (
    <TeachersContext.Provider value={{TeachersList, setTeachersList, Teachers}}>
        {children}
    </TeachersContext.Provider>
    );
}   

export const useTeachersList = () => useContext(TeachersContext);