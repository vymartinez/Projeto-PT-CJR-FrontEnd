import React from 'react'
import Image from 'next/image'
import building from '@/../public/icons/building.svg'
import book from '@/../public/icons/book.svg'
import mail from '@/../public/icons/mail.svg'
import user from '@/../public/images/default-user.jpg'
import { getAssessments, getComments, getDisciplines } from '@/utils/api';
import RenderPosts from './RenderPosts';

type Props =  {
    teacherProfile?: Teacher;
    userProfile?: User;
}

const Profile = async ({ teacherProfile, userProfile} : Props) => {

    const Assessments = await getAssessments();
    const Disciplines = await getDisciplines();
    const comments = await getComments();

    const findDiscipline = (id : number) => {
            const discipline = Disciplines.filter(discipline => discipline.id === id)
            if (discipline) {
                return discipline[0].name;
            }
        throw new Error('Discipline not found');
    }

    return (
    <>
        <div className='w-full sm:w-2/3 md:w-3/5 min-h-screen h-full bg-extra'>
            <div className='w-full h-40 bg-sky-800'></div>
            <div className='flex justify-center md:block md:ml-8'>
                    <div className='rounded-full w-32 h-32 relative bg-white overflow-hidden border -top-16 border-sky-950'>
                        {teacherProfile && <Image 
                        src={teacherProfile.photo ? String.fromCharCode(...teacherProfile.photo.data) : user}
                        alt="profile-pic"
                        fill
                        sizes="max"
                        draggable={false}
                        style={{
                            objectFit: 'cover',
                        }}
                        />}
                        {userProfile && <Image
                        src={userProfile.photo ? String.fromCharCode(...userProfile.photo.data) : user}
                        alt="profile-pic"
                        fill
                        sizes="max"
                        draggable={false}
                        style={{
                            objectFit: 'cover',
                        }}
                        />
                        }
                    </div>
            </div>
            <div className='flex flex-col border-b border-1 border-black relative pb-3 -top-10 md:-top-6 text-center md:text-left'>
                <div className='md:ml-8'>
                    <h1 className='font-bold text-2xl'>
                        {teacherProfile && teacherProfile.name}
                        {userProfile && userProfile.name}
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
                    {teacherProfile && <p className='text-xs md:ml-2 md:text-sm'>
                        Departamento de {teacherProfile.department}
                    </p>}
                    {userProfile && <p className='text-xs md:ml-2 md:text-sm'>
                        Departamento de {userProfile.department} || {userProfile.course}
                    </p>}
                </div>
                <div className='flex items-center flex-col mb-3 md:ml-8 md:flex-row'>
                    <div className='relative w-6 h-6 my-3 md:my-2'>
                        {teacherProfile && <Image 
                        src={book}
                        alt="book-icon"
                        fill
                        sizes="max"
                        draggable={false}
                        />}
                        {userProfile && <Image 
                        src={mail}
                        alt="mail-icon"
                        fill
                        sizes="max"
                        draggable={false}
                        />}
                    </div>
                    {teacherProfile && <p className='text-xs md:ml-2 md:text-sm'>
                            {teacherProfile.teacherSubjects.map(item => findDiscipline(item.subjectId)).join(', ')}
                        </p>}
                    {userProfile &&  <p className='text-xs md:ml-2 md:text-sm'>
                            {userProfile.email}
                        </p>}
                </div> 
            </div>
            <div className='flex flex-col text-center items-center'>
                {teacherProfile && <h1 className='font-bold relative text-lg -top-5 md:top-0 md:mb-3'>Avaliações</h1>}
                {userProfile && <h1 className='font-bold relative text-lg -top-5 md:top-0 md:mb-3'>Publicações</h1>}
                <RenderPosts
                Assessments={Assessments}
                Comments={comments}
                teacherProfile={teacherProfile}
                userProfile={userProfile}
                />
            </div>
        </div>
    </>
)

}

export default Profile;