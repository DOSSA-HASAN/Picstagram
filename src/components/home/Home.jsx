import React, { useContext } from 'react'
import { uContext } from '../../contex/UserContex'
import HomeLogin from './HomeLogin'
import UsersHomePage from './UsersHomePage'

function Home() {

    const { user } = useContext(uContext)
    console.log(user)

    return (
        <>
        { user ? <UsersHomePage /> : <HomeLogin />}
        </>
    )
}

export default Home
