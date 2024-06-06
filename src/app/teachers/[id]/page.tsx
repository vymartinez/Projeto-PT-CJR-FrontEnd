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
          teacherProfile={Teacher}
        />
      </main>
    </>
  )
}

export default TeacherProfile;