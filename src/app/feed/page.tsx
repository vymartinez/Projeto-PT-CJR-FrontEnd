import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import { SearchBar } from '../components/SearchBar'
import { TeachersContextProvider } from '../hooks/teachersContext';
import TeachersList from '../components/TeachersList';
import axios from 'axios';
import { DisciplinesContextProvider } from '../hooks/disciplinesContext';

const getTeachers = async () : Promise<Teacher[]> => {
  const response = await axios.get('http://localhost:3001/teacher')
  return response.data;
}

const getDisciplines = async () : Promise<Discipline[]> => {
  const response = await axios.get('http://localhost:3001/subject')
  return response.data;

}

const Feed = async () => {
  const Teachers = await getTeachers()
  let logged = true;
  const Disciplines = await getDisciplines()
  return (
    <>
        {logged && <HeaderLogged/>}
        {!logged && <HeaderUnlogged/>}
        <main>
          <TeachersContextProvider InitialValue={Teachers}>
          <DisciplinesContextProvider InitialValue={Disciplines}>
              <SearchBar/>
              <TeachersList/>
          </DisciplinesContextProvider>
          </TeachersContextProvider>
          <div className='container h-2 rounded-full bg-primary mx-auto w-3/4 sm:w-full mt-3'></div>
        </main>
    </>
  )
}

export default Feed;