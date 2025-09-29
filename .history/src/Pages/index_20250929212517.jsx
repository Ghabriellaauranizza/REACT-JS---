import Hero from "../components/shared/Hero";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import DataBuku from "../Utils/DataBuku";
import { use } from "react";

// import ProdukList from "../components/shared/ProdukList";



export default function Home(){
let bukuList = [...DataBuku]; // Salinan data produk awal
const BukuContainerRef = useRef(null); //Ref untukk container produk
const handleClick = () => {
    const newBuku = {
        id: bukuList.length + 1,
        judul: "Buku Baru",
        tahun: 2023,
        penulis: "Penulis Baru",
        description: "Deskripsi buku baru",
        Image: "https://example.com/newbook.jpg"
    };
    bukuList.push(newBuku); // Menambahkkan produk baru kke dalam array

}



    return(

    
        <>
        {/* Header */}
        <Header/>

        {/* Hero */}
        <Hero/>  

        {/* Product List */}
        {/* <ProdukList/> */}

        {/* Footer */}
        <Footer/>
        </>
    )
}