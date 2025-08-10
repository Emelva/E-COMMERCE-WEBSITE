import { faApplePay, faFacebook, faGithub, faGooglePay, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer(){
    return (
        <div className="relative bottom-0 right-0 left-0 shadow-2xl bg-gray-200 lg:p-10 mt-40">
            <div className="bg-black text-white lg:flex grid grid-cols-1 lg:gap-16 gap-6 lg:mx-10 mx-2 lg:absolute lg:left-9 lg:right-9 lg:bottom-76 rounded-4xl p-4 items-center">
                <div className="grid ml-15 lg:text-3xl text-xl font-bold uppercase">
                    <p>Stay upto Date About </p>
                    <p>Our Latest Offers </p>
                </div>
                <div className="grid lg:ml-40 ml-10">
                    <div className="lg:flex">
                        <p className="hidden lg:block"><FontAwesomeIcon className=" lg:absolute lg:bottom-21 lg:right-130 text-black" icon={faEnvelope} /></p>
                        <input className="rounded-xl lg:p-2 lg:w-80 w-60 p-1 bg-gray-200 text-black outline-0 placeholder:text-black text-center lg:mt-4 mt-2" type="text" placeholder="Enter your email adress" />
                    </div>
                    <input className="rounded-xl lg:p-2 lg:w-80 w-60 p-1 bg-gray-200 text-black outline-0 placeholder:text-black text-center lg:mt-4 mt-2"  type="text" placeholder="Subscribe to our Newsletter"/>
                </div>
            </div>
            
            <div className="lg:flex relative lg:p-4 lg:space-x-19 space-x-3 lg:m-5 lg:ml-17 m-2">
                <div className="mt-8">
                    <p className="text-2xl font-bold mb-3">SHOP.CO</p>
                    <p className="">We have clothes that suits your style</p>
                    <p>and which you're proud to wear. From</p>
                    <p className="mb-4">women to men.</p>
                    <div className="flex space-x-2">
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faInstagram}/>
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    <div className="lg:space-y-2 mt-8">
                    <p className="font-bold mb-2">COMPANY</p>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Carrer</p>
                </div>
                <div className="lg:space-y-2 mt-8">
                    <p className="font-bold mb-2">HELP</p>
                    <p>Customer support</p>
                    <p>Delivery Details</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="lg:space-y-2 mt-8">
                    <p className="font-bold mb-2">FAQ</p>
                    <p>Account</p>
                    <p>Manage Deliveries</p>
                    <p>Orders</p>
                    <p>Payments</p>
                </div>
                <div className="lg:space-y-2 mt-8">
                    <p className="font-bold mb-2">RESOURCES</p>
                    <p>Free eBooks</p>
                    <p>Development Tutorial</p>
                    <p>How to Blog</p>
                    <p>Youtube Playlist</p>
                </div>
                </div>
            </div>
            <div className="lg:flex  items-center space-x-77">
                <p className="lg:ml-13 m-2">
                    SHOP.CO &copy; 2000 2023. All Rights Reserved.
                </p>
                <div className="flex m-2">
                        <p className="flex shadow-xl lg:mr-15 mr-5">Visa
                            <img className="lg:w-10 lg:h-5 w-4 h-2 object-cover lg:ml-3" src="/assets/IMG_7791.PNG" alt="a mastercard" />
                        </p>
                        <p className="flex shadow-xl lg:mr-15 mr-5 m-1 bg-blue-900 text-transparent bg-clip-text"><i>PayPal</i></p>
                        <p>
                            <FontAwesomeIcon  className="flex shadow-xl lg:mr-15 mr-5 m-1 text-3xl" icon={faApplePay} />
                            <FontAwesomeIcon className="flex shadow-xl lg:mr-15 mr-5 text-3xl m-1 " icon={faGooglePay} />
                        </p>
                </div>
            </div>
        </div>
    )
}