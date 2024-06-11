import React from 'react'
import { ActiveHeader } from '../../components/Headers';
import Profile from '../../components/Profile';
import { getTeacher } from '@/utils/api';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  }
}

const TeacherProfile = async ({params} : Props) => {

  const Teacher = await getTeacher(parseInt(params.id));

  if (!Teacher) {
    redirect('/404-error');
  }
  return (
    <>
      <ActiveHeader/>
      <main className='flex justify-center min-h-screen'>
        <Profile
          teacherProfile={Teacher}
        />
      </main>
    </>
  )
}

export default TeacherProfile;