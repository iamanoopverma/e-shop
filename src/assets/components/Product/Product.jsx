import { Link } from 'react-router-dom'
import {useCart} from '../../../context/CartContext'
import './Product.css';

function Product({ item }) {
   const {cart, addToCart} = useCart();

    return (
        <>
            <div className="product-card">
                <button onClick={() => addToCart(item.id, item)}>+</button>
                <Link to={`/product/${item.id}`}>
                    <img src={item.image} alt={item.title} width="100" />
                </Link>
                <Link to={`/product/${item.id}`} className="title">{item.title}</Link>
                <div className="price">₹{item.price}</div>
            </div>
        </>
    );
}

export default Product;