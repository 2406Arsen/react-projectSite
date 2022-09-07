import { Navigate, useLocation, useNavigate } from "react-router-dom";
import React from 'react';

const CheckOut: React.FC<{ children: React.ReactNode | null, isAuth: boolean }> =
    ({ children, isAuth }): JSX.Element | null => {
        console.log(isAuth);
        
        if (!isAuth) {
            return <Navigate to='/sign-in' />
        }
        return (
            <>
                {children}
            </>
        )
    }

export default CheckOut;