import axios from 'axios';

type PostAssessmentProps = {
  content: string;
  userId: number;
  teacherId: number;
  subjectId: number;
}

type PostCommentProps = {
  content: string;
  userId: number;
  assessmentId: number;
}

type PatchCommentProps = {
  content?: string;
  userId: number;
  assessmentId: number;
  commentId: number;
}

type PatchAssessmentProps = {
  content?: string;
  userId: number;
  teacherId: number;
  subjectId: number;
  assessmentId: number;
}

type PatchUserProps = {
  values: EditProfile,
  userId: number;
}

type CreateUserProps = {
  email: string;
  name: string;
  department: string;
  course: string;
  password: string;
}

const req = axios.create({
  baseURL: 'http://localhost:3001'
})

export default req;

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

export const getSubjectNameByTeacherId = async (teacherId: number) : Promise<string[]> => {
  const response = await req.get(`/subject`)
  const discipline : Discipline[] = response.data;
  const filteredSubjects = discipline.filter(subject => subject.teachersSubjects[0].teacherId === teacherId)
  return filteredSubjects.map(subject => subject.name);
}

export const getUsers = async () : Promise<User[]> => {
  const response = await req.get('/user');
  return response.data;
}

export const getUser = async (id: number) : Promise<User> => {
  const response = await req.get(`/user/${id}`);
  return response.data;
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

export const getAssessmentById = async(assessmentId: number) : Promise<Assessment> => {
  const response = await req.get(`/assessment/${assessmentId}`)
  return response.data;
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

export const postAssessment = async ({content, userId, teacherId, subjectId} : PostAssessmentProps) => {
  await req.post('/assessment', {
  content: content,
  userId: userId,
  teacherId: teacherId,
  subjectId: subjectId})
}

export const postComment = async ({content, userId, assessmentId} : PostCommentProps) => {
  await req.post('/comment', {
    content: content,
    userId: userId,
    assessmentId: assessmentId})
  }
  
  export const patchAssessment = async ({content, userId, teacherId, subjectId, assessmentId}: PatchAssessmentProps) => {
    await req.patch(`/assessment/${assessmentId}`, {
    content: content,
    userId: userId,
    teacherId: teacherId,
    subjectId: subjectId
  })
  }

  export const patchComment = async ({content, userId, assessmentId, commentId} : PatchCommentProps) => {
    await req.patch(`/comment/${commentId}`, {
    content: content,
    userId: userId,
    assessmentId: assessmentId})
};

export const patchUser = async ({values, userId} : PatchUserProps) => {
  await req.patch(`/user/${userId}`, {
    name: values.name,
    email: values.email,
    password: values.newPassword,
    department: values.department,
    course: values.course
  });
}

export const deleteAssessment = async (assessmentId: number) => {
  await req.delete(`/assessment/${assessmentId}`);
}

export const deleteComment = async (commentId: number) => {
  await req.delete(`/comment/${commentId}`);
}

export const deleteAccount = async (userId: number) => {
  await req.delete(`/user/${userId}`);
}

export const patchPhoto = async ({photo, userId} : {photo: FormData, userId: number}) => {
  await req.patch(`/user/${userId}`, photo);
}

export const postUser = async ({email, name, course, department, password} : CreateUserProps) => {
  await req.post('/user', {
    email: email,
    name: name,
    course: course,
    department: department,
    password: password
  })
}