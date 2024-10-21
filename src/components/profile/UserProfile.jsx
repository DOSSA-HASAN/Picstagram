import React, { useContext } from 'react'
import Navbar from '../navbar/Navbar'
import { uContext } from '../../contex/UserContex'
import './userProfile.css'
import { Link } from 'react-router-dom'

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
                            <button className="profile-username">{user ? user.username : 'Instagram user'}</button>
                            <button className="edit-profile-btn">Edit profile</button>
                            <button className="view-archive-btn">View archive</button>
                            <i className="fa-solid fa-gear"></i>
                        </div>

                        <div className="following-and-followers-cont">
                            <button><span className='count'>0</span> posts</button>
                            <button><span className='count'>0</span> followers</button>
                            <button><span className='count'>0</span> following</button>
                        </div>

                        <div className="user-bio-cont">
                            {user ? <p className='user-fullname'>{user.fullName}</p> : 'Instagram user'}
                        </div>
                    </article>
                </main>

                <article className='highlights'>
                    <figure className="highlights-cont">
                        <div className="create-highlight-cont">
                            <button className="add-highlight-btn-cont">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                        <p>New</p>
                    </figure>
                </article>

                <figure className='user-posts-saved-tagged'>
                    <div className="titles">
                        <Link to={'/'}><i className="fa-solid fa-table-cells"></i><p>POSTS</p></Link>
                        <Link to={'/'}><i className="fa-regular fa-bookmark"></i><p>SAVED</p></Link>
                        <Link to={'/'}><i className="fa-solid fa-users-rectangle"></i><p>TAGGED</p></Link>
                    </div>

                    <figure className="content">
                        {/* if the user doesnt have any posts this will show */}

                        <div className="no-content-alternative-cont">
                            <i class="fa-solid fa-camera"></i>
                            <h1>Share Photos</h1>
                            <p>When you share photos, they will appear on your profile.</p>
                            <button>Share your first photo</button>
                        </div>

                    </figure>
                </figure>
            </section>
        </div>
    )
}

export default UserProfile
