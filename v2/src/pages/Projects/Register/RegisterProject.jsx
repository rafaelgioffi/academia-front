import React from "react";
import { ReactComponent as RegisterProjectBG } from 'assets/images/bg-register-project.svg'
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";

function RegisterProject() {
    const navigate = useNavigate();

    return (
        <Layout image={RegisterProjectBG}>
        <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        <p>Register Project</p>
        </Layout>
    );
}

export default RegisterProject;