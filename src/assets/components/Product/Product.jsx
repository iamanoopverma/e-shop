import './Product.css';

function Product({item}) {
    return (
        <>
            <div className="product-card">
                <img src={item.image} alt={item.title} width="100"/>
                <div className="title">{item.title}</div>
                <div className="price">₹{item.price}</div>           
            </div>
        </>
    );
}

export default Product;