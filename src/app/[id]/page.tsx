"use client"

import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import { useRouter } from 'next/navigation';
import Profile from '../components/Profile';

const UserProfile = () => {
  let logged = false;
  const router = useRouter();
  return (
    <>
      {logged && <HeaderLogged />}
      {!logged && <HeaderUnlogged />}

      <main className='flex justify-center'>
        <Profile 
          id={'3'}
        />
      </main>

    </>
  )
}

export default UserProfile;