"use client"

import React, { useState } from 'react'
import Post from './Post';

type Props = {
    Assessments: Assessment[];
    Comments: Comment[];
    teacherProfile?: Teacher;
    userProfile?: User;
    
}
const RenderPosts = ({Assessments, Comments, teacherProfile, userProfile} : Props) => {

    const [reverseList, setReverseList] = useState(false);

  return (
    <>
        {(userProfile && userProfile.assessments.length !== 0) || (teacherProfile && teacherProfile.assessments.length !== 0) && !reverseList && <button onClick={() => setReverseList(!reverseList)} className='bg-gradient-to-b from-button to-sky-800 h-fit w-fit px-5 py-2 text-white text-center rounded-lg text-sm mb-4'>
            Ver mais antigas
        </button>}
        {(userProfile && userProfile.assessments.length !== 0) || (teacherProfile && teacherProfile.assessments.length !== 0) && reverseList && <button onClick={() => setReverseList(!reverseList)} className='bg-gradient-to-b from-button to-sky-800 h-fit w-fit px-5 py-2 text-white text-center rounded-lg text-sm mb-4'>
            Ver mais recentes
        </button>}
        {!reverseList && teacherProfile && Assessments.map(assessment => {
                    if (assessment.teacherId === teacherProfile.id) {
                        return <Post 
                        key={assessment.id}
                        assessmentId={assessment.id}
                        profile={assessment.user}
                        teacher={assessment.teacher}
                        teacherId={assessment.teacherId}
                        discipline={assessment.subject.name}
                        disciplineId={assessment.subjectId}
                        createdAt={assessment.created_at}
                        updatedAt={assessment.updated_at}
                        content={assessment.content}
                        commentSection={false}
                        commentsList={Comments.filter(comment => {
                            if (comment.assessmentId === assessment.id) {
                                return comment;
                            };
                        })}
                        />
                    }
                })}
        {reverseList && teacherProfile && Assessments.slice().reverse().map(assessment => {
                    if (assessment.teacherId === teacherProfile.id) {
                        return <Post 
                        key={assessment.id}
                        assessmentId={assessment.id}
                        profile={assessment.user}
                        teacher={assessment.teacher}
                        teacherId={assessment.teacherId}
                        discipline={assessment.subject.name}
                        disciplineId={assessment.subjectId}
                        createdAt={assessment.created_at}
                        updatedAt={assessment.updated_at}
                        content={assessment.content}
                        commentSection={false}
                        commentsList={Comments.filter(comment => {
                            if (comment.assessmentId === assessment.id) {
                                return comment;
                            };
                        })}
                        />
                    }
                })}
                {teacherProfile && teacherProfile.assessments.length === 0 && <p className='text-sm font-semibold my-24 text-black'>Este professor ainda não recebeu nenhuma avaliação</p>}
                {!reverseList && userProfile && Assessments.map(assessment => {
                    if (assessment.userId === userProfile.id) {
                        return <Post 
                        key={assessment.id}
                        assessmentId={assessment.id}
                        profile={userProfile}
                        teacher={assessment.teacher}
                        teacherId={assessment.teacherId}
                        discipline={assessment.subject.name}
                        disciplineId={assessment.subjectId}
                        createdAt={assessment.created_at}
                        updatedAt={assessment.updated_at}
                        content={assessment.content}
                        commentSection={false}
                        commentsList={Comments.filter(comment => {
                            if (comment.assessmentId === assessment.id) {
                                return comment;
                            };
                        })}
                        />
                    }
                    })}
                {reverseList && userProfile && Assessments.map(assessment => {
                    if (assessment.userId === userProfile.id) {
                        return <Post 
                        key={assessment.id}
                        assessmentId={assessment.id}
                        profile={userProfile}
                        teacher={assessment.teacher}
                        teacherId={assessment.teacherId}
                        discipline={assessment.subject.name}
                        disciplineId={assessment.subjectId}
                        createdAt={assessment.created_at}
                        updatedAt={assessment.updated_at}
                        content={assessment.content}
                        commentSection={false}
                        commentsList={Comments.filter(comment => {
                            if (comment.assessmentId === assessment.id) {
                                return comment;
                            };
                        })}
                        />
                    }
                    })}
                    {userProfile && userProfile.assessments.length === 0 && <p className='text-sm font-semibold my-24 text-black'>Este usuário ainda não fez nenhuma publicação</p>}
    </>
  )
}

export default RenderPosts