import Buku from "../../components/shared/BukuList";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
// import ProdukList from "../../components/shared/ProdukList";


export default function BooksT(){
    return(
        <>
        <Header/>
        {/* <ProdukList/> */}
        <Buku/>
        <Footer/>
        </>
    )
}