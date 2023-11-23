import {useState} from "react";
import logotipo from "./assets/logotipo.png";
import "./estilos/acceso.css";
import { useNavigate } from "react-router-dom";

const Acceso = () => {
    const nav= useNavigate();
    const [correo , setCorreo ] = useState("");
    const [password, setPassword ] = useState("");

    const onIngresar= async ()=> {{
        const url = "http://localhost:3000/Iniciarsesion";
        const resp = await fetch(url, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                CorreoElectronico: correo,
                Contraseña: password
            })
        });

        if (resp.ok){
            nav("/categorias");
        }
        else{
            const error = await resp.text();
            alert(error);
        }
    }}








    return (
        <div className ="contenedor">

            <div className="titulo">Enseña.Me LSM</div>

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
            <div className="agrupador-password">
                <div>Contraseña</div>
                <div>
                <input
                type="password"
                placeholder="Password"
                className="caja-password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
            </div>
        </div>

        <div className="agrupador-boton">
            <button className="boton-ingresar"onClick={()=> onIngresar() }>Ingresar</button>
        </div>

        <div className="otros botones">
            <a href="/registro" className="link-registro">Registro</a>
            <a href="/recuperar-password" className="link-password">Olvide mi contraseña</a>
    </div>

    </div>
   )
}

export default Acceso
