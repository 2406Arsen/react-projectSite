import { MdOutlineDoneAll } from "react-icons/md";

const RegistrationSucceed = () => {
    return (
        <div className="page">
            <div className='RegistrationSucceed'>
                <div className="icon">
                    <MdOutlineDoneAll />
                </div>
                <span className='title'>
                    Account successfully created!
                </span>
                <span className='context'>
                    <span>Log in</span> to your account!
                </span>
            </div>
        </div>
    )
}

export default RegistrationSucceed