
export default function Sidebar({close}){
    return (
        <nav className="w-55 left-0 fixed top-0 bottom-0 rounded-b-2xl lg:hidden bg-white z-10">
            <div className='flex flex-col items-center space-y-7 mt-7'>
                <div className="flex space-x-14">
                    <p className='font-bold'>All</p>
                    <button onClick={close}>X</button>
                </div>
                <h3 className='shadow-4xl text-xl'>Shop</h3>
                <h3 className='shadow-4xl text-xl'>New Arrivals</h3>
                <h3 className='shadow-4xl text-xl'>Brands</h3>
                <h3 className='shadow-4xl text-xl'>In stock</h3>
                <p className='shadow-4xl text-xl'>Summer Wears</p>
                <p className='shadow-4xl text-xl'>Jewelries</p>
                <p className='shadow-4xl text-xl'>Logout</p>
                </div>
            
        </nav>
    )
}