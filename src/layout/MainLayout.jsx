import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from '../assets/photos/logo.webp'

function MainLayout() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const menuButtonRef = useRef(null);

    const menuVisibility = isMenuOpen ? "translate-x-0" : "-translate-x-full";
    const navMobile = "flex flex-col items-start fixed top-0 left-0 h-screen w-3/4 gap-2 p-12 bg-amber-200 transform transition-transform z-10 lg:hidden";
    const navDesktop = "hidden lg:flex lg:items-center lg:gap-20 [&>a]:hover:text-blue-900"
    function handleToggle() { setIsMenuOpen(prev => !prev); }
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const focusableSelector =
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])';

        const menuEl = menuRef.current;
        if (!menuEl) return;

        const menuFocusables = Array.from(
            menuEl.querySelectorAll(focusableSelector)
        );
        const firstEl = menuFocusables[0];
        const lastEl = menuFocusables[menuFocusables.length - 1];
        function handleKeyDown(e) {
            if (e.key !== "Tab") return;
            if (e.shiftKey && document.activeElement === firstEl) {
                e.preventDefault();
                lastEl.focus();
            }
            if (!e.shiftKey && document.activeElement === lastEl) {
                e.preventDefault();
                firstEl.focus();
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);



    useEffect(() => {
        if (!isMenuOpen) {
            menuButtonRef.current?.focus();
        }
    }, [isMenuOpen]);

    return (
        <>
            <header className="bg-gray-200">
                <div className="container flex items-center justify-between relative py-2 lg:py-3">
                    <button
                        type="button"
                        ref={menuButtonRef}
                        className={`lg:hidden`}
                        onClick={handleToggle}
                        aria-label="Open Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                        aria-hidden={isMenuOpen}
                    >
                        <svg aria-hidden="true" focusable="false" height="30" width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke-width="" /><g stroke-linecap="round" stroke-linejoin="round" /><path d="M1 12a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0-8a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m0 16a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1" fill="#0f0f0f" /></svg>
                    </button>
                    <Link to='/'>
                        <img src={logo} alt="Company Logo" width="64" />
                    </Link>
                    <nav className={navDesktop}>
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/cart">Carts</Link>
                    </nav>
                </div>
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-10"
                        onClick={handleToggle}
                        aria-hidden="true"
                    />
                )}

                <nav ref={menuRef}
                    className={`${navMobile} ${menuVisibility} z-20`}
                    id="mobile-menu"
                    aria-hidden={!isMenuOpen}
                    inert={isMenuOpen ? undefined : " "}>
                    {isMenuOpen &&
                        <button
                            className="fixed top-6 right-8"
                            type="button"
                            aria-label="Close Menu"
                            onClick={handleToggle}
                        >
                            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 52 52" xml:space="preserve"><path d="m31 25.4 13-13.1c.6-.6.6-1.5 0-2.1l-2-2.1c-.6-.6-1.5-.6-2.1 0L26.8 21.2c-.4.4-1 .4-1.4 0L12.3 8c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l13.1 13.1c.4.4.4 1 0 1.4L8 39.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L25.3 31c.4-.4 1-.4 1.4 0l13.1 13.1c.6.6 1.5.6 2.1 0L44 42c.6-.6.6-1.5 0-2.1L31 26.8c-.4-.4-.4-1 0-1.4" /></svg>
                        </button>}
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