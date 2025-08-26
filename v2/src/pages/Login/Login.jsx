import React from "react";
import { ReactComponent as UserRegisterBG } from "assets/images/bg-register-user.svg";
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Button from "components/Button";
import {  
  Typography,
  TextField,
} from "@mui/material";

function RegisterUser() {
  const navigate = useNavigate();

  return (
    <Layout image={UserRegisterBG}>
      <div className="w-100 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Entre ou faça seu cadastro
        </Typography>        
      </div>            
      <div className="w-75 mb-3">        
        <TextField className="w-100 mb-2" label="E-mail" variant="standard" />
        <TextField className="w-100 mb-2" label="Senha" variant="standard" />
      </div>
      <div className="w-75 mb-3">
        <Button className="w-50 py-2" size="large" onClick={() => navigate(ROUTES_PATH.project)}>Entrar</Button>
        <Button className="w-50" size="large" variant="text" onClick={() => navigate(ROUTES_PATH.user+'/novo-usuario')}>Cadastrar</Button>
      </div>
    </Layout>
  );
}

export default RegisterUser;
