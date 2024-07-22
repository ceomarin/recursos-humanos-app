import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export function EditarEmpleado() {
    const urlBase = "http://localhost:8080/api/empleados";
    
    let navegacion = useNavigate();

    const {id} = useParams();

    const [empleado,setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    })

    const {nombre,departamento,sueldo} = empleado

    useEffect(()=>{
        cargarEmpleado();
    },[])

    const cargarEmpleado = async ()=>{
        const resultado = await axios.get(`${urlBase}/${id}`);
        setEmpleado(resultado.data);
    }

    const onInputChange = (e) => {
        setEmpleado({...empleado,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        //const urlBase = "http://localhost:8080/api/empleados";
        await axios.put(`${urlBase}/${id}`,empleado);
        //Redireccion al path inicio
        navegacion("/");
    }

    return (
        <div className="container text-bg-secondary w-50 p-5">
            <div className="container text-center"><h3>Editar Empleado</h3></div>
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
                    <button type="submit" className="btn btn-primary btn-sm me-2">Guardar</button>
                    <a href="/" className="btn btn-danger btn-sm">Regresar</a>

                </div>
            </form>
        </div>
    )
}
