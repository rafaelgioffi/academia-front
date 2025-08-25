import React from "react";
import { ReactComponent as ListProjectBG } from 'assets/images/bg-register-project.svg'
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";

function ListProject() {
    const navigate = useNavigate();

    return (
        <Layout image={ListProjectBG}>
        <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        <p>Projects</p>
        </Layout>
    );
}

export default ListProject;