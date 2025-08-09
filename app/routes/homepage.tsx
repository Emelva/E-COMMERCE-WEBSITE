
import Footer from "components/Footer";
import Header from "components/Header";
import ImageSlider from "components/ImageSlider";
import Product from "components/ProductList";
import Review from "components/Review";
import { newArrivals, Products, topSelling } from "./products";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";


export default function HomePage(){

    const price = Products.find((item) => item.price)
    console.log(price)
    return (
        <div>
            <Header/>

            

            <div className="">

                <div className="grid lg:grid-cols-2 grid-cols-1 mt-22">

                    <div className="bg-gray-300 lg:p-9 p-2">
                        <p className="lg:text-4xl text-2xl font-black lg:ml-3 ml-1 lg:mt-0 mt-10">FIND CLOTHES THAT</p>
                        <p className="lg:text-4xl text-2xl font-black lg:ml-3 ml-1">MATCHES YOUR STYLE</p>
                        <p className="mt-3 lg:ml-3">Browse through our diverse range of meticulousely crafted garments, designed</p>
                        <p className="lg:ml-3">to bring out your individuality and cater to your sense of style</p>
                        <button className="bg-black text-white font-bold lg:p-2 p-1 w-60 lg:w-80 ml-3 rounded-2xl my-8">Shop now</button>

                        <div className="mt-20 flex ">
                            <div className="lg:ml-6 ml-3">
                                <p className="lg:text-3xl text-2xl">200+</p>
                                <span>International Brands</span>
                            </div>
                            <div className="lg:ml-10 ml-3">
                                <p className="lg:text-3xl text-2xl">2,000+</p>
                                <span>High-Quality Products</span>
                            </div>
                            <div className="lg:ml-10 ml-3">
                                <p className="lg:text-3xl text-2xl">30,000+</p>
                                <span>Happy Customers</span>
                            </div>
                        </div>

                    </div>
                    <img className="bg-cover object-cover w-170 h-130  mr-0" src="/assets/whiteModelDress.jpg" alt="" />
                </div>

                <div className="flex lg:text-2xl text-amber-50 bg-black space-x-16 lg:p-4 p-2 font-bold items-center justify-center">
                    <p className="lg:mr-20 mr-10">VERSECE</p>
                    <p className="lg:ml-20 ml-9 font-serif">ZARA</p>
                    <p className="lg:ml-20 ml-9 font-stretch-50%">GUCCI</p>
                    <p className="lg:ml-20 ml-9 font-mono">PRADA</p>
                    <p className="lg:ml-20 ml-9">Calvin Klein</p>
                </div>

                <a href="#"><p className="flex items-center justify-center lg:p-3 p-1 lg:text-2xl text-xl font-bold lg:my-6 my-3">NEW ARRIVALS</p></a>

                <div  className="grid lg:grid-cols-4 grid-cols-2 m-10 space-x-5">
                    {newArrivals.map((product) =>(
                        <div
                        key={product.productId}>
                            <img className="lg:w-80 lg:h-60 w-60 h-40 object-cover rounded-2xl" src={product.imageUrl} alt="" />
                            <h2 className="font-bold mt-3">{product.productName}</h2>
                            <p className="flex mt-3">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <p className="mt-3">${product.price} </p>
                        </div>
                    ))}
                </div>

                <p className="flex items-center justify-center lg:p-3 p-1">
                    <Link to='/categorypage'>View all</Link>
                </p>
                
                <p>
                    <p className="flex items-center justify-center p-5 lg:text-2xl text-xl font-bold lg:my-6 my-3">TOP SELLING</p>
                </p>

                <div  className="grid lg:grid-cols-4 grid-cols-2 m-10 space-x-5">
                    {topSelling.map((product) =>(
                        <div
                        key={product.productId}>
                            <img className="lg:w-80 lg:h-60 w-60 h-40 object-cover rounded-2xl " src={product.imageUrl} alt="" />
                            <h2 className="mt-3 font-bold">{product.productName}</h2>
                            <p className="flex mt-3">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </p>
                            <p className="mt-3">${product.price} </p>
                        </div>
                    ))}
                </div>

                <p className="flex items-center justify-center lg:p-3 p-1">
                    <Link to='/categorypage'>View all</Link>
                </p>

                <ImageSlider />

                <p>
                    <p className="flex items-center lg:p-5 p-2 lg:text-3xl text-2xl font-black lg:my-5 my-2">OUR HAPPY CUSTOMERS</p>
                </p>

                


                <div className="grid lg:grid-cols-4 grid-cols-1 mb-40">
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
                    
                </div>
            </div>
            
            
            
            

            <Footer />
        </div>
    )
}