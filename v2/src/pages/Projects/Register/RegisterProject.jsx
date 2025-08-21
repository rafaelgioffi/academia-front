import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";

function RegisterProject() {
    const navigate = useNavigate();

    return (
        <>
        <button onClick={() => navigate(ROUTES_PATH.home)}>Voltar</button>
        <p>Register Project</p>
        </>
    );
}

export default RegisterProject;