import './Navbar.css'
import logo from './logo.png'
import { Button } from '@mui/material'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} className="header__logo" alt='logo'></img>

                <nav className="navbar">
                    <p className="navbar__link">Enlace 1</p>
                    <p className="navbar__link">Enlace 2</p>
                    <p className="navbar__link">Enlace 3</p>
                </nav>
            </div>

            <Button variant="contained">Clickeame gato</Button>
        </header>

    )
}

