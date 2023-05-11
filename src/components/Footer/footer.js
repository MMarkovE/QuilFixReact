import '../Footer/footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {

    return (
        <div className="footer__container">

            <footer>
                <ul className="footer">
                    <Link to='/productos/Celulares' className='navbar__link'> Celulares</Link>
                    <Link to='/productos/SmartTV' className='navbar__link'>SmartTV</Link>
                    <Link to='/productos/Tablets' className="navbar__link">Tablets</Link>
                    <Link to='/productos/Electrodomésticos' className="navbar__link">Electrodomésticos</Link>
                    <Link to='/productos/Accesorios' className="navbar__link">Accesorios</Link>
                    <Link to='/Nosotros' className="navbar__link">Nosotros</Link>
                </ul>
                <p className='copyright'>© Creado por Mauro Markov | Coderhouse </p>
            </footer>
        </div >
    )
}

