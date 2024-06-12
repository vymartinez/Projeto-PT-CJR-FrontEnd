"use client"

import { getCookie } from "@/utils/cookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

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

    const accessToken = getCookie();
    const [isLogged, setIsLogged] = useState(accessToken ? true : false);


    return (
    <loggedUserContext.Provider value={{isLogged, setIsLogged, User}}>
        {children}
    </loggedUserContext.Provider>
    );
}

export const useLoggedUser = () => useContext(loggedUserContext);