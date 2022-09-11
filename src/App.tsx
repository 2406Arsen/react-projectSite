import { useEffect, useState } from 'react';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import AboutUs from './Pages/AboutUs/AboutUs';
import Home from './Pages/Home/Home';
import './Styles/index.scss'
import { Route, Routes } from "react-router-dom";
import CheckOut from './Components/CheckOut/CheckOut';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';
import RegistrationSucceed from './Pages/Registration/RegistrationSucceed';
import Clients from './Pages/Clients/Clients';
import { checkSessionIsAuth } from './Utils/checkSessionIsAuth';
import { IFormInputValues } from './module';
import { getUsersData } from './Api/Api';

function App() {

  const [isAuth, setIsAuth] = useState(checkSessionIsAuth())

  const activeUserFromStorage = sessionStorage.getItem('activeUser')

  const [activeUser, setActiveUser] = useState(
    activeUserFromStorage
      ? JSON.parse(activeUserFromStorage) as IFormInputValues
      : null
  )

  useEffect(() => { getUsersData() }, [])


  return (
    <div className="App">
      <Navigation isAuth={isAuth} activeUser={activeUser} setIsAuth={setIsAuth} />

      <Routes>
        <Route path='/sign-in' element={
          <LogIn setIsAuth={setIsAuth}
            activeUser={activeUser}
            setActiveUser={setActiveUser}
          />
        }
        />
        <Route path='/sign-up' element={<Registration />} />
        <Route path='/sign-up/ready' element={<RegistrationSucceed />} />
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
