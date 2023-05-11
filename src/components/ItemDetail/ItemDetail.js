import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }


    return (
        <div>
            <h2 className="item__name">{item.name}</h2>
            <hr />
            <img src={item.img} alt={item.name} className="item__img"/>
            <p className="item__description">{item.description}</p>
            {item.stock <= 5 && <p><strong>Quedan sólo {item.stock} unidades!</strong></p>}
            <p className="item__price">Precio: ${item.price}</p>


            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-danger">Terminar mi compra</Link>
                    : <ItemCount
                        stock={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        agregar={handleAgregar}
                    />
            }

        </div>
    )
}

export default ItemDetail