import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001'
})

export const getTeachers = async () : Promise<Teacher[]> => {
    const response = await req.get('/teacher')
    return response.data;
  }
  
export  const getDisciplines = async () : Promise<Discipline[]> => {
    const response = await req.get('/subject')
    return response.data;
  }