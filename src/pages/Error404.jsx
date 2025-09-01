import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Error404() {
    const navegar = useNavigate()
    const [contador, setContador] = useState(5)
    const ubicacion = useLocation()

    const redirigir = (e) => {
        setTimeout(() => { navegar("/home") }, 5000)
    }

    useEffect(() => {
        redirigir()
    }, [])

    useEffect(() => {
        setTimeout(() => { setContador(contador - 1) }, 1000)
    }, [contador])



    return (
        <div>
            <h1>ERROR 404, PAGINA {ubicacion.pathname} NO ENCONTRADA</h1>
            <p>Redirigiendo en: {contador} segundos...</p>
        </div>
    )
}