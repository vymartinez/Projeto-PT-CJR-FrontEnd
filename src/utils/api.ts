import axios, { isAxiosError } from 'axios';
import { getCookie } from './cookies';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { redirect } from 'next/navigation';

const req = axios.create({
  baseURL: 'http://localhost:3001'
})

export default req;

export const getTeachers = async () : Promise<Teacher[]> => {
  const response = await req.get('/teacher')
  return response.data;
}

export const getTeacher = async (id: number) => {
  try {
    const response = await req.get(`/teacher/${id}`)
    return response.data;
  } catch(error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      redirect("/404-error")
    }
  }
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

export const getUser = async (id: number) => {
  try {
    const response = await req.get(`/user/${id}`);
    return response.data;
  } catch(error) {
    if (isAxiosError(error) && error.response?.status === 404) {
      redirect("/404-error")
    }
  }
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
  const token = getCookie();
  await req.post('/assessment', {
  content: content,
  userId: userId,
  teacherId: teacherId,
  subjectId: subjectId
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export const postComment = async ({content, userId, assessmentId} : PostCommentProps) => {
  const token = getCookie();
  await req.post('/comment', {
    content: content,
    userId: userId,
    assessmentId: assessmentId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  
  export const patchAssessment = async ({content, userId, teacherId, subjectId, assessmentId}: PatchAssessmentProps) => {
    const token = getCookie();
    await req.patch(`/assessment/${assessmentId}`, {
    content: content,
    userId: userId,
    teacherId: teacherId,
    subjectId: subjectId
  }, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  }

  export const patchComment = async ({content, userId, assessmentId, commentId} : PatchCommentProps) => {
    const token = getCookie();
    await req.patch(`/comment/${commentId}`, {
    content: content,
    userId: userId,
    assessmentId: assessmentId
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
};

export const patchUser = async ({values, userId, accessToken} : PatchUserProps) => {
  await req.patch(`/user/${userId}`, {
    name: values.name,
    email: values.email,
    password: values.newPassword,
    department: values.department,
    course: values.course
  }, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
}

export const deleteAssessment = async (assessmentId: number) => {
  const token = getCookie();
  await req.delete(`/assessment/${assessmentId}`
  , {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
}

export const deleteComment = async (commentId: number) => {
  const token = getCookie();
  await req.delete(`/comment/${commentId}`
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );
}

export const deleteAccount = async (userId: number) => {
  const token = getCookie();
  await req.delete(`/user/${userId}`
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );
}

export const patchPhoto = async ({photo, userId} : {photo: FormData, userId: number}) => {
  const token = getCookie();
  await req.patch(`/user/${userId}`, photo
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
  );
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

export const getToken = async (values: {email: string, password: string}) => {
  const response = await req.post('login', values);
  return response.data.access_token;
}

export const getUserLogged = async (token: RequestCookie | undefined) => {
  if (token) {
    const accessToken = token.value;
    const response = await req.get('/me', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    const userId: JWTProps = response.data;
    const User = await getUser(userId.sub)
    return User;
  }
  return undefined;
}