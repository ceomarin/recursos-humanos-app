import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";


export function ListadoEmpleados() {
  const urlBase = "http://localhost:8080/api/empleados";
  const [empleados,setEmpleados] = useState([]);
  useEffect(()=>{
    cargarEmpleados();
  },[]);

  const cargarEmpleados = async () =>{
    const resultado =await axios.get(urlBase);
    console.log("Resultado de cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  }

  const eliminarEmpleado = async (id) => {
    await axios.delete(`${urlBase}/${id}`)
    cargarEmpleados();
  }

  return (
    <div className="container text-center">
      <h1>Listado de Empleados</h1>
      <table className="table table-striped table-hover align-middle">
  <thead className="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Empleado</th>
      <th scope="col">Departamento</th>
      <th scope="col">Sueldo</th>
      <th scope="col">Editar - ELiminar</th>
    </tr>
  </thead>
  <tbody>
    {
      empleados.map((empleado,indice)=>(
      <tr key={indice}>
        <th scope="row">{empleado.id}</th>
        <td>{empleado.nombre}</td>
        <td>{empleado.departamento}</td>
        <td><NumericFormat value={empleado.sueldo}
            displayType={"text"}
            thousandSeparator="," prefix="$"
            decimalScale={2} fixedDecimalScale /></td>
            <td className="text-center">
              <div>
                <Link to={`/editar/${empleado.id}`} className='btn btn-warning btn-sm me-3 m-1'>Editar</Link>
                <button onClick={()=>eliminarEmpleado(empleado.id)} className='btn btn-danger btn-sm me-3'>Eliminar</button>
              </div>
            </td>
        </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}
