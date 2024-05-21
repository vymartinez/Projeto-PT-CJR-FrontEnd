import React from 'react'
import Post from './Post';
import Image from 'next/image'
import { Teachers } from '../data/Teachers';
import building from '../../../public/icons/building.svg'
import book from '../../../public/icons/book.svg'
import mail from '../../../public/icons/mail.svg'
import { Disciplines } from '../data/Disciplines';
import { Users } from '../data/Users';
import { Assessments } from '../data/Assessments';

type Props =  {
    id: string;
    isTeacher: boolean;
}

const Profile = ({id, isTeacher} : Props) => {

    const teacherProfile = Teachers.find(teachers => {
        return teachers.id === parseInt(id);
    })

    const userProfile = Users.find(users => {
        return users.id === parseInt(id);
    })

    if (teacherProfile && isTeacher) {
        const filteredDisciplines = Disciplines.filter(item => {
            for (let i in teacherProfile.disciplinesId) {
                if (item.id === teacherProfile.disciplinesId[i]) {
                    return item;
                }
            }
        })
    
        const disciplines = filteredDisciplines.map(item => {
            return item.name;
        })
        return (
        <>
            <div className='w-full sm:w-2/3 md:w-3/5 h-full bg-extra'>
                <div className='w-full h-40 bg-sky-800'></div>
                <div className='flex justify-center md:block md:ml-8'>
                        <div className='rounded-full w-32 h-32 relative bg-white overflow-hidden border -top-16 border-sky-950'>
                            <Image 
                            src={teacherProfile.photo}
                            alt="profile-pic"
                            fill
                            sizes="max"
                            />
                        </div>
                </div>
                <div className='flex flex-col border-b border-1 border-black relative pb-3 -top-10 md:-top-6 text-center md:text-left'>
                    <div className='md:ml-8'>
                        <h1 className='font-bold text-2xl'>{teacherProfile.name}</h1>
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
                            {teacherProfile.department}
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
                            {disciplines.join(', ')}
                        </p>
                    </div>  
                </div>
                <div className='flex flex-col text-center items-center'>
                    <h1 className='font-bold relative -top-5 md:top-0 md:mb-3'>Publicações</h1>
                    {Assessments.map(item => {
                        if (item.teacherId === teacherProfile.id) {
                            const course = Disciplines[item.teacherId].name;
                            return <Post 
                            key={item.id} 
                            profile={Users[item.userId]}
                            discipline={course}
                            createdAt={item.createdAt}
                            text={item.text}
                            />
                        }
                    })}
                </div>
            </div>
        </>
    )
    } else if (userProfile) {
    return  (
        <>
            <div className='w-full sm:w-2/3 md:w-3/5 h-full bg-extra'>
                <div className='w-full h-40 bg-sky-800'></div>
                <div className='flex justify-center md:block md:ml-8'>
                        <div className='rounded-full w-32 h-32 relative bg-white overflow-hidden border -top-16 border-sky-950'>
                            <Image 
                            src={userProfile.photo}
                            alt="profile-pic"
                            fill
                            sizes="max"
                            />
                        </div>
                </div>
                <div className='flex flex-col border-b border-1 border-black relative pb-3 -top-10 md:-top-6 text-center md:text-left'>
                    <div className='md:ml-8'>
                        <h1 className='font-bold text-2xl'>{userProfile.name}</h1>
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
                            {userProfile.course} / {userProfile.department}
                        </p>
                    </div>
                    <div className='flex items-center flex-col mb-3 md:ml-8 md:flex-row'>
                        <div className='relative w-6 h-6 my-3 md:my-2'>
                            <Image 
                            src={mail}
                            alt="mail-icon"
                            fill
                            sizes="max"
                            />
                        </div>
                        <p className='text-xs md:ml-2 md:text-sm'>
                            {userProfile.email}
                        </p>
                    </div>  
                </div>
                <div className='flex flex-col text-center items-center'>
                    <h1 className='font-bold relative -top-5 md:top-0 md:mb-3'>Publicações</h1>
                    {Assessments.map(item => {
                        if (item.userId === userProfile.id) {
                            const course = Disciplines[item.userId].name;
                            return <Post 
                            key={item.id} 
                            profile={userProfile}
                            discipline={course}
                            createdAt={item.createdAt}
                            text={item.text}
                            />
                        }
                    })}
                </div>
            </div>
        </>
    )} else {
        return (null)
    }
}

export default Profile;