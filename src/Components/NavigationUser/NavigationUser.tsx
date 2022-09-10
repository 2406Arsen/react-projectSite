import React from 'react'
import { INavigationUser } from '../../module'
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NavigationUser: React.FC<INavigationUser> = ({ setIsAuth }) => {
    const navigate = useNavigate()
    const signOut = () => {
        sessionStorage.removeItem('isAuth')
        setIsAuth(false);
        navigate('/')
    }
    const actUser = JSON.parse(sessionStorage.activeUser)
    return (
        <div className='NavigationUser'>
            { }
            <div className="userImage">{actUser.name.split('')[0].toUpperCase()}</div>
            <div>
                <span className='userName'>{actUser.name}</span>
                <span className='userEmail'>{actUser.email}</span>
            </div>
            <div className='signOut' onClick={signOut}><FaSignOutAlt /></div>
        </div>
    )
}

export default NavigationUser