import { Outlet, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '../assets/photos/logo.webp'

function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuVisibility = isMenuOpen ? "translate-x-0" : "-translate-x-full";
    const navMobile = "flex flex-col items-start fixed top-0 left-0 h-screen w-3/4 gap-2 px-8 py-16 bg-amber-200 transform transition-transform z-10 lg:hidden";
    const navDesktop = "hidden lg:flex lg:items-center lg:gap-20 [&>a]:hover:text-blue-900"
    function handleToggle() { setIsMenuOpen(prev => !prev); }
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    return (
        <>
            <header className="bg-gray-200">
                <div className="container flex items-center justify-between relative py-2 lg:py-3">
                    <button
                        type="button"
                        className={`lg:hidden z-11`}
                        onClick={handleToggle}
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        {
                            isMenuOpen ?
                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 52 52" xml:space="preserve"><path d="m31 25.4 13-13.1c.6-.6.6-1.5 0-2.1l-2-2.1c-.6-.6-1.5-.6-2.1 0L26.8 21.2c-.4.4-1 .4-1.4 0L12.3 8c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l13.1 13.1c.4.4.4 1 0 1.4L8 39.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L25.3 31c.4-.4 1-.4 1.4 0l13.1 13.1c.6.6 1.5.6 2.1 0L44 42c.6-.6.6-1.5 0-2.1L31 26.8c-.4-.4-.4-1 0-1.4" /></svg> :
                                <svg aria-hidden="true" focusable="false" height="30" width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="" /><g stroke-linecap="round" stroke-linejoin="round" /><path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0-8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0 16a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" fill="#0f0f0f" /></svg>
                        }
                    </button>
                    <Link className="whitespace-nowrap text-3xl" to='/'>
                        <img src={logo} alt="Company Logo" width="64" />
                    </Link>
                    <nav className={navDesktop}>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/cart">Carts</Link>
                    </nav>
                </div>
                <nav className={`${navMobile} ${menuVisibility}`} id="mobile-menu" aria-hidden={!isMenuOpen}>
                    <Link to="/">Home</Link>
                    <Link to="/">About</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/cart">Carts</Link>
                </nav>


            </header>

            <Outlet />

            <footer> My E-Shop Store Copyright. Right Reserved 2025</footer>
        </>

    );
}
export default MainLayout;