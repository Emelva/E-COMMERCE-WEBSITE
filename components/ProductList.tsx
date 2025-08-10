import { Link } from "react-router-dom"
import { Products } from "~/routes/products"
export default function ProductList(){
    return (
        <div>
            {Products.map((product) =>(
                <div key={product.productId}>
                    <h2>{product.productName}</h2>
                    <Link to={`/productdetail/${product.productId}`}>View product</Link>
                </div>
            ))}
            
        </div>
    )
}