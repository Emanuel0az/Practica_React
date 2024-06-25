import { useNavigate } from "react-router-dom"

function users() {
  const navigate = useNavigate()
  let removido = false


  function remove() {
    localStorage.removeItem('UserId')
    removido = true
    if (removido === true) {
      navigate('/home')
    }
  }












  return (
    <div>
        <h1>Hola Mundo</h1>

        <button onClick={remove}>Cerrar Sesion</button>
    </div>
  )
}

export default users