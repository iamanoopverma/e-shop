import { useCart } from '../../context/CartContext'

function Cart() {
  const { cart, addToCart, decreaseProductQty } = useCart();
  function total() {
    return cart.reduce((acc, item) => (acc + (item.price * item.qty)), 0)
  }

  return (
    <>
      <h2>Cart</h2>

      {cart.length > 0 ?
        <div>{cart.map(item => (
          <div key={item.id} className='cart-item'>
            <img src={item.image} alt={item.title} width="120" />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <div className="qty-box">
              <button onClick={() => decreaseProductQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item.id)}>+</button>
            </div>
          </div>
        ))}
        <h2>Total:{total()} </h2>
        </div>
        :
        <div>
          <p>Cart is Empty.</p>
        </div>
      }

    </>
  );
}

export default Cart;