
export const ItemDetail = ({ item }) => {

    return (
        <div >
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <h5>Stock disponible :{item.stock}</h5>

        </div>
    )
}
