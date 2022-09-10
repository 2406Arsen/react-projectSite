import { useState } from 'react'
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../../Components/Button/Button";
import { IFormInputValues } from '../../module';
import { Link } from "react-router-dom";
import { useInput } from '../../Utils/hooks/useInput';

const Registration = () => {

    const email = useInput('', { isEmpty: true, minLength: 3, maxLength: 8 });
    const password = useInput('', { isEmpty: true, minLength: 6, maxLength: 7 })

    const [values, setValues] = useState<IFormInputValues>({
        name: '',
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const addToData = (): void => {
        const idUser = sessionStorage.length + 1;
        sessionStorage.setItem(`user${idUser}`, JSON.stringify(values));
    }

    return (
        <div className="page">
            <div className='Registration'>
                <span className='RegistationTitle'>Registration</span>
                <div className="forms">
                    <div className="formInput">
                        <div>
                            <FiUser />
                            <input
                                type="text"
                                placeholder="Name"
                                value={values.name}
                                name='name'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* {(email.isDirty && email.minLengthError) && <div> Минимум нужно 3 симвлоа</div>} */}
                    {/* {(email.isDirty && email.maxLengthError) && <div> Максимум нужно 8 симвлоа</div>} */}
                    <div className="formInput">
                        <div>
                            <HiOutlineMail />
                            <input
                                type="email"
                                placeholder="Email adress"
                                value={email.value}
                                onChange={email.onChange}
                                onBlur={email.onBlur}
                                name={'email'}
                            // onChange={handleChange}
                            />
                        </div>
                    </div>
                    {/* {(password.isDirty && password.isEmptyError) && <div> Поле не может быть пустым</div>} */}
                    <div className="formInput">
                        <div>
                            <RiLockPasswordLine />
                            <input
                                type="password"
                                placeholder="Password"
                                value={values.password}
                                name={'password'}
                                onChange={handleChange}
                                onBlur={password.onBlur}
                            />
                        </div>

                        {/* {(password.isDirty && password.minLengthError)
                            && <span style={{}}>Password must contain at least <b>6</b> characters</span>} */}
                    </div>

                    {/* {(password.isDirty && password.minLengthError) && <div> Минимум нужно 5 симвлоа</div>}
                    {(password.isDirty && password.maxLengthError) && <div> Максимум нужно 7 симвлоа</div>} */}
                </div>
                <div className="buttons">
                    <Link to='/sign-up/ready'>
                        <Button content="Sign Up" width={130} height={50} click={addToData} />
                    </Link>
                    <button className="btnSignIn">Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default Registration