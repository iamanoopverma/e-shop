import {useParams, Link} from 'react-router-dom';


function ProductDetails(){
   const {id} = useParams();

    return(
        <>
           <div className="product-details">
             <h4>Product Details</h4>
             <h4>Product ID: {id}</h4>

             <Link to='/cart'>Add to Cart</Link>
           </div>
        </>
    );
}

export default ProductDetails;