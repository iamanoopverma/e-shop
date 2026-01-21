import { Outlet, Link } from "react-router-dom"; 

function MainLayout() {
    return (
        <>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/cart">Carts</Link>
            </nav>

            <Outlet />
            <footer> My E-Shop Store Copyright. Right Reserved 2025</footer>
        </>

    );
}

export default MainLayout;