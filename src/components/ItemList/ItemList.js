import { Item } from "../Item/Item"

export const ItemList = ({ items }) => {

    return (
        <div className="list-container">
            <h2 className="list-container__title">Productos</h2>
            <hr />

            <div>
                {items.map((producto) => <Item key={producto.id} item={producto} ></Item>)}
            </div>
        </div>
    )
}