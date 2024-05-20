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
    
    const teacher = true;
    const  user = false;

    const profile = Teachers.find(teachers => {
        return teachers.id === parseInt(id);
    })

    if (profile) {
        return (
        <>
            <div className='w-full sm:w-2/3 md:w-3/5 h-full bg-extra'>
                <div className='w-full h-40 bg-sky-800'></div>
                <div className='flex justify-center md:block md:ml-8'>
                        <div className='rounded-full w-32 h-32 relative bg-white overflow-hidden border -top-16 border-sky-950'>
                            <Image 
                            src={profile.photo}
                            alt="profile-pic"
                            fill
                            sizes="max"
                            />
                        </div>
                </div>
                <div className='flex flex-col border-b border-1 border-black relative pb-3 -top-10 md:-top-6 text-center md:text-left'>
                    <div className='md:ml-8'>
                        <h1 className='font-bold text-2xl'>{profile.name}</h1>
                    </div>
                    <div className='md:ml-8 flex items-center flex-col md:flex-row'>
                        <div className='h-6 w-6 relative my-3 md:my-2'>
                            <Image
                            src={building}
                            alt="building"
                            fill
                            sizes="max"
                            />
                        </div>
                        <p className='text-xs md:ml-2 md:text-sm'>
                            {profile.department}
                        </p>
                    </div>
                    <div className='flex items-center flex-col mb-3 md:ml-8 md:flex-row'>
                        <div className='relative w-6 h-6 my-3 md:my-2'>
                            <Image 
                            src={book}
                            alt="book-icon"
                            fill
                            sizes="max"
                            />
                        </div>
                        <p className='text-xs md:ml-2 md:text-sm'>
                            {profile.discipline}
                        </p>
                    </div>  
                </div>
                <div className='flex flex-col text-center items-center'>
                    <h1 className='font-bold relative -top-5 md:top-0 md:mb-3'>Publicações</h1>
                    <Post
                    profile={profile}
                    />
                    <Post
                    profile={profile}
                    />
                    <Post
                    profile={profile}
                    />
                    <Post
                    profile={profile}
                    />
                </div>
            </div>
        </>
    )
    }
    return (null);
}

export default Profile;