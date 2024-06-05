import React from 'react'
import { HeaderLogged } from '@/app/components/Headers';
import Profile from '@/app/components/Profile';
import { getUser } from '@/utils/api';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  }
}

const UserProfile = async ({params} : Props) => {

  const satisfiesTeacherProfile = {id: 1, name: "", department: "", teacherSubjects: [
    {subjectId: -1, teacherId: -1, createdAt: "", updatedAt: ""}
  ], assessments: [{content: "", userId: -1, teacherId: -1, subjectId: -1, createdAt: "", updatedAt: ""}]}

  const User = await getUser(parseInt(params.id));
  const loggedUser = await getUser(1)//ajeitar após autenticação

  if (!User) {
    redirect('/404-error');
  }

  return (
    <>
      <HeaderLogged photo={loggedUser.photo}/>
      <main className='flex justify-center min-h-screen'>
        <Profile
          isTeacher={false}
          userProfile={User}
          teacherProfile={satisfiesTeacherProfile}
        />
      </main>
    </>
  )
}

export default UserProfile;