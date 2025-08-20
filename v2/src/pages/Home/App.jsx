import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ProjectTable from "../../containers/ProjectTable";
import { PROJECT_DATA } from './constants';

function App() {
  const actionButtonProps = {
    label: "Novo Projeto",
    action: () => console.log("clicou 'Novo projeto"),
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center", with: "100%" }}>
        <div style={{ with: "800px", paddingTop: "48px" }}>
          <PageTitle title="Projetos" actionButton={actionButtonProps} />
          <ProjectTable projectData={PROJECT_DATA} />
        </div>
      </div>
    </>
  );
}

export default App;
