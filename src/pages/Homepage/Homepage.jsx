import BestSeller from "./components/BestSeller"
import CategoriesCTA from "./components/CategoriesCTA"
import Features from "./components/features"
import Hero from "./components/Hero"
import ProductList from "./components/Product-List"
function Homepage(){
    
    return(
        <>
        <Hero/>
        <Features/>
        <BestSeller/>
        <CategoriesCTA/>
        <ProductList/>
        </>
    )
}

export default Homepage