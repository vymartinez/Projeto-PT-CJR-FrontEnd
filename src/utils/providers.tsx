import { DisciplinesContextProvider } from "@/app/hooks/disciplinesContext";
import { TeachersContextProvider } from "@/app/hooks/teachersContext";
import { ReactNode } from "react";
import { getDisciplines, getTeachers, getUser } from "./api";
import { LoggedUserProvider } from "@/app/hooks/loggedUserContext";

type Props = {
    children: ReactNode;
}


export const Providers = async({children}: Props) => {
    const Teachers = await getTeachers()
    const Disciplines = await getDisciplines()
    const User = await getUser(1)//ajeitar após autenticação
    return (
        <LoggedUserProvider User={User}>
        <TeachersContextProvider Teachers={Teachers}>
        <DisciplinesContextProvider Disciplines={Disciplines}>
            {children}
        </DisciplinesContextProvider>
        </TeachersContextProvider>
        </LoggedUserProvider>
    )
}