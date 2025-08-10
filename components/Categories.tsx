import { Link } from "react-router-dom"
import { Products } from "~/routes/products"
export default function Categories(){
    return (
        <div>
            
            <div className="grid lg:grid-cols-3 grid-cols-2 mt-50 lg:mx-4 lg:mb-24">
                {Products.map((product) =>(
                <div className="" key={product.productId}>
                    <img className="lg:w-100 lg:h-80 w-80 h-60 object-cover p-3 rounded-4xl" src={product.imageUrl} alt="" />
                    <h2 className="text-xl font-black">{product.productName}</h2>
                    <h2 className="font-bold lg:text-2xl">${product.price}</h2>
                    <Link className="hover:underline" to={`/productdetail/${product.productId}`}>View product</Link>
                </div>
            ))}

            </div>
        </div>
    )
} 