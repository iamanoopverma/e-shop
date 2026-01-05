import { Link } from 'react-router-dom'
import './Product.css';

function Product({ item }) {
    return (
        <>
            <div className="product-card">
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