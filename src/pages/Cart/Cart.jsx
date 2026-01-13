import {useCart} from '../../context/CartContext'

function Cart(){
  const {cart, addToCart, decreaseProductQty} = useCart();

    return(
        <>
          <h2>Cart</h2>

          {cart.length === 0 ? <p>Cart is Empty.</p> :
          cart.map(item => (
            <div key={item.id} className='cart-item'>
                <img src={item.image} alt={item.title} width="120"/>
                <p>{item.title}</p>
                <p>{item.price}</p>
                <div className="qty-box">
                  <button onClick={() => decreaseProductQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={()=> addToCart(item.id)}>+</button>
                </div>
            </div>
          ))}
        </>
    );
}

export default Cart;