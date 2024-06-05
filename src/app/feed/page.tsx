import React from 'react'
import { HeaderLogged } from '../components/Headers';
import { SearchBar } from '../components/SearchBar'
import TeachersList from '../components/TeachersList';
import { getUser } from '@/utils/api';

const Feed = async () => {
  const loggedUser = await getUser(1); //ajeitar após autenticação
  return (
    <>
      <HeaderLogged photo={loggedUser.photo}/>
      <main>
        <SearchBar/>
        <TeachersList/>
        <div className='container h-2 rounded-full bg-primary mx-auto w-3/4 sm:w-full mt-3'></div>
      </main>
    </>
  )
}

export default Feed;