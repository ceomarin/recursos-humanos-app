import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export function AgregarEmpleado() {

    let navegacion = useNavigate();

    const [empleado,setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const {nombre,departamento,sueldo} = empleado

    const onInputChange = (e) => {
        setEmpleado({...empleado,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/api/empleados";
        await axios.post(urlBase,empleado);
        //Redireccion al path inicio
        navegacion("/");
    }

    return (
        <div className="container text-bg-secondary w-50 p-5">
            <div className="container text-center"><h3>Agregar Empleado</h3></div>
            <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" name="nombre" required={true} className="form-control" id="nombre"
                    value={nombre} onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">Departamento</label>
                    <input type="text" name="departamento" className="form-control" id="departamento"
                    value={departamento} onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="sueldo" className="form-label">Sueldo</label>
                    <input type="number" name="sueldo" min={500000} step={50000} className="form-control" id="sueldo"
                    value={sueldo} onChange={(e)=> onInputChange(e)}/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-warning btn-sm me-2">Agregar</button>
                    <a href="/" className="btn btn-danger btn-sm">Regresar</a>

                </div>
            </form>
        </div>
    )
}
