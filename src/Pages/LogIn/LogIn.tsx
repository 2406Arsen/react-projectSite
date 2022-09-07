import React from "react";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { ISignInFormValues } from "../../module";
const LogIn = ({ setIsAuth }: { setIsAuth: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const [inputValues, setInputValues] = React.useState<ISignInFormValues>({
        name: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const signInFunc = () => {
        const localArray = Object.values(localStorage);
        localArray.forEach((user) => {
            if (JSON.parse(user).name === inputValues.name && JSON.parse(user).password === inputValues.password) {
                setIsAuth(true)
            } else {
                console.log(user);
            }
        })
    }



    return (
        <div className="page">
            <div className="LogIn">
                <span className="LogInTitle">Authorization</span>
                <div className="forms">
                    <div className="formInput">
                        <FiUser />
                        <input
                            type="text"
                            placeholder="Name"
                            value={inputValues.name}
                            name='name'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="formInput">
                        <RiLockPasswordLine />
                        <input
                            type="text"
                            placeholder="Password"
                            value={inputValues.password}
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <Button content="Sign In" width={130} height={50} click={signInFunc} />
                    <Link to={'/sign-up'} style={{ textDecoration: 'none' }}>
                        <button className="btnSignUp">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;