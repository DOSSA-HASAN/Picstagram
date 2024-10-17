import React, { useContext } from 'react'
import DemoImgDarkTheme from '../../assets/DemoApp.jpeg'
import DemoImgLightTheme from '../../assets/DemoImgLightTheme.jpeg'
import Login from '../Authentication/Login'
import './home.css'
import { uContext } from '../../contex/UserContex'

function HomeLogin() {

    const { isDarkMode } = useContext(uContext);

    return (
        <>
            <section className="home-login-section">
                <figure className='demo-app-img'>
                    <img src={isDarkMode ? DemoImgDarkTheme : DemoImgLightTheme} alt="" />
                </figure>
                <Login />
            </section>
        </>
    )
}

export default HomeLogin
