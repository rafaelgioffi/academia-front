import React from "react";
import { ReactComponent as UserRegisterBG } from "assets/images/bg-register-user.svg";
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import { Button } from "components/Button";
import {  
  Typography,
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";

function RegisterUser() {
  const navigate = useNavigate();

  return (
    <Layout image={UserRegisterBG}>
      <div className="w-100 mb-3">
        <Typography variant="h2" fontWeight="bold">
          Olá
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          Vamos criar seu cadastro
        </Typography>
      </div>
      <div className="w-100 mb-3">
        <Typography variant="body1" fontWeight="bold">
          Qual seu perfil?
        </Typography>
        <FormControl>
          <RadioGroup row>
            <FormControlLabel value="dev" control={<Radio />} label="Dev" />
            <FormControlLabel
              value="customer"
              control={<Radio />}
              label="Cliente"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="w-75 mb-3">
        <TextField
          className="w-100 mb-2"
          label="Nome Completo"
          variant="standard"
        />
        <TextField
          className="w-100 mb-2"
          label="Data de Nascimento"
          variant="standard"
        />
        <TextField className="w-100 mb-2" label="E-mail" variant="standard" />
        <TextField className="w-100 mb-2" label="Senha" variant="standard" />
      </div>
      <div className="w-75 mb-3">
        <Button
          className="w-50"
          size="large"
          fullWidth
          onClick={() => navigate(ROUTES_PATH.project)}
        >
          Cadastrar
        </Button>
        <Button
          className="w-50"
          size="large"
          fullWidth
          onClick={() => navigate(ROUTES_PATH.home)}
        >
          Voltar
        </Button>
      </div>
    </Layout>
  );
}

export default RegisterUser;
