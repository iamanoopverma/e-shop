import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/products.api';
import Product from '../../assets/components/Product/Product';
import heroImage from '../../assets/photos/Hero-Image.webp';
import { getProductCategories } from '../../api/products.api';


function Home() {
    const [products, setProducts] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [productsError, setProductsError] = useState(null);
    const [categories, setCategories] = useState([]);
    const [categoriesLoading, setCategoriesLoading] = useState(true);
    const [catetgoriesError, setCategoriesError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                const data = await getProducts();
                setProducts(data);
            }
            catch (err) {
                setProductsError(err.message);
            }
            finally {
                setProductsLoading(false);
            }
        }
        load();
    }, []);
    useEffect(() => {
        async function load() {
            try {
                const data = await getProductCategories();
                setCategories(data);
            }
            catch (err) {
                setCategoriesError(err.message);
            }
            finally {
                setCategoriesLoading(false);
            }
        }
        load();

    }, []);
    console.log(categories)
    return (
        <>
            {/* Hero Section */}
            <section className='py-28 bg-cover bg-right lg:bg-top relative' style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-orange-500/60 to-orange-400/60"></div>
                <div className="container relative">
                    <div className="flex flex-col items-start gap-4">
                        <h1 className='mb-2 text-white'>Upgrade Your Style & Tech</h1>
                        <p className='text-white'>Discover trending fashion and premium gadgets at unbeatable prices.</p>
                        <button className='border border-white px-4 py-2 rounded-lg text-white hover:bg-primary transition-all cursor-pointer'>Shop Now</button>
                    </div>
                </div>
            </section>
            {/* Category Sectoin */}
            <section className='bg-gray-200 py-16'>
                <div className="container grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {categoriesLoading && <h3>Loading.....</h3>}
                    {catetgoriesError && <h3>{catetgoriesError}</h3>}
                    {!categoriesLoading && !catetgoriesError &&
                        categories.map((category, index) => (
                            <Link to="/" key={index}>
                                <div className='flex flex-col gap-2 items-center border border-gray-400 p-3 shadow-md rounded-lg bg-white md:gap-3 md:p-4 lg:gap-4 lg:p-7'>
                                    <img className='w-22 h-22 object-cover rounded-full md:h-26 md:w-26 lg:h-32 lg:w-32' src={category.Image} />
                                    <div className='text-md font-medium lg:text-xl'>{category.Name}</div>
                                </div>
                            </Link>
                        ))}
                </div>
            </section>

            <section className="container my-20">
                <section className='grid grid-cols-3 gap-x-1 gap-y-4 md:grid-cols-5 lg:gap-8'>
                    {productsLoading && <h3>Loading Products....</h3>}
                    {productsError && <h3>{productsError}</h3>}
                    {!productsLoading && !productsError &&
                        products.map(item => (
                            <Product key={item.id} item={item} />
                        ))}
                </section>
            </section>

        </>
    );
}

export default Home;