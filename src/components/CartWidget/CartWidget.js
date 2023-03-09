import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css'

export const CartWidget = () => {

    return (
        <div className='cart-container'>
            <AddShoppingCartIcon className='cart-container__carticon'/>
            <span> 0 </span>
        </div>
    )

}




