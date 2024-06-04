import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../../components/Headers';
import Profile from '../../components/Profile';
import { getTeacher } from '@/utils/api';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  }
}

const TeacherProfile = async ({params} : Props) => {

  const satisfiesUserProfile = {"id": 1,"name": "none","email": "none", "password": "none","department": "none","course": "none", assessments: {id: -1 ,content: "", userId: -1, teacherId: -1, subjectId: -1, created_at: "", updatedAt: ""} ,"created_at": "none","updatedAt": "none"}

  const Teacher = await getTeacher(parseInt(params.id));
  let logged = false;

  if (!Teacher) {
    redirect('/404-error');
  }
  return (
    <>
      {logged && <HeaderLogged />}
      {!logged && <HeaderUnlogged />}

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