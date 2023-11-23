import { BrowserRouter , Route, Routes} from "react-router-dom"
import Acceso from "./Acceso"
import Registrar from "./Registro"
import Recuperar from "./Recuperar"
import Categorias from "./Categorias";
import"bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Senias from "./Senias";
import ResultadoBuscar from   "./ResultadoBuscar";
import Registrarse from "./Registro";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Acceso/>}/>
       <Route path ="/Registro" element={<Registrar/>}/>
       <Route path ="/Recuperar-password" element={<Recuperar />}/>
       <Route path ="/Categorias"element={<Categorias/>} />
       <Route path="/lenguaje/:idCategoria" element={<Senias/>} />
       <Route path ="/buscar" element={<ResultadoBuscar/>} />
     </Routes>
    </BrowserRouter>
  )
}
export default App