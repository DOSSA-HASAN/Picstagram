import './App.css'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import MainPage from './components/MainPage'
import Home from './components/home/Home'
import UserProfile from './components/profile/UserProfile'
import { UserContex } from './contex/UserContex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <UserContex>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/mainpage' element={<MainPage />} />
            <Route exact path='/profile' element={<UserProfile />} />
          </Routes>
        </BrowserRouter>
      </UserContex>
    </>
  )
}

export default App
