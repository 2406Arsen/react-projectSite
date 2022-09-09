import React, { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import './Styles/index.scss'
import { Route, Routes } from "react-router-dom";
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';
import RegistationSucceed from './Pages/Registration/RegistationSucceed';
import axios from 'axios'
import Clients from './Pages/Clients/Clients';

function App() {
  const checkSessionIsAuth = () => {
    if (sessionStorage.hasOwnProperty('isAuth')) {
      return true
    }
    return false
  }

  const [isAuth, setIsAuth] = useState(checkSessionIsAuth())
  console.log(isAuth);


  const [data, setData] = useState(null)
  const [activeUser, setActiveUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  useEffect(() => {
    axios.get('users.json')
      .then((res) => {
        localStorage.setItem('comments', JSON.stringify(res.data))
      }).catch((e) => {
        console.error(e);
      })
  }, [])




  return (
    <div className="App">
      <Navigation isAuth={isAuth} activeUser={activeUser} setIsAuth={setIsAuth} />

      <Routes>
        <Route path='/sign-in' element={<LogIn setIsAuth={setIsAuth} activeUser={activeUser} setActiveUser={setActiveUser} />} />
        <Route path='/sign-up' element={<Registration />} />
        <Route path='/sign-up/ready' element={<RegistationSucceed />} />
        <Route path='/' element={<Home />} />
        <Route path='happy-clients' element={<Clients />} />
        <Route path='/about' element={
          <CheckOut isAuth={isAuth}>
            <AboutUs />
          </CheckOut>
        } />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
