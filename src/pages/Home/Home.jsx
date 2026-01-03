import { useEffect, useState } from 'react';
import { getProducts } from '../../api/products.api';



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
               
            

        </>
    );
}

export default Home;