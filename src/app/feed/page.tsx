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
          <div>

          </div>
        </main>
    </>
  )
}

export default Feed;