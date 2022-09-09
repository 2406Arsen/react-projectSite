import React from 'react'
import { ISelfClientProps } from '../../module';
import SelfClient from './SelfClient'

const Clients = () => {
  const dataComments: ISelfClientProps[] = JSON.parse(localStorage.comments);

  

  return (
    <div className="page">
      <div className="Clients">
        <span className='ClientsTitle'>Happy Clients about us</span>
        <div className="clientsComs">
          {dataComments.map((user) => 
            <SelfClient userCom={user} key={user.id} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Clients