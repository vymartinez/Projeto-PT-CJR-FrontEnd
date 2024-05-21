"use client"

import React, { useEffect } from 'react'
import { HeaderLogged, HeaderUnlogged } from '../../components/Headers';
import { useRouter } from 'next/navigation';
import Profile from '../../components/Profile';
import { Teachers } from '../../data/Teachers';

type Props = {
  params: {
    id: string;
  }
}

const UserProfile = ({params} : Props) => {

  let logged = false;
  const router = useRouter();

  useEffect(() => {
    if (!notError) {
      return router.push('/404-error');
    }
  })

  const notError = Teachers.find(teachers => {
    return teachers.id === parseInt(params.id);
})

if (notError) {
  return (
    <>
      {logged && <HeaderLogged />}
      {!logged && <HeaderUnlogged />}

      <main className='flex justify-center min-h-screen h-screen'>
        
        {notError && <Profile
          id={params.id}
          isTeacher={true}
        />}
      </main>

    </>
  )
}
}

export default UserProfile;