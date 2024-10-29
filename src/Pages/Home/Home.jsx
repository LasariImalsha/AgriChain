import React from 'react'
import WelcomeCard from '../../Components/WelcomeCard';
import Login from '../Login/Login';


function Home() {
  return (
    <>
        <WelcomeCard comp={<Login />}/>
    </>
  )
}

export default Home