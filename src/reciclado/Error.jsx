import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Error() {
  const navegar = useNavigate();
  const [contadorr, setContador] = useState(5);
  const ubicacion = useLocation();

  const redirigir = (e) => {
    setTimeout(() => {
      navegar("/home");
    }, 5000);
  };

  useEfeect(() => {
    redirigir();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setContador(contador - 1);
    }, 1000);
  }, [contador]);

  return (
    <div>
      <h1>ERROR, PAGINA {ubicacion.pathname} NO ENCONTRADA</h1>
      <p>Volviendo en: {contador} segundos...</p>
    </div>
  );
}
