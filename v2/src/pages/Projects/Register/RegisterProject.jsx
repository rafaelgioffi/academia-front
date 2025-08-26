import React from "react";
import { ReactComponent as RegisterProjectBG } from "assets/images/bg-register-project.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";
import {
  Typography,
  TextField,
} from "@mui/material";
import Button from "components/Button";

function RegisterProject() {
  const navigate = useNavigate();

  return (
    <Layout image={RegisterProjectBG}>
      <div className="w-75 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Vamos cadastrar seu novo projeto!
        </Typography>        
      </div>
      <div className="w-75 mb-3">
        <TextField
          className="w-100 mb-2"
          label="Título"
          variant="standard"
        />
        <TextField
          className="w-100 mb-2"
          label="Custo total"
          variant="standard"
        />
        <TextField className="w-100 mb-2" label="Descrição" variant="standard" />
      </div>
      <div className="w-75 mb-3">
        <Button
          className="w-50 py-2"
          size="large"
          
          onClick={() => navigate(ROUTES_PATH.project)}
        >
          Cadastrar
        </Button>
        <Button
          className="w-50"
          size="large"
          
          onClick={() => navigate(ROUTES_PATH.home)}
        >
          Voltar
        </Button>
      </div>
    </Layout>
  );
}

export default RegisterProject;
