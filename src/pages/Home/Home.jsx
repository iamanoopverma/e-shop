import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products.api';
import Product from '../../assets/components/Product/Product';
import './Home.css'



function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const data = await getProducts();
                setProducts(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        load();
    }, [])

    return (
        <>
            <h2>Home</h2>
            {/* Data-dependent UI */}
            <section className="products-sec">
                {loading && <h3>Loading Products....</h3>}
                {error && <h3>{error}</h3>}
                {!loading && !error &&
                    products.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
            </section>


        </>
    );
}

export default Home;