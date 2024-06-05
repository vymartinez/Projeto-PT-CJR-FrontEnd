import React from 'react'
import { ActiveHeader } from '../../components/Headers';
import Profile from '../../components/Profile';
import { getTeacher, getUser } from '@/utils/api';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  }
}

const TeacherProfile = async ({params} : Props) => {

  const satisfiesUserProfile = {"id": 1,"name": "none","email": "none", "department": "none","course": "none", assessments: {id: -1 ,content: "", userId: -1, teacherId: -1, subjectId: -1, created_at: "", updated_at: ""} ,"created_at": "none","updated_at": "none"}

  const Teacher = await getTeacher(parseInt(params.id));
  const loggedUser = await getUser(1)//ajeitar após autenticação

  if (!Teacher) {
    redirect('/404-error');
  }
  return (
    <>
      <ActiveHeader photo={loggedUser.photo}/>
      <main className='flex justify-center min-h-screen'>
        <Profile
          isTeacher={true}
          teacherProfile={Teacher}
          userProfile={satisfiesUserProfile}
        />
      </main>
    </>
  )
}

export default TeacherProfile;