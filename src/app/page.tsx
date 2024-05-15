import React from 'react'
import {HeaderLogged, HeaderUnlogged} from './components/Headers'


const Home = () => {
  let logged = true;
  return (
    <>
        {logged &&
            <HeaderLogged />
        }
        {!logged &&
            <HeaderUnlogged />
        }
    </>
  )
}

export default Home;