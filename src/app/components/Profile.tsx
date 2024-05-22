import React from 'react'
import Post from './Post';
import Image from 'next/image'
import building from '@/../public/icons/building.svg'
import book from '@/../public/icons/book.svg'
import mail from '@/../public/icons/mail.svg'
import { Disciplines } from '../data/Disciplines';
import { Users } from '../data/Users';
import { Assessments } from '../data/Assessments';

type Props =  {
    isTeacher: boolean;
    teacherProfile: Teacher;
    userProfile: User;
}

const Profile = ({ isTeacher, teacherProfile, userProfile} : Props) => {

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
                        {isTeacher && <Image 
                        src={teacherProfile.photo}
                        alt="profile-pic"
                        fill
                        sizes="max"
                        draggable={false}
                        />}
                        {!isTeacher && <Image 
                        src={userProfile.photo}
                        alt="profile-pic"
                        fill
                        sizes="max"
                        draggable={false}
                        />
                        }
                    </div>
            </div>
            <div className='flex flex-col border-b border-1 border-black relative pb-3 -top-10 md:-top-6 text-center md:text-left'>
                <div className='md:ml-8'>
                    <h1 className='font-bold text-2xl'>
                        {isTeacher && teacherProfile.name}
                        {!isTeacher && userProfile.name}
                    </h1>
                </div>
                <div className='md:ml-8 flex items-center flex-col md:flex-row'>
                    <div className='h-6 w-6 relative my-3 md:my-2'>
                        <Image
                        src={building}
                        alt="building"
                        fill
                        sizes="max"
                        draggable={false}
                        />
                    </div>
                    <p className='text-xs md:ml-2 md:text-sm'>
                        {isTeacher && teacherProfile.department}
                        {!isTeacher && userProfile.department}
                    </p>
                </div>
                <div className='flex items-center flex-col mb-3 md:ml-8 md:flex-row'>
                    <div className='relative w-6 h-6 my-3 md:my-2'>
                        {isTeacher && <Image 
                        src={book}
                        alt="book-icon"
                        fill
                        sizes="max"
                        draggable={false}
                        />}
                        {!isTeacher && <Image 
                        src={mail}
                        alt="mail-icon"
                        fill
                        sizes="max"
                        />}
                    </div>
                    <p className='text-xs md:ml-2 md:text-sm'>
                        {disciplines.join(', ')}
                    </p>
                </div>  
            </div>
            <div className='flex flex-col text-center items-center'>
                <h1 className='font-bold relative -top-5 md:top-0 md:mb-3'>Publicações</h1>
                {isTeacher && Assessments.map(item => {
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
                {!isTeacher && Assessments.map(item => {
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
)

}

export default Profile;