
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Mision from "./components/Mision/Mision";
import Navegacion from "./components/Navegacion/Navegacion";
import Registro from "./components/Registro/Registro";
import Vision from "./components/Vision/Vision";

function App() {
  return (
    <BrowserRouter>
    <Navegacion />
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact path="/mision" element={<Mision />} />
        <Route exact path="/vision" element={<Vision />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
