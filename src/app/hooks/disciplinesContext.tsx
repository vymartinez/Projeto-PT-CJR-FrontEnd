"use client"

import { createContext, ReactNode, useContext } from "react"

type ContextType = {
    InitialValue: Discipline[];
}

type Props = {
    children: ReactNode;
    InitialValue: Discipline[];

}

export const DisciplinesContext = createContext<ContextType | null>(null);

export const DisciplinesContextProvider = ({children, InitialValue} : Props) => {
    return (
    <DisciplinesContext.Provider value={{InitialValue}}>
        {children}
    </DisciplinesContext.Provider>
    );
}   

export const useDisciplines = () => useContext(DisciplinesContext);