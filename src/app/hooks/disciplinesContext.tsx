"use client"

import { createContext, ReactNode, useContext } from "react"

type ContextType = {
    Disciplines: Discipline[];
}

type Props = {
    children: ReactNode;
    Disciplines: Discipline[];
}

export const DisciplinesContext = createContext<ContextType | null>(null);

export const DisciplinesContextProvider = ({children, Disciplines} : Props) => {
    return (
    <DisciplinesContext.Provider value={{Disciplines}}>
        {children}
    </DisciplinesContext.Provider>
    );
}   

export const useDisciplines = () => useContext(DisciplinesContext);