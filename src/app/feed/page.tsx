import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import { SearchBar } from '../components/SearchBar'
import { TeachersContextProvider } from '../hooks/teachersContext';
import TeachersList from '../components/TeachersList';

const Feed = () => {
  let logged = true;
  return (
    <>
        {logged && <HeaderLogged/>}
        {!logged && <HeaderUnlogged/>}
        <main>
          <TeachersContextProvider>
              <SearchBar/>
            <TeachersList/>
          </TeachersContextProvider>
          <div className='container h-2 rounded-full bg-primary mx-auto w-3/4 sm:w-full mt-3'></div>
        </main>
    </>
  )
}

export default Feed;