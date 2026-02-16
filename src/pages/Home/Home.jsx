import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products.api';
import Product from '../../assets/components/Product/Product';

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

            <div className="container my-12">
                <h2 className='mb-6'>Home</h2> 
                <section className='grid grid-cols-3 gap-x-1 gap-y-4 md:grid-cols-5 lg:gap-8'>
                    {loading && <h3>Loading Products....</h3>}
                    {error && <h3>{error}</h3>}
                    {!loading && !error &&
                        products.map(item => (
                            <Product key={item.id} item={item} />
                        ))}
                </section>
            </div>

        </>
    );
}

export default Home;