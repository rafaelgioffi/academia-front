import React from "react";
import { ReactComponent as EditProjectBG } from "assets/images/bg-edit-project.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import Layout from "containers/Layout/Layout";
import { Typography, TextField } from "@mui/material";
import Button from "components/Button";

function EditProject() {
  const navigate = useNavigate();

  return (
    <Layout image={EditProjectBG}>
      <div className="w-75 mb-3">
        <Typography variant="h3" fontWeight="bold">
          Editar projeto
        </Typography>
      </div>
      <div className="w-75 mb-3">
        <TextField className="w-100 mb-2" label="Título" variant="standard" />
        <TextField
          className="w-100 mb-2"
          label="Custo total"
          variant="standard"
        />
        <TextField
          className="w-100 mb-2"
          label="Descrição"
          variant="standard"
        />
      </div>
      <div className="w-75 mb-3">
        <Button
          className="w-50 py-2"
          size="large"
          onClick={() => navigate(ROUTES_PATH.project)}>
          Salvar
        </Button>
        <Button
          className="w-50"
          size="large"
          onClick={() => navigate(ROUTES_PATH.home)}>
          Cancelar
        </Button>
      </div>
    </Layout>
  );
}

export default EditProject;
