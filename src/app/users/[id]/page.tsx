"use client"

import React, { useEffect } from 'react'
import { HeaderLogged, HeaderUnlogged } from '@/app/components/Headers';
import { useRouter } from 'next/navigation';
import Profile from '@/app/components/Profile';
import { Users } from '@/app/data/Users';

type Props = {
  params: {
    id: string;
  }
}

const UserProfile = ({params} : Props) => {

  const satisfiesTeacherProfile = {id: -1,name: 'none',disciplinesId: [-1],department: 'none',photo: "none",createdAt: "none",updatedAt: "none"}

  let logged = false;
  const router = useRouter();

  useEffect(() => {
    if (!notError) {
      return router.push('/404-error');
    }
  })

  const notError = Users.find(users => {
    return users.id === parseInt(params.id);
})

if (notError) {
  return (
    <>
      {logged && <HeaderLogged />}
      {!logged && <HeaderUnlogged />}

      <main className='flex justify-center min-h-screen h-screen'>
        
        <Profile
          isTeacher={false}
          userProfile={notError}
          teacherProfile={satisfiesTeacherProfile}
        />
      </main>

    </>
  )
}
}

export default UserProfile;