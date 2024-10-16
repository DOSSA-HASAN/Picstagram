import './App.css'
import Login from './components/Authentication/Login'
import Signup from './components/Authentication/Signup'
import MainPage from './components/MainPage'
import { UserContex } from './contex/UserContex'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <UserContex>
        <BrowserRouter>
          <Routes>
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/mainpage' element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </UserContex>
    </>
  )
}

export default App
