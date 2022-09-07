import React, { useState } from 'react';
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

function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <Navigation />




      <Routes>
        <Route path='/sign-in' element={<LogIn setIsAuth={setIsAuth} />} />
        <Route path='/sign-up' element={<Registration />} />
        <Route path='/sign-up/ready' element={<RegistationSucceed />} />
        <Route path='/' element={<Home />} />
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
