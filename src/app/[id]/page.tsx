"use client"

import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import { useRouter } from 'next/navigation';
import Profile from '../components/Profile';

const UserProfile = () => {
  let logged = true;
  const router = useRouter();
  return (
    <>
      {logged && <HeaderLogged />}
      {!logged && <HeaderUnlogged />}

      <div>
        <Profile 
          id={'3'}
        />
      </div>

    </>
  )
}

export default UserProfile;