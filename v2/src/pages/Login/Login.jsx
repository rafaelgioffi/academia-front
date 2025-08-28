import React from "react";
import { ReactComponent as UserRegisterBG } from "assets/images/bg-register-user.svg";
import Layout from "containers/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Button from "components/Button";
import Input from "components/Form/Input";
import { Typography, Grid } from "@mui/material";
import { Formik, Form } from "formik";
import { validateForm } from "./schemas";
import { INITIAL_VALUES } from "./constants";

function RegisterUser() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(ROUTES_PATH.project);
  };

  return (
    <Layout image={UserRegisterBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={INITIAL_VALUES}
        validateSchema={validateForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-100 mb-3">
              <Typography variant="h2" fontWeight="bold">
                Entre ou faça seu cadastro
              </Typography>
            </div>
            <div className="w-75 mb-3">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input name="email" label="E-Mail" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="password" label="Senha" type="password" />
                </Grid>
              </Grid>
            </div>
            <div className="w-75 mb-3">
              <Button className="mb-3 w-50 py-3" size="large" type="submit">
                Entrar
              </Button>
              <Button
                className="w-50 py-3"
                size="large"
                variant="text"
                onClick={() => navigate(ROUTES_PATH.user + "/novo-usuario")}
              >
                Cadastrar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default RegisterUser;
