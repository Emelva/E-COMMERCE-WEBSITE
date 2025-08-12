
import Categories from "components/Categories";
import Footer from "components/Footer";
import Header from "components/Header";
import NavItems from "components/NavItems";
import { useState } from "react";
import { Products } from "~/routes/products";


export default function Category(){
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState('');
    const filteredProducts = Products
    .filter(product => product.productName.toLowerCase().includes(search.toLowerCase())
    )
    .filter(product => 
        filters ? product.category === filters : true
    );

    
    const filterCategory = ["Women","Shirt", "Men", "Jeans", "Hair", "Shoe", "Dress"];


    function handleSearch(query) {
        setSearch(query);
    }
    return (
        <div>
            <Header />

            <div className="lg:flex">
                <NavItems filterCategory={filterCategory}
                onFilterChange={setFilters}/>

                <Categories value={search}
                handleSearch={handleSearch}
                prod={filteredProducts}/>
            </div>

            <Footer/>
        </div>
    )
}