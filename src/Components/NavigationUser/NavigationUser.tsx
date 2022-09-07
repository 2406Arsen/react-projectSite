import React from 'react'
import { INavigationUser } from '../../module'

const NavigationUser: React.FC<INavigationUser> = ({ activeUser }) => {

    return (
        <div className='NavigationUser'>
            <div className="userImage">{activeUser.name.split('')[0].toUpperCase()}</div>
            <div>
                <span className='userName'>{activeUser.name}</span>
                <span className='userEmail'>{activeUser.email}</span>
            </div>
        </div>
    )
}

export default NavigationUser