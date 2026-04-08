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
            <section className='py-28 bg-cover bg-top bg-[url("/images/Hero-Image.webp")]'>
                <div className="container">
                    <div className="flex flex-col items-start gap-2">
                        <h1 className='mb-2 text-white'>Upgrade Your Style & Tech</h1>
                        <p className='text-white'>Discover trending fashion and premium gadgets at unbeatable prices.</p>
                        <button className='border border-white px-4 py-2 rounded-lg text-white'>Shop Now</button>
                    </div>
                </div>
            </section>
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