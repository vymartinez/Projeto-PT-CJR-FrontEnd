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

export const getTeacher = async (id: number) : Promise<Teacher> => {
  const response = await req.get(`/teacher/${id}`)
  return response.data;
}
  
export  const getDisciplines = async () : Promise<Discipline[]> => {
  const response = await req.get('/subject')
  return response.data;
  }

export const getUsers = async () : Promise<User[]> => {
  const response = await req.get('/user');
  return response.data;
}

export const getUser = async (id: number) : Promise<User> => {
  const response = await req.get(`/user/${id}`);
  return response.data;
}

export const getUserByAssessmentId = async (assessmentId: number) : Promise<User> => {
  const response = await req.get(`/assessment/${assessmentId}`);
  const userResponse = await req.get(`/user/${response.data.userId}`);
  return userResponse.data;

}

export const postAssessment = async ({content, userId, teacherId, subjectId} : PostAssessmentProps) => {
  await req.post('/assessment', {
  content: content,
  userId: userId,
  teacherId: teacherId,
  subjectId: subjectId})
}

export const getAssessmentByTeacherId = async (teacherId: number) : Promise<Assessment[]> => {
  const response = await req.get('/assessment')
  const assessments : Assessment[] = response.data;
  const filteredAssessments = assessments.filter(assessment => assessment.teacherId === teacherId)
  return filteredAssessments;
}

export const getAssessmentByUserId = async (userId: number) : Promise<Assessment[]> => {
  const response = await req.get('/assessment')
  const assessments : Assessment[] = response.data;
  const filteredAssessments = assessments.filter(assessment => assessment.userId === userId)
  return filteredAssessments;
}

export const getSubjectNameByTeacherId = async (teacherId: number) : Promise<string[]> => {
  const response = await req.get(`/subject`)
  const discipline : Discipline[] = response.data;
  const filteredSubjects = discipline.filter(subject => subject.teachersSubjects[0].teacherId === teacherId)
  return filteredSubjects.map(subject => subject.name);
}

export const getSubjectNameByAssessmentId = async (assessmentId: number) : Promise<string> => {
  const response = await req.get(`/assessment/${assessmentId}`)
  const subjectResponse = await req.get(`/subject/${response.data.subjectId}`);
  return subjectResponse.data.name;
}

export const getAssessments = async() : Promise<Assessment[]> => {
  const response = await req.get('/assessment')
  return response.data;
}

export const getComments = async() : Promise<Comment[]> => {
  const response = await req.get('/comment')
  return response.data;
}

export const getCommentsByAssessmentId = async(assessmentId: number) : Promise<Comment[]> => {
  const response = await req.get('/comment')
  const comments : Comment[] = response.data;
  const filteredComments = comments.filter(comment => comment.assessmentId === assessmentId)
  return filteredComments;
}

export const getAssessmentById = async(assessmentId: number) : Promise<Assessment> => {
  const response = await req.get(`/assessment/${assessmentId}`)
  return response.data;
}

