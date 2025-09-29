import React, { useState, useRef } from 'react';
import DataBuku from '../../../Utils/DataBuku';
import styles from './styles/Buku.module.css';


function Buku() {
  const [bukuList, setBukuList] = useState([...DataBuku]); // state untuk daftar buku
  const BukuContainerRef = useRef(null); // Ref untuk container produk

  const handleClick = () => {
    const newBuku = {
      id: bukuList.length + 1,
      judul: "Buku Baru",
      tahun: 2023,
      penulis: "Penulis Baru",
      description: "Deskripsi buku baru",
      Image: "https://placehold.co/400"
    };

    // Tambahkan buku baru ke state
    setBukuList(prev => [...prev, newBuku]);

    console.log("Buku Terbaru: ", [...bukuList, newBuku]);
    alert("Buku Baru Telah Ditambahkan!");
  };

  return (
    <div className={styles.bukuContainer}>
      <h1 className={styles.title}>Daftar Buku</h1>
      <div className={styles.cardContainer} ref={BukuContainerRef}>
        {bukuList.map((buku) => (
          <div key={buku.id} className={styles.card}>
            <img src={buku.Image} alt={buku.judul} />
            <h3>{buku.judul}</h3>
            <p>Penulis: {buku.penulis}</p>
            <p>Tahun: {buku.tahun}</p>
            <p>{buku.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={handleClick} className={styles.addButton}>
        Tambah Buku Baru
      </button>
      </div>
    </div>
  );
}

export default Buku;
