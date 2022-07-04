import React from "react";

const Paciente = () => {
  return (
    <div className="mx-5 my-5 bg-white shadow-md rounded-xl px-5 py-10">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">Uriel Soubran</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">uriel@ejemplo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">10-Dic-2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
          aperiam cum iusto debitis recusandae molestias officia sed dolorum ut
          placeat nulla aliquid, facilis praesentium excepturi obcaecati in,
          repellat quos repudiandae.
        </span>
      </p>
    </div>
  );
};

export default Paciente;
