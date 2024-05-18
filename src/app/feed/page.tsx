import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import Image from 'next/image'
import {SearchedTeachers} from '../components/SearchedTeachers';

const Feed = () => {
  let logged = true;
  return (
    <>
        {logged && <HeaderLogged/>}
        {!logged && <HeaderUnlogged/>}
        <main>
          <div>
            <SearchedTeachers />
          </div>
          <div className='container mx-auto w-full h-2 rounded-full bg-primary my-3'></div>
        </main>
    </>
  )
}

export default Feed;