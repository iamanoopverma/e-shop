import { Outlet, Link } from "react-router-dom";
import './MainLayout.css';

function MainLayout() {
    return (
        <>

            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/cart">Carts</Link>
            </nav>

            <Outlet />
            <footer> My E-Shop Store Copyright. Right Reserved 2025</footer>
        </>

    );
}

export default MainLayout;