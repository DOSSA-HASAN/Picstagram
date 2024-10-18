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
                    <Link to={'/'}>
                        <img src={isDarkMode ? LogoDarkTheme : LogoLightTheme} className='logo' />
                    </Link>
                </figure>

                <figure className='mini-logo-cont'>
                    <Link to={'/'}>
                        <i className="fa-brands fa-instagram"></i>
                    </Link>
                </figure>

                <div className="nav-links">
                    <Link to={'/'}>
                        <i className="fa-solid fa-house"></i>
                        <p className='link-text'>Home</p>
                    </Link>

                    <Link to={'/search-page'}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <p className='link-text'>Search</p>
                    </Link>

                    <Link to={'/explore-page'}>
                        <i className="fa-regular fa-compass"></i>
                        <p className='link-text'>Explore</p>
                    </Link>

                    <Link to={'/reels-page'}>
                        <i className="fa-solid fa-clapperboard"></i>
                        <p className="link-text">Reels</p>
                    </Link>

                    <Link to={'/user-conversations'}>
                        <i className="fa-brands fa-facebook-messenger"></i>
                        <p className="link-text">Messages</p>
                    </Link>

                    <Link to={'/user-notifications'}>
                        <i className="fa-regular fa-heart"></i>
                        <p className="link-text">Notifications</p>
                    </Link>

                    <Link to={'/user-create'}>
                        <i className="fa-regular fa-square-plus"></i>
                        <p className="link-text">Create</p>
                    </Link>

                    <Link to={'/profile'} className='user-profile-link'>
                        <i className="fa-solid fa-user"></i>
                        {user ? <p className='link-text'>{user.username}</p> : <p className='link-text'>Profile</p>}
                    </Link>
                </div>

                <div className="more-cont">
                    {/* <Link to={'/https://www.threads.net/'}>
                        <i className="fa-brands fa-threads"></i>
                        <p className="link-text">Threads</p>
                    </Link> */}

                    <Link to={'/more'}>
                        <i className="fa-solid fa-bars"></i>
                        <p className="link-text">More</p>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
