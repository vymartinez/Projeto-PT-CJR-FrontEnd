"use client"

import React, { useEffect } from 'react'
import { HeaderLogged, HeaderUnlogged } from '../../components/Headers';
import { useRouter } from 'next/navigation';
import Profile from '../../components/Profile';
import { Users } from '@/app/data/Users';

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
          id={params.id}
          isTeacher={false}
        />
      </main>

    </>
  )
}
}

export default UserProfile;