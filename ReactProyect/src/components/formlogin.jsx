import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/getAPI"
import { useState } from "react";
import './login.css'

function formlogin() {
  const [email, setEmail] = useState('');//variable declarada que tiene el valor del input
  const [password, setPassword] = useState('');//variable declarada que tiene el valor del input
  const [errors, setErrors] = useState({});//variable declarada que tiene el valor del input

  const validate = () => {
    let inputErrors = {};
    if (!email) inputErrors.email = 'El correo electrónico es obligatorio';//valida si no hay nada escrito y envia un mensaje
    if (!password) inputErrors.password = 'La contraseña es obligatoria';//valida si no hay nada escrito y envia un mensaje
    return inputErrors;
  };
  let userAutenticated = false //variable declarada como false para usar en un useNavigate
  const navigate = useNavigate() //uso del useNavigate
  const handleSubmit = async (event) => { // evento tipo submit al boton del login
    event.preventDefault();
    const inputErrors = validate(); // llama a la funcion que valida los espacios vacios
    
    if (Object.keys(inputErrors).length === 0) { //valida que no haya errores en las anteriores validaciones para ejecutar lo siguiente

      const result = await login(email,password) //variable que espera al llamado de la api
      const user = result.find(user => user.correo === email && user.clave === password); // validacion para encontrar al usuario 

      if (user) { // validacion para alertas y links
        console.log('Formulario enviado', { email, password }); // mensaje en la consola 
        alert('Login Exitoso'); // alerta de inicio de sesion exitoso
        navigate('/dashboard'); // metodo que redirige a otra pagina una vez echo el login
        userAutenticated = true  // tranforma a la variable en true
        if (userAutenticated === true) { // validacion para redirigir
          navigate('/dashboard')
        }

      }
    
      
    } else {
        setErrors(inputErrors); // si hay un error lo muestra en pantalla o en consola

    }
  };


 







  return (
    <div>
            <h2>Inicio de Sesión</h2>
            <div className="login_css">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Correo electrónico</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Ingrese su Correo'
                    />
                    <br />
                    <br />
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Contraseña</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Ingrese su Contraseña'
                    />
                    <br />
                    <br />
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit">Iniciar Sesión</button>
                <br />
                <br />
                <button><Link to='/register'>Ir al registro</Link></button>
            </form>
            </div>
        </div>
  )
}

export default formlogin
