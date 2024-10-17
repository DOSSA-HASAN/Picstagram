import React, { useContext } from 'react'
import LogoLightTheme from '../../assets/logoLightTheme.png'
import LogoDarkTheme from '../../assets/logoDarkTheme.png'
import '../navbar/navbar.css'
import { Link } from 'react-router-dom'
import { uContext } from '../../contex/UserContex'

function Navbar() {

    const { user, isDarkMode } = useContext(uContext)

    return (
        <>
            <nav className='navigation'>
                <figure className='logo-cont'>
                    <img src={isDarkMode ? LogoDarkTheme : LogoLightTheme} className='logo'/>
                </figure>

                <div className="nav-links">
                    <Link to={'/'}><i className="fa-solid fa-house"></i><p className='link-text'>Home</p></Link>
                    
                    <Link to={'/login'}><i className="fa-solid fa-right-to-bracket"></i><p className="link-text">Login</p></Link>
                    
                    <Link to={'/signup'}><i className="fa-solid fa-user-plus"></i><p className="link-text">Signup</p></Link>
                    
                    <Link to={'/reels'}><i className="fa-solid fa-clapperboard"></i><p className="link-text">Reels</p></Link>

                    <Link to={'/profile'}><i className="fa-solid fa-user"></i>{user ? <p className='link-text'>{user.username}</p> : <p className='link-text'>Profile</p>}</Link>

                </div>
            </nav>
        </>
    )
}

export default Navbar
