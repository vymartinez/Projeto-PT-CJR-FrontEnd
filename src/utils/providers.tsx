import { DisciplinesContextProvider } from "@/app/hooks/disciplinesContext";
import { TeachersContextProvider } from "@/app/hooks/teachersContext";
import { ReactNode } from "react";
import { getDisciplines, getTeachers } from "./api";

type Props = {
    children: ReactNode;
}


export const Providers = async({children}: Props) => {
    const Teachers = await getTeachers()
    const Disciplines = await getDisciplines()
    return (
        <TeachersContextProvider Teachers={Teachers}>
          <DisciplinesContextProvider Disciplines={Disciplines}>
              {children}
          </DisciplinesContextProvider>
        </TeachersContextProvider>
    )
}