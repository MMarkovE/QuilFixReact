import { Link } from "react-router-dom"
import './item.css'

export const Item = ({ item }) => {
    return (
        <div className="item__container">
            <img src={item.img} alt='' className="item__img" />
            <h2 className="item__name">{item.name}</h2>
            <h3 className="item__price">Precio: ${item.price}</h3>
            <p className="item__stock">En Stock: {item.stock}</p>
            <button type="button" className="btn btn"> <Link to={`/detail/${item.id}`} className="button__item">Ver más</Link></button>
            <hr/>
        </div>
    )
}

export default Item