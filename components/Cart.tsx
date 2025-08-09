
import { decrementQuantity, incrementQuantity, removeItem } from "~/redux/cartSlice";
import { useDispatch } from "react-redux";



export default function Cart({id, image, title, price, quantity=0}){
    const dispatch = useDispatch();
    return (
        <div>

            
                <div className="shadow-2xl rounded-2xl grid grid-cols-4 mb-4">
                    <img className="w-60 h-40 object-cover p-2 lg:p-4 col-span-1 rounded-xl" src={image} alt="item" />
                    <div className=" col-span-2">
                        <p className="lg:text-xl font-bold">{title}</p>
                        <p>size</p>
                        <p>color</p>
                        <p className="lg:text-2x text-xl mb-6 ">${price}</p>
                    </div>
                    <div className="col-span-1 lg:flex items-center justify-center">
                        <button className="p-1 bg-gray-200 lg:w-10 w-6 rounded-xl text-2xl m-1"
                        onClick={()=> dispatch(decrementQuantity(id))}>-</button>
                        <button className="p-1 bg-gray-200 lg:w-10 w-6 rounded-xl text-2xl m-1"
                        onClick={()=> dispatch(incrementQuantity(id))}>+</button>
                        <button className=" bg-black text-white m-1 rounded-xl"
                        onClick={() => dispatch(removeItem(id))}>Remove Item</button>
                    </div>
                    
                </div>
                
                

        </div>
    )
}
