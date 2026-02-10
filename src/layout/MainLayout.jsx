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
                    <Link to='/' tabIndex={isMenuOpen ? -1 : undefined}>
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

            <footer>
                <div>
                    <div>
                        <div>
                            <div>Subscribe to Our Newsletter</div>
                            <p>Get latest deals, new arrivals, and exclusive offers directly in your inbox.</p>
                        </div>
                        <form action="">
                            <input type="text" name="" id="" />
                            <button type="submit">submit</button>
                        </form>
                    </div>
                    <div>
                        <div>
                            <Link to='/'>
                                <img src={logo} alt="Company Logo" width="64" />
                            </Link>
                            <p>
                                E-Shop is your one-stop online store for quality products at the best prices. We bring convenience, trust, and fast delivery right to your doorstep.
                            </p>
                            <ul>
                                <li>
                                    <Link to="/">
                                        <svg class="w-12 h-12 fill-[#8e8e8e] hover:fill-amber-600 transition-colors" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>

                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <svg class="w-12 h-12 fill-[#8e8e8e] hover:fill-amber-600 transition-colors" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>

                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <svg class="w-12 h-12 fill-[#8e8e8e] hover:fill-amber-600 transition-colors" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <svg class="w-12 h-12 fill-[#8e8e8e] hover:fill-amber-600 transition-colors" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"></path>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div>Quick Links</div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/">Offers</Link></li>
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                Customer Service
                            </div>
                            <ul>
                                <li><Link to="/">FAQ</Link></li>
                                <li><Link to="/">Shipping & Delivery</Link></li>
                                <li><Link to="/">Return Policy</Link></li>
                                <li><Link to="/">Cancellation Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>Legal Information</div>
                            <ul>
                                <li><Link to="/">Privacy Policy</Link></li>
                                <li><Link to="/">Terms & Conditions</Link></li>
                                <li><Link to="/">Refund Policy</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>Contact Information</div>
                            <ul>
                                <li>Email: <Link to="/">support@e-shop.com</Link></li>
                                <li>Phone: <Link to="/">+91 98765 43210</Link></li>
                                <li>Address: <Link to="/">New Delhi, India</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div>
                    © 2026 E-shop. All rights reserved.
                </div>
            </footer>
        </>

    );
}
export default MainLayout;