import React from 'react'
import Button from '../Button/Button'
import { Link } from "react-router-dom";
import NavigationUser from '../NavigationUser/NavigationUser';
import { INavigation } from '../../module';

const Navigation: React.FC<INavigation> = ({ isAuth, activeUser }) => {

    const functionForBtn = () => {

    }
    return (
        <div className='Navigation'>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <div className="Navigation__logotype">
                    <div className="logo"></div>
                    <span className='text'>Our<span>Logo</span> </span>
                </div>
            </Link>
            <ul>
                <li> <Link to={'/about'} style={{ textDecoration: 'none', color: ' #1075bb ' }}> About Us</Link></li>
                <li>Our Blog</li>
                <li>Happy Clients</li>
            </ul>
            {!isAuth
                ? (<Link to={'/sign-in'} style={{ textDecoration: 'none' }}>
                    <Button width={90} height={40} content={'Sign In'} click={functionForBtn} />
                </Link>)
                : <NavigationUser activeUser={activeUser}/>}
        </div>
    )
}

export default Navigation