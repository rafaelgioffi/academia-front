import React from "react";
import Button from "../../components/Button";

function App() {
  const onClickButton = () => {
    console.log("Clicou no botão");
  };

  return (
    <>
      <Button onClick={onClickButton} />
    </>
  );
}

export default App;
