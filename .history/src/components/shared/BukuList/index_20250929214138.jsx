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
      const newBukuElement = document.createElement('div');
      newBukuElement.className = style.card;
      newBukuElement.innerHTML = `
        <img src="${newBuku.Image}" alt="${newBuku.judul}" />
        <h3>${newBuku.judul}</h3>
        <p>Penulis: ${newBuku.penulis}</p>
        <p>Tahun: ${newBuku.year}</p>
        <p>${newBuku.description}</p>
      `;
      BukuContainerRef.current.appendChild(newBukuElement);
    }
    console.log("Buku Terbaru: "bukuList);
    alert("Buku Baru Telah Ditambahkan!");
}

  return (
    <div>
      
    </div>
  )
}

export default Buku
