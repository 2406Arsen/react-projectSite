import React from 'react'
import { ISelfClientProps } from '../../module'

const SelfClient: React.FC<ISelfClientProps> = ({ userCom }) => {
    return (
        <div className='SelfClient'>
            <div className="clientInfo">
                <div className="clientPicture" style={{backgroundImage: `url('${userCom.img}')`}}></div>
                <div className="clientNameAndJob">
                    <span className="clientName">{userCom.fullName}</span>
                    <span className="clientJob">{userCom.job}</span>
                </div>
            </div>
            <div className="clientComment">
                <span>{userCom.comment}</span>
            </div>
        </div>
    )
}

export default SelfClient