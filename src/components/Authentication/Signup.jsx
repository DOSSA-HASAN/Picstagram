import React, { useContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import LogoLightTheme from '../../assets/logoLightTheme.png'
import LogoDarkTheme from '../../assets/logoDarkTheme.png'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db, auth } from '../../firebaseconfig/FirebaseConfig'
import { addDoc, doc, setDoc } from 'firebase/firestore'
import { uContext } from '../../contex/UserContex'

function Signup() {

    //gloabl user information like email.
    const { user, setUser, isDarkMode} = useContext(uContext)

    const naviagteToLogin = useNavigate();

    //signupp fields
    const [mobileOrEmail, setMobileOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("")

    //success and error messages
    const [successMssg, setSuccessMssg] = useState("");
    const [errorMssg, setErrorMssg] = useState("");

    const handleAccountCreated = () => {
        setSuccessMssg("")
        //once user clicks ok it redirects them to login page
        setTimeout(() => {
            naviagteToLogin('/login')
        }, 0);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const creatingUser = await createUserWithEmailAndPassword(auth, mobileOrEmail,password)
            setUser(creatingUser.user)
    
            //doc ref for new user
            const docRef = doc(db, "users", creatingUser.user.uid)
            await setDoc(docRef, {
                mobileOrEmail,
                fullName,
                username,
                id: creatingUser.user.uid,
                createdAt: Date.now()
            })

            setMobileOrEmail("")
            setPassword("")
            setFullName("")
            setUsername("")
    
            setSuccessMssg("Account created successfully")
        } catch (error) {
            setErrorMssg(error.message)
            setSuccessMssg("")
            setMobileOrEmail("")
            setPassword("")
            setFullName("")
            setUsername("")
        }


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

                    <div className={`${successMssg ? 'error-cont' : 'displaye-none'}`}>

                        {successMssg ? <h2 className='error-title'>Account created</h2> : ''}

                        {successMssg ? <p className='error-mssg'>{successMssg + ' click Okay to continue'}</p> : ''}
                        
                        <div className='h-r'></div>
                        
                        <button onClick={handleAccountCreated} className='dismiss-error-btn'>Okay</button>
                    </div>

                    <figure className='auth-logo'>
                        <img src={isDarkMode ? LogoDarkTheme : LogoLightTheme} alt="" />
                        <p>Sign up to see photos and videos from your friends.
                        </p>
                    </figure>

                    <input type="text" placeholder='Mobile number or email' value={mobileOrEmail} onChange={(e) => setMobileOrEmail(e.target.value.toLowerCase())} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <input type="text" placeholder='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} required/>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} required/>

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
