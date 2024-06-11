import React from 'react'
import { ActiveHeader } from '@/app/components/Headers';
import Profile from '@/app/components/Profile';
import { getUser } from '@/utils/api';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  }
}

const UserProfile = async ({params} : Props) => {

  const User = await getUser(parseInt(params.id));

  if (!User) {
    redirect('/404-error');
  }

  return (
    <>
      <ActiveHeader/>
      <main className='flex justify-center min-h-screen'>
        <Profile
          userProfile={User}
        />
      </main>
    </>
  )
}

export default UserProfile;