import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export const Item = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>Precio: ${item.price}</h3>
            <p>En Stock: {item.stock}</p>
            <img src={item.img} alt='' />
            <Button variant="outlined"> <Link to={`/detail/${item.id}`}>Ver más</Link> </Button>
        </div>
    )
}