import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import './auth.css'

function Login() {

    //variable to store users number / username / email
    const [account, setAccount] = useState("")
    const [password, setPassword] = useState("")

    //success and error mssg
    const [successMssg, setSuccessMssg] = useState("");
    const [errorMssg, setErrorMssg] = useState("");

    return (
        <>
            <Navbar />

            <section className='login-section'>
                <form action="" className='login-form'>

                    <div className={`${errorMssg ? 'error-cont' : 'displaye-none'}`}>

                        {errorMssg ? <h2 className='error-title'>Error</h2> : ''}

                        {errorMssg ? <p className='error-mssg'>{errorMssg}</p> : ''}

                        <div className='h-r'></div>

                        <button onClick={(e) => setErrorMssg("")} className='dismiss-error-btn'>Dismiss</button>
                    </div>

                    <figure className='auth-logo'>
                        <img src={Logo} alt="" />
                    </figure>

                    <input type="text" placeholder='Phone number, username, or email' value={account} onChange={(e) => setAccount(e.target.value)} />
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button className="login-btn">Log in</button>
                </form>

                <div className="signup-instead-cont">
                    <Link to={'/signup'}><p>Don't have an account? <span>Sign up</span></p></Link>
                </div>
            </section>
        </>
    )
}

export default Login
