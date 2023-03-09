import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import './CartWidget.css'

export const CartWidget = () => {

    return (
        <div className='cart-container'>
            <ShoppingCartRoundedIcon />
            <span> 0 </span>
        </div>
    )

}




