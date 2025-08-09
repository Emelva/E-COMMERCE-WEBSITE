import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "components/Cart";
import Footer from "components/Footer";
import Header from "components/Header";
import { useSelector } from "react-redux";
import { Link } from "react-router";


export default function CartPage(){
    const cart = useSelector((state) => state.cart.cart);
    const getTotal = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        let delivery = 0;
        let discount = 0;
        let overallTotalPrice;
        cart.forEach(item => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
            delivery += Math.round(item.price * 10/100);
            discount += Math.round(item.price * 30/100);
            overallTotalPrice = Math.round(totalPrice -(discount + delivery)) 
        })
        return {totalPrice, totalQuantity, delivery, discount, overallTotalPrice}
    }
    
    return (
        <div>
            <Header />

            <div className="flex space-x-4 mt-30">
                <Link to={'/'}>
                <p>Home</p>
                </Link>
                <p>Cart</p>
            </div>

            <h1 className="uppercase font-black lg:text-4xl text-xl mt-5 mb-6">Your Cart</h1>

            <div className="grid lg:grid-cols-2 gap-4 m-2">
                <div>
                    {cart.map((item) => (
                <Cart key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                />
            ))}
                </div>

                <div className="shadow-2xl rounded-2xl">
                    <h1 className="lg:text-3xl text-xl font-bold lg:mb-13 mb-6 text-center">Order Summary</h1>

                    <div className="flex lg:gap-100 gap-30 lg:m-4 m-2 lg:text-xl">
                        <p>Quantity: </p>
                        <span>{getTotal().totalQuantity}</span>
                    </div>

                    <div className="flex lg:gap-100 gap-30 lg:m-4 m-2 lg:text-xl">
                        <p>Subtotal</p>
                        <span>${getTotal().totalPrice}</span>
                    </div>

                    <div className="flex lg:gap-100 gap-30 lg:m-4 m-2 lg:text-xl">
                        <p>Discount</p>
                        <span className="text-red-600">-{getTotal().discount}</span>
                    </div>

                    <div className="flex lg:gap-100 gap-30 lg:m-4 m-2 lg:text-xl">
                        <p>Delivery Fee</p>
                        <span >{getTotal().delivery}</span>
                    </div>

                    <div className="flex lg:gap-100 gap-30 lg:m-4 m-2 lg:text-xl">
                        <p>Total</p>
                        <span>${getTotal().overallTotalPrice}</span>
                    </div>

                    <p className="lg:w-50 w-30 bg-black text-white rounded-2xl p-2 text-center lg:my-15 my-6 lg:mx-40 mx-20">Go to Checkout
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </p>
                </div>
            
            </div>

            

            
            <Footer />
        </div>
    )
}