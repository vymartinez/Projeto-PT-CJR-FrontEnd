import React from 'react'
import HeaderUnlogged from './components/HeaderUnlogged'
import HeaderLogged from './components/HeaderLogged'


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