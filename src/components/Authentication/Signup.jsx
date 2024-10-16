import React, { useContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../firebaseconfig/FirebaseConfig'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { uContext } from '../../contex/UserContex'

function Signup() {

    //gloabl user information like email.
    const { user, setUser} = useContext(uContext)

    //signupp fields
    const [mobileOrEmail, setMobileOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("")

    //success and error messages
    const [successMssg, setSuccessMssg] = useState("");
    const [errorMssg, setErrorMssg] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const creatingUser = await createUserWithEmailAndPassword(auth, mobileOrEmail,password)
        setUser(creatingUser.user)

        //doc ref for new user
        const docRef = doc(db, "users", creatingUser.user.uid)
        await setDoc(docRef, {
            mobileOrEmail,
            fullName,
            username
        })
    }

    return (
        <>
            <Navbar />

            <section className='signup-section'>
                <form onSubmit={handleSubmit} className='login-form'>

                    <div className={`${errorMssg ? 'error-cont' : 'displaye-none'}`}>

                        {errorMssg ? <h2 className='error-title'>Error</h2> : ''}

                        {errorMssg ? <p className='error-mssg'>{errorMssg}</p> : ''}
                        
                        <div className='h-r'></div>
                        
                        <button onClick={(e) => setErrorMssg("")} className='dismiss-error-btn'>Dismiss</button>
                    </div>

                    <figure className='auth-logo'>
                        <img src={Logo} alt="" />
                        <p>Sign up to see photos and videos from your friends.
                        </p>
                    </figure>

                    <input type="text" placeholder='Mobile number or email' value={mobileOrEmail} onChange={(e) => setMobileOrEmail(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="text" placeholder='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />

                    <button type='submit' className="login-btn">Signup</button>

                    <div className="policies">
                        <p>People who use our service may have uploaded your contact information to Instagram. <Link to={'https://web.facebook.com/help/instagram/261704639352628?_rdc=1&_rdr'}>Learn More</Link></p>

                        <p>By signing up, you agree to our <Link to={'https://help.instagram.com/581066165581870/?locale=en_US'}> Terms </Link>, <Link to={'https://free.facebook.com/privacy/policy/#'}>Privacy Policy</Link> and <Link to={'https://privacycenter.instagram.com/policies/cookies/'}>Cookies Policy .</Link></p>
                    </div>
                </form>

                <div className="signup-instead-cont">
                    <Link to={'/login'}><p>Have an account?<span>  Log in</span></p></Link>
                </div>
            </section>
        </>
    )
}

export default Signup
