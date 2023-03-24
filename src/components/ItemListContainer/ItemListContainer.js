import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { pedirDatos } from '../../helpers/helpers'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (categoryId) {
                    setProductos(res.filter((prod) => prod.category === categoryId))
                } else {
                    setProductos(res)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
                // cambiar el loading por algo mas copado
            }
        </div>
    )
}

