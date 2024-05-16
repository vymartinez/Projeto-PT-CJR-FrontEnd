import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import Teacher from '../components/Teacher';
import glass from '../../../public/icons/magnifying-glass.svg'
import Image from 'next/image'
import {SearchBar} from '../components/SearchBar';
import { Teachers } from '../data/Teachers';

const Feed = () => {
  let logged = true;
  return (
    <>
        {logged && <HeaderLogged/>}
        {!logged && <HeaderUnlogged/>}
        <main className='w-full h-screen bg-background'>
          <div>
            <div className='w-full py-8 px-40 flex justify-between items-end'>
              <h1 className='text-2xl font-semibold'>
                Novos Professores
              </h1>
              <SearchBar/>
            </div>
            <div className={`grid grid-cols-${Teachers.length}`}>
            {Teachers.map(item => {
              return <Teacher 
                key={item.key}
                name={item.name} 
                discipline={item.discipline}
                department={item.department}
                photo={item.photo}
                />
              })}
              </div>
          </div>
          <div>

          </div>
        </main>
    </>
  )
}

export default Feed;