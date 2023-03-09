import './Navbar.css'
import logo from './logo.png'
import Button from '@mui/material/Button';
import { CartWidget } from '../CartWidget/CartWidget'



export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'></img>

                <nav className="navbar">
                    <Button variant='contained'>Enlace 1</Button>
                    <Button variant='contained'>Enlace 2</Button>
                    <Button variant='contained'>Enlace 3</Button>


                </nav>

                <CartWidget />

            </div>

        </header>

    )
}

