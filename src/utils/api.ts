import axios from "axios";

type PostAssessmentProps = {
  content: string;
  userId: number;
  teacherId: number;
  subjectId: number;
}

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

export const postAssessment = async ({content, userId, teacherId, subjectId} : PostAssessmentProps) => {
    await req.post('/assessment', {
    content: content,
    userId: userId,
    teacherId: teacherId,
    subjectId: subjectId})
}