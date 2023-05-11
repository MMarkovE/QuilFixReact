import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.css'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }

    return (
        <div className="login-container">
            <div className="login">
                <h2 className='title__login'>Iniciar sesión</h2>
                <hr/>

                <form onSubmit={handleSubmit} className="login-mini-container">
                    <input 
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Email'
                    />

                    <input 
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        type={'password'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />

                    <button className='button btn btn-dark' type='submit'>Ingresar</button>

                    <button className='button btn btn-dark' onClick={googleLogin}>Ingresar con Google</button>

                    <button className='button btn btn-dark' type='submit'><Link to={"/register"} className='register__link'>Soy nuevo, registrarme</Link></button>

                </form>
            </div>
        </div>
    )
}

export default LoginScreen