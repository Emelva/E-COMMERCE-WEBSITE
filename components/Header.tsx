import { faUserAlt } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown, faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import Sidebar from "./Sidebar";

export default function Header() {
    const cart = useSelector((state) => state.cart.cart);
    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.quantity
        })
        return total
    }

    const [sidebarOpen, setSidebarOpen] = useState(false);
    function openSidebar() {
        setSidebarOpen(!sidebarOpen)
    }
    function closeSidebar() {
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <div>
            <header className="fixed left-0 right-0 top-0" >
                <div className="bg-black text-white lg:flex lg:items-center lg:justify-center lg:space-x-10" >
                    <p className="lg:mx-3 lg:text-xl text-sm">Sign up and get 20% off on your first order
                        <span className="mx-2 underline hover:text-amber-100">Sign Up Now</span>
                    </p>
                    <p className="lg:ml-60 font-bold mr-0">X</p>
                </div>
                <div className="bg-white text-black flex items-center shadow-2xl lg:space-x-9 space-x-3.5 lg:py-3">
                    <div className="flex space-x-3 items-center justify-center">
                        <button className="lg:hidden"
                            onClick={openSidebar}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        <h1 className="lg:text-3xl text-xl font-bold lg:mx-8 mx-3">EMELDASTORES</h1>
                    </div>
                    <nav className="flex space-x-8 mx-7">
                        <Link to={'/categorypage'}>
                            <p className="hidden lg:block">Shop
                                <span>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </span>

                            </p>
                        </Link>
                        <p className="hidden lg:block">On sale</p>
                        <a href="#"><p className="hidden lg:block">New Arrivals</p></a>
                        <p className="hidden lg:block">Brands</p>
                    </nav>
                    <div className="relative">
                        <input className="rounded-xl hidden lg:block bg-gray-200 lg:p-2 lg:w-110 lg:pl-12 outline-0" type="text" placeholder="Search for products ..." />
                        <p className=" absolute top-3 left-2 hidden lg:block"><FontAwesomeIcon icon={faSearch} /></p>
                    </div>
                    <div className=" flex items-center justify-center lg:space-x-4 lg:mx-9 ">
                        <p className="lg:hidden block"><FontAwesomeIcon icon={faSearch} /></p>
                        <Link to="/cartpage">
                            <p className="relative"><FontAwesomeIcon icon={faShoppingCart} />
                                <p className=" bg-red-700 text-white rounded-3xl absolute w-6 text-center -top-3 -right-2">{getTotalQuantity() || 0}</p>
                            </p>
                        </Link>
                        <FontAwesomeIcon icon={faUserAlt} />
                    </div>
                </div>
            </header>

            {sidebarOpen &&
                <Sidebar close={closeSidebar} />
            }
        </div>
    )
}