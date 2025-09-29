// import gambar5 from "./assets/gambar5.jpeg";
// import gambar6 from "./assets/gambar6.jpeg";
// import gambar7 from "./assets/gambar7.jpeg";
// import gambar8 from "./assets/gambar8.jpeg";
// import gambar9 from "./assets/gambar9.jpeg";
// import gambar10 from "./assets/gambar10.jpeg";
// import gambar11 from "./assets/gambar11.jpeg";
// import gambar12 from "./assets/gambar12.jpeg";
// import gambar13 from "./assets/gambar13.jpeg";
// import gambar14 from "./assets/gambar14.jpeg";
// import gambar15 from "./assets/gambar15.jpeg";
// import gambar16 from "./assets/gambar16.jpeg";

// export default function ProdukList() {
//     return (
//         <div>
//             {/* PRODUK LIST */}
//                   <div>
//                     <section id="book" className="py-5 text-center container">
//                       <div className="row py-lg-5">
//                         <div className="col-lg-6 col-md-8 mx-auto">
//                           <h1 className="fw-light">Best Seller</h1>
//                           <p className="lead text-body-secondary">
//                             “Koleksi pilihan buku terpopuler yang paling banyak dicari pembaca. Temukan kisah seru, inspiratif, dan tak terlupakan dari penulis favoritmu di sini!”
//                           </p>
//                           <p>
//                             <a href="#" className="btn btn-primary my-2 m-2" style={{ backgroundColor: '#ff69b4', borderColor: '#ff69b4' }}>View</a>
//                             <a href="#" className="btn btn-secondary my-2">Other Book</a>
//                           </p>
//                         </div>
//                       </div>
//                     </section>
            
//                     <div className="album py-5 bg-body-tertiary">
//                       <div className="container">
//                         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            
//                           {/* Card 1 */}
//                           <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar5}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Laut Bercerita" karya Leila S. Chudori menggambarkan kisah pilu aktivis era Orde Baru yang hilang diculik, dituturkan dengan penuh emosi dan kemanusiaan.
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                           {/* Card 2 */}
//                           <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar6}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Tentang Kamu" karya Tere Liye adalah novel penuh misteri dan emosi tentang perjalanan hidup seorang perempuan luar biasa yang terungkap lewat investigasi hukum warisan."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                           {/* Card 3 */}
//                           <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar7}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Dunia Sophie adalah novel filsafat yang mengisahkan perjalanan seorang remaja memahami sejarah pemikiran manusia."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                           {/* Card 4 */}
//                           <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar8}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Buku self-improvement tentang seni memilih hal penting dan mengabaikan hal remeh."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 5 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar9}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Novel Tere Liye tentang cinta, kehilangan, dan harapan di tengah bencana alam."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 6 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar10}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Kisah inspiratif empat perempuan muda yang menaklukkan dunia teknologi dengan keberanian dan ambisi."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 7 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar11}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Kisah Alaia tentang perjuangan, luka, dan keberanian menemukan arti hidup."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 8 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar12}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Lanjutan perjalanan Alaia menghadapi rahasia, luka, dan harapan baru dalam hidupnya."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 9 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar13}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Buku Dilan 1990 menceritakan kisah cinta remaja Milea dan Dilan yang manis, penuh kenangan, dan gaya bahasa jenaka khas anak muda."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 10 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar14}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Hujan karya Tere Liye adalah kisah tentang cinta, kehilangan, dan perjuangan hidup di tengah bencana besar."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
            
//                             {/* Card 11 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar15}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "‘Septihan’ karya Poppi Pertiwi menceritakan perjuangan cinta dan persahabatan remaja antara Septian yang dingin dan Jihan yang pantang menyerah di bangku SMA."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
                          
//                             {/* Card 12 */}
//                             <div className="col">
//                             <div className="card shadow-sm h-100">
//                               <img
//                                 src={gambar16}
//                                 className="card-img-top"
//                                 alt="Buku Filosofi Teras"
//                                 width={300}
//                                 style={{ objectFit: "cover", height: "225px"}}
//                               />
//                               <div className="card-body d-flex flex-column">
//                                 <p className="card-text flex-grow-1">
//                                   "Galaksi berkisah tentang perjalanan Galaksi Aldebaran, ketua geng Ravispa yang keras kepala, dalam menemukan makna persahabatan, cinta, dan perubahan hidup di bangku SMA."
//                                 </p>
//                                 <div className="d-flex justify-content-between align-items-center mt-auto">
//                                   <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
//                                     <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Buy</button>
//                                   </div>
//                                   <small className="text-body-secondary">Rp. 100.000</small>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//         </div>
//     )
// }
