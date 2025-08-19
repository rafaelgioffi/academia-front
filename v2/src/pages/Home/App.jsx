import React from "react";
import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";

function App() {
  const actionButtonProps = {
    label: "Novo Projeto",
    action: () => 
      console.log("clicou 'Novo projeto'")
    }  

  return (
    <>
      <Header />
      <PageTitle title="Projetos" actionButton={actionButtonProps} />
    </>
  )
}

export default App;
