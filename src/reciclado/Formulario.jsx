import { useNavigate } from "react-router-dom";

export default function Formulario() {
  const navegar = useNavigate();

  const manejarForm = (e) => {
    e.preventDefault();

    navegar("/personas");
  };

  return (
    <>
      <form onClick={manejarForm}>
        <input type="text" name="user" placeholder="Usuario" />
        <input type="password" name="pass" placeholder="Contraseña" />
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
}
