import React, { useEffect, useState } from "react";
import { ReactComponent as EditProjectBG } from "assets/images/bg-register-project.svg";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";
import { Typography, Grid } from "@mui/material";
import Button from "components/Button";
import Input from "components/Form/Input";
import { Formik, Form } from "formik";
import { INITIAL_VALUES } from "../constants";
import { validateForm } from "../schemas";
import ProjectServices from "services/projects";

function EditProject() {
  const navigate = useNavigate();
  const { idProject } = useParams();
  const [selectedProject, setSelectedProject] = useState();

  useEffect(() => {
    ProjectServices.getProjectById(idProject)
      .then(({ data }) => {
        setSelectedProject(data);
      })
      .catch((error) => console.log("Erro ao buscar projetos: ", error));
  })

  const onSubmit = () => {
    navigate(ROUTES_PATH.project);
  };

  return (
    <Layout image={EditProjectBG}>
      <Formik
        onSubmit={onSubmit}
        initialValues={selectedProject ?? INITIAL_VALUES}
        validationSchema={validateForm}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="w-75 mb-3">
              <Typography variant="h3" fontWeight="bold">
                Editar projeto
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
              <Button className="w-50 py-2" size="large" type="submit">
                Salvar
              </Button>
              <Button
                className="w-50"
                size="large"
                onClick={() => navigate(ROUTES_PATH.project)}
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

export default EditProject;
