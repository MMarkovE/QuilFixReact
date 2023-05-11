import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"
import './Cart.css'

const Cart = () => {
    const { cart, vaciarCarrito, removerItem, totalCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2 className="title"> Esta muy vacío aquí...</h2>

                <div class="crickets">
                    <img src="https://media.giphy.com/media/l2R013mIf1ZXdvoyI/giphy.gif" alt="Crickets gif"></img>
                </div>

                <hr />
                <Link className="btn btn-dark" to="/">Seguir comprando</Link>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <h2 className="title">Mi carrito</h2>
            <hr />

            {
                cart.map((item) => (
                    <div key={item.id}>
                        <h4 className="item__name">{item.name}</h4>
                        <img src={item.img} className="item__img"/>
                        
                        <div>
                            <small className="item__quantity">Cantidad: {item.cantidad} unidades </small>
                            </div>  

                            <div>
                            <small className="item__unityprice">Precio: ${item.price}</small>
                        </div>
                        
                        <p className="item__totalprice">Precio total: ${item.price * item.cantidad}</p>
                        <button onClick={() => removerItem(item.id)} className="btn btn-danger"><BsFillTrashFill /></button>
                        <hr />
                    </div>
                ))
            }

            <h3 className="item__finalprice">TOTAL: ${totalCarrito()}
            <button onClick={vaciarCarrito} className="btn btn-danger m-2">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-dark m-2">Terminar mi compra</Link></h3>
        </div>
    )
}

export default Cart