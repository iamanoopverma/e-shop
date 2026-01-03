import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../layout/MainLayout';

import Home from '../pages/Home/Home';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Cart from '../pages/Cart/Cart';

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />} >
                        <Route path='/' element={<Home />} />
                        <Route path='/product/:id' element={<ProductDetails />} />
                        <Route path='/cart' element={<Cart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;