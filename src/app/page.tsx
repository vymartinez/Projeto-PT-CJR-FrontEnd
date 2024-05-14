import React from 'react'
import {HeaderLogged, HeaderUnlogged} from './components/Headers'


const Home = () => {
  let logged = false;
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