import React from "react";
import { ReactComponent as RegisterProjectBG } from "assets/images/bg-register-project.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";
import { Typography, Grid } from "@mui/material";
import Button from "components/Button";
import Input from "components/Form/Input";
import { Formik, Form } from "formik";

function RegisterProject() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate(ROUTES_PATH.project);
  };

  return (
    <Layout image={RegisterProjectBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={INITIAL_VALUES}
        validationSchema={validateForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-75 mb-3">
              <Typography variant="h2" fontWeight="bold">
                Vamos cadastrar seu novo projeto!
              </Typography>
            </div>
            <div className="w-75 mb-3">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Input name="title" label="Título" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="value" label="Custo total" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="description" label="Descrição" />
                </Grid>
              </Grid>
            </div>
            <div className="w-75 mb-3">
              <Button
                className="w-50 py-2"
                size="large"
                type="submit"
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
          </Form>
        )}
      </Formik>
    </Layout>
  );
}

export default RegisterProject;
