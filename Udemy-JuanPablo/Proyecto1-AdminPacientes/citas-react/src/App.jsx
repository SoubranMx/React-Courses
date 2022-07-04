import React from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

const App = () => {
  return (
    <>
      <Formulario />
      <Header />
      <ListadoPacientes />
    </>
  )
}

export default App