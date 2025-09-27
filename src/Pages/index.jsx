import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import ProdukList from "../components/shared/ProdukList";



export default function Home(){
    return(
        <>
        {/* Header */}
        <Header/>

        {/* Hero */}
        <Hero/>  

        {/* Product List */}
        <ProdukList/>

        {/* Footer */}
        <Footer/>
        </>
    )
}