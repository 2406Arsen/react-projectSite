import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ISelfClientProps } from '../../module'
import { setCurrentClientAction } from '../../redux/clients/action'

const SelfClient: React.FC<ISelfClientProps> = ({ userCom }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    return (
        <div className='SelfClient'>
            <div className="clientInfo">
                <div className="clientPicture" style={{ backgroundImage: `url('${userCom.img}')` }}></div>
                <div className="clientNameAndJob">
                    <span className="clientName">{userCom.fullName}</span>
                    <span className="clientJob">{userCom.job}</span>
                </div>
            </div>
            <div className="clientComment">
                <span>{userCom.comment}</span>
            </div>
            <br />

            <button onClick={() => {
                dispatch(setCurrentClientAction(userCom))
                navigate(`${userCom.id}`)
            }}>Navigate to client page </button>
        </div>
    )
}

export default SelfClient