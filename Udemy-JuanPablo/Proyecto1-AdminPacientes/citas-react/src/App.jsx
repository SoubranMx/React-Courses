import React, { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

const App = () => {
  const [pacientes, setPacientes] = useState([]);

  const onSubmitPaciente = (paciente) => {
    setPacientes([...pacientes, paciente]);
  };

  return (
    <div className="container mx-auto mt-4">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario onSubmitPaciente={onSubmitPaciente} />
        <ListadoPacientes />
      </div>
    </div>
  );
};

export default App;
