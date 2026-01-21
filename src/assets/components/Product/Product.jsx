import { Link } from 'react-router-dom'
import {useCart} from '../../../context/CartContext'

function Product({ item }) {
   const {cart, addToCart} = useCart();

    return (
        <>
            <div>
                <button onClick={() => addToCart(item.id, item)}>+</button>
                <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} width="100" />
                </Link>
                <Link to={`/product/${item.id}`} >{item.title}</Link>
                <div>₹{item.price}</div>
            </div>
        </>
    );
}

export default Product;