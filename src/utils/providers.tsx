import { DisciplinesContextProvider } from "@/app/hooks/disciplinesContext";
import { TeachersContextProvider } from "@/app/hooks/teachersContext";
import { ReactNode } from "react";
import { getDisciplines, getTeachers, getUser, getUserLogged } from "./api";
import { LoggedUserProvider } from "@/app/hooks/loggedUserContext";
import { cookies } from "next/headers";

type Props = {
    children: ReactNode;
}

export const Providers = async({children}: Props) => {
    const Teachers = await getTeachers()
    const Disciplines = await getDisciplines()
    const cookieStore = cookies()
    const token = cookieStore.get('access_token')
    const User = await getUserLogged(token)
    return (
        <>
            {token && User &&
            <LoggedUserProvider User={User} token={token}>
            <TeachersContextProvider Teachers={Teachers}>
            <DisciplinesContextProvider Disciplines={Disciplines}>
                {children}
            </DisciplinesContextProvider>
            </TeachersContextProvider>
            </LoggedUserProvider>}
            {!token && 
            <TeachersContextProvider Teachers={Teachers}>
            <DisciplinesContextProvider Disciplines={Disciplines}>
                {children}
            </DisciplinesContextProvider>
            </TeachersContextProvider>}
        </>
    )
}