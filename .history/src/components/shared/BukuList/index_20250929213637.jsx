import React, { useRef } from 'react'
import DataBuku from '../../../Utils/DataBuku';

function Buku() {
let bukuList = [...DataBuku]; // Salinan data produk awal
const BukuContainerRef = useRef(null); //Ref untukk container produk
const handleClick = () => {
    const newBuku = {
        id: bukuList.length + 1,
        judul: "Buku Baru",
        tahun: 2023,
        penulis: "Penulis Baru",
        description: "Deskripsi buku baru",
        Image: "https://placehold.co/400"
    };
    bukuList.push(newBuku); // Menambahkkan produk baru kke dalam array

    //Menambahkan buku baru ke dalam DOM menggunakan Ref
    if (BukuContainerRef.current) {
      const newPBukuElement = document.createElement('div');
      newBukuElement.className = style.card;
}

  return (
    <div>
      
    </div>
  )
}

export default Buku
