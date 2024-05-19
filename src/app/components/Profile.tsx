import React from 'react'
import Post from './Post';
import Image from 'next/image'
import { Teachers } from '../data/Teachers';

type Props =  {
    id: string;
}


const Profile = ({id} : Props) => {
    
    const profile = Teachers.filter(teachers => {
        return teachers.key === parseInt(id);
    })

  return (
    <>
        <div className='h-full w-1/3 bg-white'>
            <div className='w-full h-1/5'>
                <div className='rounded-full w-30 h-30 relative bg-secondary'>
                    <Image 
                    src={profile[0].photo}
                    alt="profile-pic"
                    fill
                    sizes="max"
                    />

                </div>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
                <Post />
            </div>
        </div>
    </>
  )
}

export default Profile;