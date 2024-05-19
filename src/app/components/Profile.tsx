import React from 'react'
import Post from './Post';
import Image from 'next/image'
import { Teachers } from '../data/Teachers';
import building from '../../../public/icons/building.svg'
import book from '../../../public/icons/book.svg'
import mail from '../../../public/icons/mail.svg'


type Props =  {
    id: string;
}


const Profile = ({id} : Props) => {
    
    const filteredProfile = Teachers.filter(teachers => {
        return teachers.key === parseInt(id);
    })
    const profile = filteredProfile[0];

  return (
    <>
        <div className='w-2/5 h-screen bg-extra'>
            <div className='w-full h-1/5 bg-sky-800'>
                <div className='rounded-full w-32 h-32 absolute bg-white overflow-hidden mt-16 ml-8 border border-sky-950'>
                    <Image 
                    src={profile.photo}
                    alt="profile-pic"
                    fill
                    sizes="max"
                    />
                </div>
            </div>
            <div className='flex flex-col mt-16 border-b border-1 border-black'>
                <div className='ml-8'>
                    <h1 className='font-bold text-lg'>{profile.name}</h1>
                </div>
                <div className='ml-8 flex items-center'>
                    <div className='h-3 w-3 relative my-2'>
                        <Image
                        src={building}
                        alt="building"
                        fill
                        sizes="max"
                        />
                    </div>
                    <p className='text-xs ml-2'>
                        {profile.department}
                    </p>
                </div>
                <div className='flex ml-8 items-center mb-3'>
                    <div className='relative w-3 h-3 my-2'>
                        <Image 
                        src={book}
                        alt="book-icon"
                        fill
                        sizes="max"
                        />
                    </div>
                    <p className='ml-2 text-xs'>
                        {profile.discipline}
                    </p>
                </div>  
            </div>
            <div className='flex flex-col text-center items-center'>
                <h1 className='font-bold my-3'>Publicações</h1>
                <Post
                profile={profile}
                />
            </div>
        </div>
    </>
  )
}

export default Profile;