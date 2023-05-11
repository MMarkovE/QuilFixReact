import './Navbar.css'
import logo from '../../assets/imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { user, logout } = useContext(LoginContext)

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'><img src={logo} className="header__logo" alt='logo' /></Link>

                <nav className="navbar">
                    <Link to='/productos/Celulares' className='navbar__link'> Celulares</Link>
                    <Link to='/productos/SmartTV' className='navbar__link'>SmartTV</Link>
                    <Link to='/productos/Tablets' className="navbar__link">Tablets</Link>
                    <Link to='/productos/Electrodomésticos' className="navbar__link">Electrodomésticos</Link>
                    <Link to='/productos/Accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/Nosotros' className="navbar__link">Nosotros</Link>
                </nav>

                <CartWidget />

                <div>

                    <div className='user'>
                        <h6 className='user__welcome'>Bienvenido <b>{user.email}</b> ! </h6>                         <button className='btn btn-dark' onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                        </svg> Salir</button>
                    </div>
                </div>
            </div>
        </header >
    )
}