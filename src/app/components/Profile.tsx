import React from 'react'
import Post from './Post';
import Image from 'next/image'
import building from '@/../public/icons/building.svg'
import book from '@/../public/icons/book.svg'
import mail from '@/../public/icons/mail.svg'
import user from '@/../public/images/default-user.jpg'
import { getAssessments, getComments, getSubjectNameByTeacherId, getUser } from '@/utils/api';

type Props =  {
    isTeacher: boolean;
    teacherProfile: Teacher;
    userProfile: User;
}

const Profile = async ({ isTeacher, teacherProfile, userProfile} : Props) => {

    const disciplines = await getSubjectNameByTeacherId(teacherProfile.id);
    const Assessments = await getAssessments()
    const User = await getUser(userProfile.id)
    const comments = await getComments();

    return (
    <>
        <div className='w-full sm:w-2/3 md:w-3/5 min-h-screen h-full bg-extra'>
            <div className='w-full h-40 bg-sky-800'></div>
            <div className='flex justify-center md:block md:ml-8'>
                    <div className='rounded-full w-32 h-32 relative bg-white overflow-hidden border -top-16 border-sky-950'>
                        {isTeacher && <Image 
                        src={user}
                        alt="profile-pic"
                        fill
                        sizes="max"
                        draggable={false}
                        />}
                        {!isTeacher && <Image
                        src={user}
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
                        Departamento de {isTeacher && teacherProfile.department}
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
                        draggable={false}
                        />}
                    </div>
                    {isTeacher && <p className='text-xs md:ml-2 md:text-sm'>
                            {disciplines.join(', ')}
                        </p>}
                    {!isTeacher &&  <p className='text-xs md:ml-2 md:text-sm'>
                            {userProfile.email}
                        </p>}
                </div> 
            </div>
            <div className='flex flex-col text-center items-center'>
                <h1 className='font-bold relative -top-5 md:top-0 md:mb-3'>Publicações</h1>
                {isTeacher && Assessments.map(item => {
                    if (item.teacherId === teacherProfile.id) {
                        return <Post 
                        key={item.id}
                        assessmentId={item.id}
                        profile={User}
                        teacherId={item.teacherId}
                        discipline={disciplines[0]}
                        disciplineId={item.subjectId}
                        createdAt={item.created_at}
                        content={item.content}
                        commentSection={false}
                        commentsList={comments.filter(comment => {
                            if (comment.assessmentId === item.id) {
                                return comment;
                            };
                        })}
                        />
                    }
                })}
                {!isTeacher && Assessments.map(item => {
                    if (item.userId === userProfile.id) {
                        return <Post 
                        key={item.id}
                        assessmentId={item.id}
                        profile={userProfile}
                        teacherId={item.teacherId}
                        discipline={disciplines[0]}
                        disciplineId={item.subjectId}
                        createdAt={item.created_at}
                        content={item.content}
                        commentSection={false}
                        commentsList={comments.filter(comment => { {
                            if (comment.assessmentId === item.id) {
                                return comment;
                            };
                        }
                        })}
                        />
                    }
                    })}
            </div>
        </div>
    </>
)

}

export default Profile;