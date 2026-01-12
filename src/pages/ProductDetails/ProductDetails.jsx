import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductId } from '../../api/products.api';
import { useState, useEffect } from 'react';
import {useCart} from '../../context/CartContext'
 
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ product, setProduct ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(null);
  const {addToCart} = useCart();
  function handleAddToCart() {
    addToCart(product);
    navigate('/cart');
  }

  useEffect(() => {
    async function load() {
      try {
        const data = await getProductId(id);
        setProduct(data);
      }
      catch (err) {
        setError(err.message);
      }
      finally {
        setLoading(false);
      }
    }
    load();
  }, [id])
 

  return (
    <>
      <div className="product-details">
        <h2>Product Details</h2>

        {loading && <h3>Loading....</h3>}
        {error && <h3>{error}</h3>}
        {!error && !loading &&
          <table>
            <tbody>
              <tr>
                <th>Image</th>
                <td><img src={product.image} alt={product.title} width="120" /></td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{product.title}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{product.price}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{product.category}</td>
              </tr>
              <tr>
                <th>Description</th>
                <td>{product.description}</td>
              </tr>
              <tr>
                <th>Rating</th>
                <td>{`${product.rating.rate} (${product.rating.count})`}</td>
              </tr>

            </tbody>

          </table>}

        <button
          disable={loading && !error}
          onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductDetails;