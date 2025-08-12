import { Link } from "react-router-dom";
export default function Categories({value, handleSearch, prod}){
    return (
        <div>
            <div className="relative top-40 flex items-center justify-center">
                <input className="rounded-xl bg-gray-200 p-2 lg:w-110 w-90 pl-12 outline-0" type="text" placeholder="Search for products ..."
                value={value}
                onChange={(e) => handleSearch(e.target.value)}/>
            </div>
            
            <div className="grid lg:grid-cols-3 grid-cols-2 mt-50 lg:mx-4  ">
                {prod.length > 0 ? (
                    prod.map((product) =>(
                <div className="" key={product.productId}>
                    <img className="lg:w-100 lg:h-80 w-80 h-60 object-cover p-3 rounded-4xl" src={product.imageUrl} alt="" />
                    <h2 className="text-xl font-black">{product.productName}</h2>
                    <h2 className="font-bold lg:text-2xl">${product.price}</h2>
                    <Link className="hover:underline" to={`/productdetail/${product.productId}`}>View product</Link>
                </div> 
            ))
        ) : (
            <div className="flex items-center justify-center">No products found. Search other products</div>
        )}

            </div>
        </div>
    )
} 