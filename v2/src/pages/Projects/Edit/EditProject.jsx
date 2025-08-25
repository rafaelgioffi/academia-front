import React from "react";
import { ReactComponent as EditProjectBG } from 'assets/images/bg-edit-project.svg'
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";

function EditProject() {
    const navigate = useNavigate();

    return (
        <Layout image={EditProjectBG}>
        <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        <p>Edit Project</p>
        </Layout>
    );
}

export default EditProject;