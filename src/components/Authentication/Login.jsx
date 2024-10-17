import React, { useContext, useState } from 'react'
import Navbar from '../navbar/Navbar'
import LogoLightTheme from '../../assets/logoLightTheme.png'
import LogoDarkTheme from '../../assets/logoDarkTheme.png'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebaseconfig/FirebaseConfig'
import { uContext } from '../../contex/UserContex'
import { doc, getDoc } from 'firebase/firestore'

function Login() {

    //global user data
    const { user, setUser, isDarkMode } = useContext(uContext)

    //variable to store users number / username / email
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")

    //navigate to home
    const navigateToHome = useNavigate();

    //success and error mssg
    const [successMssg, setSuccessMssg] = useState("");
    const [errorMssg, setErrorMssg] = useState("");

    const handleErrorMssg = () => {
        setErrorMssg("")
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMssg("")

        try {
            
            //func to let user login
            const userLogin = await signInWithEmailAndPassword(auth, account, password)
            console.log(userLogin.user)
            setUser(userLogin.user)
            
            //get doc for particular user
            const docRef = doc(db, "users", userLogin.user.uid)
            const userDoc = await getDoc(docRef)
            setUser({...userDoc.data(), id: userLogin.user.uid})
            console.log(userDoc.data())

            setSuccessMssg("SuccessFully logged in as " + userLogin.user.email)
            
            setAccount("")
            setPassword("")
            setErrorMssg("")


        } catch (error) {
            setErrorMssg(error.message)
            setSuccessMssg("")
            setAccount("")
            setPassword("")
        }
    } 

    const handleLoginSuccess = () => {
        setSuccessMssg("")
        setErrorMssg("")
        //once user clicks ok it redirects them to login page
        setTimeout(() => {
            navigateToHome('/')
        }, 0);
    }

    return (
        <>
            <Navbar />

            <section className='login-section'>
                <form onSubmit={handleLogin} className='login-form'>

                    <div className={`${errorMssg ? 'error-cont' : 'displaye-none'}`}>

                        {errorMssg ? <h2 className='error-title'>Error</h2> : ''}

                        {errorMssg ? <p className='error-mssg'>{errorMssg}</p> : ''}

                        <div className='h-r'></div>

                        <button onClick={handleErrorMssg} className='dismiss-error-btn'>Dismiss</button>
                    </div>

                    <div className={`${successMssg ? 'error-cont' : 'displaye-none'}`}>

                        {successMssg ? <h2 className='error-title'>Logged in</h2> : ''}

                        {successMssg ? <p className='error-mssg'>{successMssg + ' click Okay to continue'}</p> : ''}
                        
                        <div className='h-r'></div>
                        
                        <button onClick={handleLoginSuccess} className='dismiss-error-btn'>Okay</button>
                    </div>

                    <figure className='auth-logo'>
                        <img src={isDarkMode ? LogoDarkTheme : LogoLightTheme} alt="" />
                    </figure>

                    <input type="text" placeholder='Phone number, username, or email' value={account} onChange={(e) => setAccount(e.target.value.toLowerCase())} required/>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    <button type='submit' className="login-btn">Log in</button>
                </form>

                <div className="signup-instead-cont">
                    <Link to={'/signup'}><p>Don't have an account? <span>Sign up</span></p></Link>
                </div>
            </section>
        </>
    )
}

export default Login
