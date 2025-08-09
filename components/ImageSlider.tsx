import { useEffect, useState } from "react";
import { categories } from "~/routes/products";
export default function ImageSlider({}){
    

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [image.length]);
    return(
        <div className="grid bg-gray-200 lg:m-19 m-9 lg:p-10 p-4 shadow-xl rounded-2xl">
            <p className="flex items-center justify-center lg:text-3xl text-2xl font-bold my-6 uppercase col-span-1">browse by dress styles</p>
            <div className=" grid lg:grid-cols-3 gap-7">
                {categories.map((product, index) =>(
                    <img key={index}
                    src={product.imageUrl}
                        className={`w-200 h-90 object-cover rounded-2xl shadow-xl my-8 ${index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-1"}`}
                    />
                ))}
            </div>
        </div>
        
    )
}