import React from 'react'
import ReactDOM from 'react-dom/client'
import {ListadoEmpleados} from './empleados/ListadoEmpleados.jsx'
import {Navegacion} from './plantilla/Navegacion.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {AgregarEmpleado} from './empleados/AgregarEmpleado.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navegacion/>
    <Routes>
      <Route exact path='/' element={<ListadoEmpleados/>}></Route>
      <Route exact path='/agregar' element={<AgregarEmpleado/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
