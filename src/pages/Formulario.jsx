import { useNavigate } from "react-router-dom"


export default function Formulario() {

    const navegar = useNavigate()

    const manejarForm = (e) => {
        e.preventDefault()

        // tomar los datos del form ....

        navegar("/alumnos")
    }

    return (
        <>
            <form onClick={manejarForm}>
                <input type="text" name="user" placeholder="user" />
                <input type="password" name="pass" placeholder="password" />
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}