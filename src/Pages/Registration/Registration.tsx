import React from 'react'
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../../Components/Button/Button";
import { IFormInputValues } from '../../module';


const Registration = () => {

    const [values, setValues] = React.useState<IFormInputValues>({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const addToData = () => {
        const idUser = localStorage.length + 1;
        localStorage.setItem(`user${idUser}`, JSON.stringify(values));
    }

    return (
        <div className="page">
            <div className='Registration'>
                <span className='RegistationTitle'>Registration</span>
                <div className="forms">
                    <div className="formInput">
                        <FiUser />
                        <input
                            type="text"
                            placeholder="Name"
                            value={values.name}
                            name='name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <HiOutlineMail />
                        <input
                            type="email"
                            placeholder="Email adress"
                            value={values.email}
                            name={'email'}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <RiLockPasswordLine />
                        <input
                            type="password"
                            placeholder="Password"
                            value={values.password}
                            name={'password'}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="buttons">
                    <Button content="Sign Up" width={130} height={50} click={addToData} />
                    <button className="btnSignIn">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Registration