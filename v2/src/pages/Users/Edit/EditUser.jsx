import React from "react";
import { ReactComponent as EditUserBG } from 'assets/images/bg-user.svg'
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";

function EditUser() {
    const navigate = useNavigate();
    
    return (
        <Layout image={EditUserBG}>
            <p>Edit User</p>
            <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        </Layout>
    )
}

export default EditUser;