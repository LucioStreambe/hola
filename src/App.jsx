import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import NavBar from "./components/NavBar"
import Alumnos from "./pages/Alumnos"
import Formulario from "./pages/Formulario"
import Error404 from "./pages/Error404"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alumnos" element={<Alumnos />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
