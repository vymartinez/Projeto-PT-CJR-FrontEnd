import React from 'react'
import { HeaderLogged, HeaderUnlogged } from '../components/Headers';
import Image from 'next/image'
import {SearchBar} from '../components/SearchBar';

const Feed = () => {
  let logged = true;
  return (
    <>
        {logged && <HeaderLogged/>}
        {!logged && <HeaderUnlogged/>}
        <main>
          <div>
            <SearchBar />
          </div>
          <div className='container mx-auto w-full h-2 rounded-full bg-primary'></div>
          <div>
          </div>
        </main>
    </>
  )
}

export default Feed;