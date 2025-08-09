import Categories from "components/Categories";
import Footer from "components/Footer";
import Header from "components/Header";
import NavItems from "components/NavItems";

export default function Category(){
    return (
        <div>
            <Header />

            <div className="lg:flex">
                <NavItems />

                <Categories />
            </div>

            <Footer/>
        </div>
    )
}