import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./reciclado/Home";
import NavBar from "./components/NavBar";
import Personas from "./reciclado/Personas";
import Formulario from "./reciclado/Formulario";
import Error from "./reciclado/Error";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personas" element={<Personas />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
