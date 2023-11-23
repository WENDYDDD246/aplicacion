import {useState} from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";
import Registrar from "./Registro";

const Recuperar = () => {
    const [correo , setCorreo ] = useState("");


    const onAceptar= ()=> {{
        const url ="http://localhost:3000/Contraseña/recuperar";
        const response =fetch (url,{
            method: "POST",
            body :JSON.stringify({
             CorreoElectronico: correo
            }),
            headers:{
                "Content-Type":"application/json "
            }
        });
    
    
    }}
    
    return (
        <div className ="contenedor">

            <div className="titulo">Recuperar contraseña</div>

            <div>
                <img src ={logotipo} className ="logo"/>
            </div>

            <div className="Agrupador-correo">
                <div>Correo Electronico</div>
            <div>
                <input 
                type="text"
                placeholder="ingresa tu correo electronico "
                className="caja-correo"
                value={correo}
                onChange = {(e)=> setCorreo(e.target.value)} />
            </div>
            </div>
            

        <div className="agrupador-boton">
            <button className="boton-aceptar"onClick={()=> onAceptar() }>Aceptar</button>
        </div>

  

    </div>
   )
}

export default Recuperar
