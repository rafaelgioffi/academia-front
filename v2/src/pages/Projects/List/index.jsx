import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES_PATH } from "commons/constants/routes-path";
import PageTitle from "components/PageTitle";
import ProjectTable from "containers/ProjectTable";
import ProjectServices from 'services/projects';
// import { PROJECT_DATA } from "./constants";

function ListProject() {
  const navigate = useNavigate();
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    ProjectServices.getProjects()
    .then(({data}) => {
      console.log('data', data)
      setProjectList(data)
    })
    .catch((error) => console.log("Erro ao buscar projetos: ", error));
  }, [])

  const actionButtonProps = {
    label: "Novo Projeto",
    action: () => navigate(`${ROUTES_PATH.project}/novo-projeto`),
  };

  const onDelete = (idProject) => {
    ProjectServices.deleteProject(idProject)
    .then(() => {
      console.log("Projeto excluído com sucesso");   
    })
    .catch((error) => console.log("Erro ao excluir projeto: ", error))
   }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", with: "100%" }}>
        <div style={{ with: "800px", paddingTop: "48px" }}>
          <PageTitle title="Projetos" actionButton={actionButtonProps} />
          {/* <ProjectTable projectData={PROJECT_DATA} /> */}
          <ProjectTable projectData={projectList} onDelete={onDelete} />
        </div>
      </div>
      <Button
        className="w-100"
        onClick={() => navigate(`${ROUTES_PATH.user}/novo-usuario`)}
      >
        Usuários
      </Button>
    </>
  );
}

export default ListProject;
