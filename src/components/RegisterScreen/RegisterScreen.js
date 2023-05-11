import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './RegisterScreen.css'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

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
        register(values)
    }

    return (
        <div className="login-container">
            <div className='title__login'>
                <h2>Registrarme</h2>
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

                    <button className='button btn btn-dark' type='submit'>Registrarme</button>

                    <button className='button btn btn-dark' type='submit'><Link to={"/login"} className='register__link'>Ya estoy registrado</Link></button>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen