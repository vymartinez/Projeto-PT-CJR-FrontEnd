import { Teachers } from "@/app/data/Teachers";

export const Filter = (input : string) => {
    let teacherList : Teacher[];
    if (input !== '' ) {
        teacherList = Teachers.filter(teacher => teacher.name === input)
    } else {
        teacherList = Teachers;
    }
    return teacherList;
}
