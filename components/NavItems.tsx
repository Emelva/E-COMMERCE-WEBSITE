import { faAngleDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavItems({filterCategory, onFilterChange}){
    return (
        <div className="mt-25 m-4">
            <div className="flex space-x-3 mb-3">
                <p className="flex space-x-5">Home
                    <FontAwesomeIcon icon={faAngleDown}/> 
                </p>
                <p>Casual</p>
            </div>

            <div className="rounded-2xl p-7 shadow-2xl">
                <div className="border-b-1 flex gap-14 items-center justify-center p-2">
                    <h1 className="text-xl font-bold">Filters</h1>
                    <FontAwesomeIcon icon={faFilter}/>
                </div>

                <div>
                    
                    <div className="grid grid-cols-2 gap-20 mt-4">
                        <button className="" onClick={() => onFilterChange('')}>All</button>
                        <p><FontAwesomeIcon icon={faAngleDown}/></p>
                    </div>

                    {filterCategory.map((title) => (
                        <div className="grid grid-cols-2 p-2 gap-20">
                            <button key={title}
                            onClick={() => onFilterChange(title)}>{title}</button>
                            <p><FontAwesomeIcon icon={faAngleDown}/></p>
                        </div>
                    ))}
                </div>

                {/* <nav className=" mt-7 flex flex-col space-y-4">
                    <div className="flex gap-14 items-center justify-center">
                        <p>All</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                    <div className="flex gap-14 items-center justify-center">
                        <p>Women</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                    <div className="flex gap-14 items-center justify-center">
                        <p>Shirts</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                    <div className="flex gap-14 items-center justify-center">
                        <p>Men</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                    <div className="flex gap-14 items-center justify-center">
                        <p>Jeans</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                    <div className="flex gap-14 items-center justify-center">
                        <p>Hair</p>
                        <FontAwesomeIcon icon={faAngleDown}/> 
                    </div>
                </nav> */}

                

                <div className="mb-10">
                    <p className="font-bold text-xl my-5">Colors</p>
                    <div className="grid grid-cols-5 space-x-4 space-y-4 items-center">
                        <button className="bg-green-500 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-red-500 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-yellow-500 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-amber-800 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-blue-500 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-blue-900 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-pink-500 w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-white w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-black w-6 text-transparent rounded-4xl">hy</button>
                        <button className="bg-purple-600 w-6 text-transparent rounded-4xl">hy</button>
                    </div>
                </div>

                <div>
                    <p className="font-bold text-xl my-5">Size</p>
                    <div className="grid grid-cols-2 gap-4 space-y-3">
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">XX Small</p>
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">X Small</p>
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">Small</p>
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">Medium</p>
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">X-Large</p>
                        <p className="hover:bg-black hover:text-white bg-gray-200 p-2 rounded-xl">Large</p>
                    </div>
                </div>

                <div className="flex flex-col space-y-3 mt-5">
                    <p className="text-2xl font-bold">Dress Style</p>
                    <p>Casual</p>
                    <p>Formal</p>
                    <p>Party</p>
                    <p>Gym</p>
                </div>
            </div>
        </div>
    )
}