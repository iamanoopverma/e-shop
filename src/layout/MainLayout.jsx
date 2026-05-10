import { Outlet, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/photos/logo.webp";
import { LuWandSparkles, LuSofa } from "react-icons/lu";
import { TbSpray } from "react-icons/tb";
import { CiDeliveryTruck, CiHeart, CiUser, CiShoppingCart, CiShoppingBasket, CiSearch } from "react-icons/ci";
import { GiBackwardTime } from "react-icons/gi";
import { SlWallet } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { PiBasket } from "react-icons/pi";
import { SlArrowDown } from "react-icons/sl";

function MainLayout() {
  const [activeCat, setActiveCat] = useState("All Categories");
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedCat, setSelectedCat] = useState("All Categories");
  const footerListTitle = "w-fit pb-1 text-xl font-medium mb-6 border-b-2 border-secondary";
  const socialLinks = "flex items-center justify-center p-2 bg-gray-400 rounded-full hover:bg-primary"
  function handleToggle() {
    setIsMenuOpen((prev) => !prev);
  }
  const categories = [
    {
      name: "All Categories",
      icon: HiOutlineShoppingBag
    },
    {
      name: "Beauty",
      icon: LuWandSparkles
    },
    {
      name: "Fragrances",
      icon: TbSpray
    },
    {
      name: "Furnitures",
      icon: LuSofa
    },
    {
      name: "Groceries",
      icon: PiBasket
    },

  ]

  return (
    <>
      <header>
        <div className="bg-primary text-white py-2">
          <div className="container flex justify-center items-center 
          md:justify-between 
          lg:gap-8 lg:justify-normal">
            <div className="flex gap-2 items-center">
              <TbTruckDelivery size={20} strokeWidth={1.3} />
              <span className="text-sm leading-0">Free Delivery On Orders Above ₹499</span>
            </div>
            <div className="hidden md:flex gap-2 items-center">
              <GiBackwardTime size={20} strokeWidth={1} />
              <span className="text-sm leading-0">7 Days Easy Returns</span>
            </div>
            <div className="hidden md:flex gap-2 items-center">
              <SlWallet size={18} strokeWidth={1} />
              <span className="text-sm leading-0">100% Secure Payments</span>
            </div>
            <div className="hidden ms-auto lg:flex items-center gap-4
            [&>a]:text-white [&>a]:text-sm [&>a]:hover:text-gray-400">
              <Link to='/'>Track Order</Link>
              <Link to='/'>Help & Support</Link>
              <Link to='/'>Sell On E-Shop</Link>
            </div>
          </div>
        </div>
        <div className="container">
          <nav className="flex items-center gap-14 justify-between mt-5 mb-3 lg:my-5">
            {/* Logo */}
            <Link className="shrink-0" to='/'>
              <img className="w-22" src={logo} alt="Logo" />
            </Link>
            {/* Tab Search Form*/}
            <form className="hidden md:flex gap-4 w-full" action="">
              <div className="flex items-center w-full border border-gray-400 rounded-md">
                <input className="w-full focus:outline-0 p-2" type="text" placeholder="Search for products............" />
                {/* Custom Dropdown */}
                <div 
                onClick={() => (setDropdownActive(!dropdownActive))}
                className="relative hidden lg:flex items-center justify-center min-w-46 gap-2 border-l border-gray-400 text-nowrap px-6 py-2 cursor-pointer">
                  <span>{selectedCat}</span>
                  <div className={`${dropdownActive ? "flex" : "hidden"} absolute flex-col border border-primary w-full 
                  top-14 left-0 bg-white z-20 rounded-md
                  [&>span]:p-2
                  [&>span]:px-4`}
                  >
                    {
                      categories.map((cat) => (
                        <span key={cat.name} 
                        className="hover:bg-primary hover:text-white cursor-pointer"
                        onClick={(() => (setSelectedCat(cat.name)))}>{cat.name}</span>
                      ))
                    } 
                  </div>
                  <SlArrowDown className="shrink-0" size={12} strokeWidth={40} />
                </div>
                <button className="lg:hidden p-2" type="submit">
                  <CiSearch size={18} strokeWidth={1} />
                </button>
              </div>
              <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded-md" type="submit">Search</button>
            </form>
            <ul className="flex flex-row gap-4 items-center 
            [&>li>a]:flex
            [&>li>a]:flex-col
            [&>li>a]:items-center">
              <li>
                <Link to="/">
                  <CiHeart size={24} strokeWidth={.5} />
                  <span className="hidden md:block">Wishlist</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiUser size={24} strokeWidth={.5} />
                  <span className="hidden md:block">Account</span>
                </Link>
              </li>
              <li>
                <Link className="relative" to="/">
                  <CiShoppingCart size={24} strokeWidth={.5} />
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs bg-primary text-white rounded-full">
                    2</span>
                  <span className="hidden md:block">Cart</span>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Search Form*/}
          <form className="relative mb-4 md:hidden" action="">
            <div className="flex items-center p-2 border border-gray-400 rounded-md">
              <input className="w-full focus:outline-0" type="text" placeholder="Search for products............" />
              <CiSearch size={18} strokeWidth={1} />
            </div>
          </form>
          {/* Category Menu */}
          <ul className="category-list flex flex-row items-center gap-4 border-b border-gray-300 overflow-x-auto">
            {
              categories.map((cat) => (
                <li
                  id={cat.name}
                  onClick={() => (setActiveCat(cat.name))}
                  className={`rounded-t-md md:p-3 p-2 cursor-pointer ${activeCat === cat.name
                    ? 'bg-blue-50 border-b-4 border-primary'
                    : ''}
                  `}>
                  <Link className="flex flex-col items-center gap-2 text-nowrap
                  md:flex-row md:gap-3" to='/'>
                    <cat.icon size={22} strokeWidth={1.5} color="var(--color-primary)" />
                    <div className="text-xs md:text-base leading-4">{cat.name}</div>
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>
      </header>

      <Outlet />

      <footer className="bg-gray-200">
        <div className="container py-12 md:py-10 lg:py-12">
          <div className="flex flex-col gap-4 mb-8 lg:flex-row lg:justify-between lg:items-center">
            <div>
              <div className="text-3xl font-semibold mb-2">
                Subscribe to Our Newsletter
              </div>
              <p>
                Get latest deals, new arrivals, and exclusive offers directly in
                your inbox.
              </p>
            </div>
            <form
              className="relative pb-5 border-b border-gray-600 lg:w-1/3"
              action=""
            >
              <input
                className="pt-3 w-5/6 focus:outline-0"
                type="text"
                placeholder="Your email address"
                name=""
                id=""
              />
              <button
                className="absolute right-0 p-1.5 bg-primary border border-primary rounded-full"
                type="submit"
              >
                <svg
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="size-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
              <Link to="/">
                <img className="w-28" src={logo} alt="Company Logo" />
              </Link>
              <p>
                E-Shop is your one-stop online store for quality products at the
                best prices.
              </p>
              <ul className="flex flex-row gap-4">
                <li>
                  <Link className={socialLinks} to="/">
                    <svg
                      className="w-6 h-6 stroke-1 stroke-white fill-none lucide lucide-facebook-icon lucide-facebook"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link className={socialLinks} to="/">
                    <svg
                      className="w-6 h-6 stroke-white stroke-1 fill-none lucide lucide-instagram-icon lucide-instagram"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link className={socialLinks} to="/">
                    <svg
                      className="w-6 h-6 stroke-white stroke-15 fill-none"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link className={socialLinks} to="/">
                    <svg
                      className="w-6 h-6 stroke-22 stroke-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-20 -20 722 722"
                    >
                      <path
                        d="M544.387 93.008C484.512 33.063 404.883.035 320.05 0 145.246 0 2.98 142.262 2.91 317.113c-.024 55.895 14.577 110.457 42.331 158.551L.25 640l168.121-44.102c46.324 25.27 98.477 38.586 151.55 38.602h.134c174.785 0 317.066-142.273 317.132-317.133.036-84.742-32.921-164.418-92.8-224.36z
                          M320.05 580.94h-.11c-47.296-.02-93.683-12.73-134.16-36.742l-9.62-5.715-99.766 26.172 26.628-97.27-6.27-9.972c-26.386-41.969-40.32-90.476-40.296-140.281.055-145.332 118.305-263.57 263.7-263.57 70.406.023 136.59 27.476 186.355 77.3s77.156 116.051 77.133 186.485C583.582 462.69 465.34 580.94 320.05 580.94z
                          M464.636 383.522c-7.922-3.968-46.883-23.132-54.149-25.78-7.258-2.645-12.547-3.962-17.824 3.968-5.285 7.93-20.469 25.781-25.094 31.066-4.625 5.29-9.242 5.953-17.168 1.985-7.925-3.965-33.457-12.336-63.726-39.332-23.555-21.012-39.457-46.961-44.082-54.89-4.617-7.938-.04-11.813 3.476-16.173 8.578-10.652 17.168-21.82 19.809-27.105 2.644-5.29 1.32-9.918-.664-13.883-1.977-3.965-17.824-42.969-24.426-58.84-6.437-15.445-12.965-13.36-17.832-13.601-4.617-.231-9.902-.278-15.187-.278-5.282 0-13.868 1.98-21.133 9.918-7.262 7.934-27.73 27.102-27.73 66.106s28.394 76.683 32.355 81.972c3.96 5.29 55.879 85.328 135.367 119.649 18.906 8.172 33.664 13.043 45.176 16.695 18.984 6.031 36.254 5.18 49.91 3.14 15.226-2.277 46.879-19.171 53.488-37.68 6.602-18.51 6.602-34.374 4.617-37.683-1.976-3.304-7.261-5.285-15.183-9.254z"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:justify-self-center">
              <div className={footerListTitle}>Quick Links</div>
              <ul className="tick-icon">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Offers</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={footerListTitle}>Customer Service</div>
              <ul className="tick-icon">
                <li>
                  <Link to="/">FAQ</Link>
                </li>
                <li>
                  <Link to="/">Shipping & Delivery</Link>
                </li>
                <li>
                  <Link to="/">Return Policy</Link>
                </li>
                <li>
                  <Link to="/">Cancellation Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={footerListTitle}>Legal Information</div>
              <ul className="tick-icon">
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/">Refund Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className={footerListTitle}>Contact Information</div>
              <ul>
                <li className="flex items-center gap-4">
                  <svg className="size-9 stoke-2 stroke-white bg-primary p-1 rounded-full fill-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <Link to="/">support@e-shop.com</Link>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="size-9 stoke-2 stroke-white bg-primary p-1 rounded-full fill-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                  <Link to="/">+91 98765 43210</Link>
                </li>
                <li className="flex items-center gap-4">
                  <svg className="size-9 stoke-2 stroke-white bg-primary p-1 rounded-full fill-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <Link to="/">New Delhi, India</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center bg-primary text-white py-2">
          © 2026 E-shop. All rights reserved.
        </div>
      </footer>
    </>
  );
}
export default MainLayout;
