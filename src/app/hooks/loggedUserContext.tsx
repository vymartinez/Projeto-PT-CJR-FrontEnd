"use client"

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { createContext, ReactNode, useContext, useState } from "react"

type ContextType = {
    User: User;
    isLogged: boolean;
    setIsLogged(value: boolean): void;
    token?: RequestCookie;
}

type Props = {
    children: ReactNode;
    User: User;
    token?: RequestCookie;
}

export const loggedUserContext = createContext<ContextType | null>(null);

export const LoggedUserProvider = ({children, User, token}: Props) => {

    const [isLogged, setIsLogged] = useState(token ? true : false);

    return (
    <loggedUserContext.Provider value={{isLogged, setIsLogged, User, token}}>
        {children}
    </loggedUserContext.Provider>
    );
}

export const useLoggedUser = () => useContext(loggedUserContext);