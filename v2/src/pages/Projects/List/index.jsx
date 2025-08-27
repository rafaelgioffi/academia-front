import React from "react";
import { useNavigate } from 'react-router-dom';
import PageTitle from "components/PageTitle";
import ProjectTable from "containers/ProjectTable";
import { PROJECT_DATA } from './constants';
import { ROUTES_PATH } from "commons/constants/routes-path";
import { Button } from "@mui/material";

function App() {
  const navigate = useNavigate()

  const actionButtonProps = {
    label: "Novo Projeto",
    action: () => navigate(`${ROUTES_PATH.project}/novo-projeto`)
  };

  return (
    <>      
      <div style={{ display: "flex", justifyContent: "center", with: "100%" }}>
        <div style={{ with: "800px", paddingTop: "48px" }}>
          <PageTitle title="Projetos" actionButton={actionButtonProps}/>
          <ProjectTable projectData={PROJECT_DATA} />
        </div>
      </div>
        <Button className="w-100" onClick={() => navigate(`${ROUTES_PATH.user}/novo-usuario`)}>Usuários</Button>
    </>
  );
}

export default App;
