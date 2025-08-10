import Footer from "components/Footer";
import Header from "components/Header";

import { Link, useParams } from "react-router-dom";
import { Products } from "./products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Review from "components/Review";
import { useDispatch } from "react-redux";
import { addToCart } from "~/redux/cartSlice";



export default function ProductDetail(){
    const {productId} = useParams();
    const product = Products.find((product) => product.productId === productId)
    
    if (!product){
        return <div>Product not found</div>
    }

    const dispatch = useDispatch()
    return (
        <div>
            <Header />

            <div className="mt-30 flex space-x-4 p-3">
                <p>Home
                    <FontAwesomeIcon icon={faAngleRight}/>
                </p>
                <p>Shop
                    <FontAwesomeIcon icon={faAngleRight}/>
                </p>
                <p>{product.category}
                    <FontAwesomeIcon icon={faAngleRight}/>
                </p>
            </div>

            <div className="grid lg:grid-cols-2 mb-10">
                
                <div>
                    <img className="mx-5 rounded-2xl object-cover lg:w-150 lg:h-120 w-80 h-60" src={product.imageUrl} alt={product.productName} />
                </div>

                <div className="mx-10">
                    <h1 className="font-black lg:text-4xl text-2xl my-2">{product?.productName}</h1>
                    <div className="flex my-1">
                        <FontAwesomeIcon className="text-amber-600" icon={faStar}/>
                        <FontAwesomeIcon className="text-amber-600" icon={faStar}/>
                        <FontAwesomeIcon className="text-amber-600" icon={faStar}/>
                        <FontAwesomeIcon className="text-amber-600" icon={faStar}/>
                        <FontAwesomeIcon className="text-amber-600" icon={faStarHalf}/>
                    </div>
                    <p className="lg:text-3xl text-xl my-1">${product.price}</p>
                    <p className="my-2 lg:p-3 p-1">{product.description}</p>
                    
                    <p className="my-1">Select colors</p>
                    <button className="bg-pink-500 w-8 h-8 text-transparent rounded-4xl mx-1">hy</button>
                    <button className="bg-white w-8 h-8 text-transparent rounded-4xl mx-1">hy</button>
                    <button className="bg-black w-8 h-8 text-transparent rounded-4xl mx-1">hy</button>
                    <p className="lg:mt-9 lg:mb-4 m-2">Choose Size</p>
                    <div className="flex space-x-6 lg:my-8 my-3">
                        <p className="lg:p-2 p-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white">Small</p>
                        <p className="lg:p-2 p-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white">Medium</p>
                        <p className="lg:p-2 p-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white">Large</p>
                        <p className="lg:p-2 p-1 bg-gray-200 rounded-xl hover:bg-black hover:text-white">X-Large</p>
                    </div>

                    <div className="flex space-x-16">
                        <Link to={'/cartpage'}>
                            <button className="lg:w-50 w-30 hover:bg-gray-900 transition ease text-center lg:p-2 p-1 bg-black text-white rounded-xl"
                            onClick={() => dispatch(addToCart({
                                id: product.productId,
                                title: product.productName,
                                image: product.imageUrl,
                                price: product.price,}))}>Add to cart
                            </button>
                        </Link>
                        </div>
                    </div>
                </div>

                <p className="text-center ">Ratings & Reviews</p>

                <div className="grid lg:grid-cols-2 grid-cols-1 mb-25">
                    <Review name="Sarah Baker."
                    review="I'm blown away by the quality and style of the clothes i recieved from Shop.co. From casual wear to elegant dresses
                    ,every piece i've bought has exceeded my expectations."/>
                    <Review name="Jane Boston."
                    review="I usually am skeptical about trying new places, especially one i am not so familiar with but i have to say, shop.co met and 
                    surpassed all my expectations. the quality was more than i bargained for and i am absolutely satisfied.."/>
                    <Review name="Manon cobler."
                    review="Thanks to the friens who recommended this site to me, i haven't stop shopping for new clothes since yesterday, haha. 
                    I'll definitely be coming back because there are some really nice stuffs to get for some of my friends birthday which is coming up"/>
                    <Review name="Joe Dubberman."
                    review="Finding clothes that align with my personal style used to be a challenge until i discovered Shop.co. the range 
                    of options they offer is truly remarkable, catering to a variety of tastes and occasions."/>
                    <Review name="Jane Boston."
                    review="I usually am skeptical about trying new places, especially one i am not so familiar with but i have to say, shop.co met and 
                    surpassed all my expectations. the quality was more than i bargained for and i am absolutely satisfied."/>
                    <Review name="Manon cobler."
                    review="Thanks to the friens who recommended this site to me, i haven't stop shopping for new clothes since yesterday, haha. 
                    I'll definitely be coming back because there are some really nice stuffs to get for some of my friends birthday which is coming up"/>

                </div>
            <Footer />
        </div>
    )
}