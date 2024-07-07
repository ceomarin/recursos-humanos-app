import axios from "axios";
import { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";


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
  return (
    <div className="container text-center">
      <h1>ListadoEmpleados</h1>
      <table className="table table-striped table-hover align-middle">
  <thead className="table-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Empleado</th>
      <th scope="col">Departamento</th>
      <th scope="col">Sueldo</th>
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
        </tr>
      ))
    }
  </tbody>
</table>
    </div>
  )
}
