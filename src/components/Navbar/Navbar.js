import './Navbar.css'
import logo from './logo.png'
import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link to='/'> <img src={logo} className="header__logo" alt='logo'></img></Link>

                <nav className="navbar">
                    <Button variant='contained'><Link to='/'>Inicio</Link></Button>
                    <Button variant='contained'><Link to='/productos/celular'>Celulares</Link></Button>
                    <Button variant='contained'><Link to='/productos/accesorio'>Accesorios</Link></Button>
                    <Button variant='contained'><Link to='/nosotros'>Nosotros</Link></Button>
                </nav>
                <CartWidget />
            </div>
        </header>

    )
}

