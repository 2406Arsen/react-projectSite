import React from "react";
import { FiUser } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { Ilogin, ISignInFormValues } from "../../module";
const LogIn: React.FC<Ilogin> = ({ setIsAuth, setActiveUser, activeUser }) => {
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
        const localArray = Object.values(sessionStorage);
        
        
        localArray.forEach((user) => {
            
            if (JSON.parse(user).name === inputValues.name && JSON.parse(user).password === inputValues.password) {
                sessionStorage.setItem('isAuth', JSON.stringify(true))
                setIsAuth(true)
                setActiveUser(JSON.parse(user))
                console.log(activeUser);
                console.log(JSON.parse(user));
                sessionStorage.setItem('activeUser', user)
                console.log(sessionStorage);
                
            } else {
                console.log('chavelacri');
            }
        })
        
        // console.log(activeUser);
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
                            type="password"
                            placeholder="Password"
                            value={inputValues.password}
                            name='password'
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="buttons">
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Button content="Sign In" width={130} height={50} click={signInFunc} />
                    </Link>

                    <Link to={'/sign-up'} style={{ textDecoration: 'none' }}>
                        <button className="btnSignUp">Sign Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogIn;