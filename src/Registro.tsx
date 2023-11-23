import { useNavigate } from "react-router-dom";
import {useState} from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";

const Registrar = () => {
    const [CorreoElectronico , setCorreo ] = useState("");
    const [password, setPassword ] = useState("");
    const [ nombre , setName ] = useState ("");
const navigate=useNavigate();

    const onRegistrar= async ()=> {{
        if (nombre=="error"){
            alert("");
            return;
        }
        if (CorreoElectronico==" correo no valido "){
            alert("");
            return;
        }
        if (password=="introduzca otra contaseña"){
            alert("");
            return;
        }
        const url ="http://localhost:3000/Registrar";
        const response =await fetch (url,{
            method: "POST",
            body :JSON.stringify({
             Nombre: nombre,
             CorreoElectronico: CorreoElectronico,
             Contraseña: password
            }),
            headers:{
                "Content-Type":"application/json "
            }
        });
        if(!response.ok){
            const mensaje =await response.json();
            alert (mensaje);
        }
        else{
            alert ("usuaro registrado correctamente ");
            navigate("/");

        }
    }}

    return (
        <div className ="contenedor">

            <div className="titulo">Registrar</div>

            <div>
                <img src ={logotipo} className ="logo"/>
            </div>

            <div className="Agrupador-correo">
                <div>Correo Electronico</div>
            <div>
                <input 
                type="text"
                placeholder="Ingresa tu correo electronico "
                className="caja-correo"
                value={CorreoElectronico}
                onChange = {(e)=> setCorreo(e.target.value)} />
            </div>
            </div>
            <div className="agrupador-password">
                <div>Contraseña</div>
                <div>
                <input
                type="password"
                placeholder="Ingresa tu constraseña "
                className="caja-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
        </div>

        <div className="agrupador- name">
                <div>Nombre</div>
            <div>
                <input 
                type="name"
                placeholder="Ingresa tu nombre "
                className="caja-name"
                value={nombre}
                onChange = {(e)=> setName(e.target.value)} />
            </div>

        <div className="agrupador-boton">
            <button className="boton-registrar"onClick={()=> onRegistrar() }>Registrar</button>
        </div>


    </div>

    </div>
   )
}

export default Registrar
