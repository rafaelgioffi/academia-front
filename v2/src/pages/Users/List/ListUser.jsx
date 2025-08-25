import React from "react";
import { ReactComponent as ListUserBG } from 'assets/images/bg-user.svg'
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";

function ListUser() {
    const navigate = useNavigate();
    
    return (
        <Layout image={ListUserBG}>
            <p>Users</p>
            <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        </Layout>
    )
}

export default ListUser;