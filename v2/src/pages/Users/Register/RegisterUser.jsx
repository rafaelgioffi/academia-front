import React from "react";
import { ReactComponent as UserRegisterBG } from 'assets/images/bg-register-user.svg'
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";

function RegisterUser() {
    const navigate = useNavigate();
    
    return (
        <Layout image={UserRegisterBG}>
            <p>Register User</p>
            <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        </Layout>
    )
}

export default RegisterUser;