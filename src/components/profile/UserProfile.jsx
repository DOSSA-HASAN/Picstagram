import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import { uContext } from '../../contex/UserContex'
import './userProfile.css'

function UserProfile() {

    const { user } = useContext(uContext)

    return (
        <div className='section-flex'>
            <Navbar />

            <section className="user-profile-section">
                <main className="user-info-cont">
                    {
                        // user ?
                        //     <div className="profile-picture-cont">
                        //         <img src={user.profilePic} alt="" srcset="" />
                        //     </div>
                        //     :
                        
                            <div className="profile-picture-cont">
                                <i className="fa-solid fa-user"></i>
                            </div>
                    }

                    <article className="users-info">
                        <div className="username-and-account-settings-btn-cont">
                            <p className="profile-username">{user ? user.username : ''}</p>
                            <button className="edit-profile-btn">Edit profile</button>
                            <button className="view-archive-btn">View archive</button>
                            <i className="fa-solid fa-gear"></i>
                        </div>

                        <div className="following-and-followers-cont">
                            <p><span className='count'>0</span> posts</p>
                            <p><span className='count'>0</span> followers</p>
                            <p><span className='count'>0</span> following</p>
                        </div>

                        <div className="user-bio-cont">
                            
                        </div>
                    </article>
                </main>

                <figure className="users-posts">

                </figure>
            </section>
        </div>
    )
}

export default UserProfile
