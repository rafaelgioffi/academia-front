import React from "react";
import { ReactComponent as EditUserBG } from 'assets/images/bg-user.svg'
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import {
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio
} from "@mui/material";
import Button from "components/Button";

function EditUser() {
    const navigate = useNavigate();
    
    return (
        <Layout image={EditUserBG}>
            <div className="w-100 mb-3">                  
                    <Typography variant="h4" fontWeight="bold">
                      Editar usuário
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
                      className="w-50 py-2"
                      size="large"
                      
                      onClick={() => navigate(ROUTES_PATH.user)}
                    >
                      Salvar
                    </Button>
                    <Button
                      className="w-50"
                      size="large"
                      
                      onClick={() => navigate(ROUTES_PATH.home)}
                    >
                      Cancelar
                    </Button>
                  </div>
        </Layout>
    )
}

export default EditUser;