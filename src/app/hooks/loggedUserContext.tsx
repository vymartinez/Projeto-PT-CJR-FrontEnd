"use client"

import { createContext, ReactNode, useContext, useState } from "react"

type ContextType = {
    User: User;
    isLogged: boolean;
    setIsLogged(value: boolean): void;
}

type Props = {
    children: ReactNode;
    User: User;
}

export const loggedUserContext = createContext<ContextType | null>(null);

export const LoggedUserProvider = ({children, User}: Props) => {
    const [isLogged, setIsLogged] = useState(true);
    return (
    <loggedUserContext.Provider value={{isLogged, setIsLogged, User}}>
        {children}
    </loggedUserContext.Provider>
    );
}

export const useLoggedUser = () => useContext(loggedUserContext);