# Proyecto con React Router Dom

## Rutas disponibles:
| Ruta       | Componente |
| ---------- | ---------- |
| /          | Home       |
| home       | Home       |
| alumnos    | Alumnos    |
| formulario | Formulario |
| *          | Error404   |


## Componentes

1.  Home
esta seccion muestra la ruta principal de la app

![seccion home](./readme-img/home.png)

1. Alumnos
en esta seccion muestra un par de alumnos que se me ocurrieron

1. Formulario
esta seccion muestra un <mark> formulario de login... </mark>

1. Error 404
Esta seccion muestra un error 404 con la pagina a la que quisimos acceder y un contador regresivo para indicar cuando se volverá a la pagina principal

---
> mi parte favorita del codigo es esta
```jsx
    useEffect(() => {
        redirigir()
    }, [])

    useEffect(() => {
        setTimeout(() => { setContador(contador - 1) }, 1000)
    }, [contador])
```

## Integrantes:
- Lucio Petrucci
- Fabri


## Objetivos especificos:
- [x] Crear la estructura
- [x] Crear las rutas
- [ ] Hacer estilos para la pagina
- [ ] Terminar el formulario
