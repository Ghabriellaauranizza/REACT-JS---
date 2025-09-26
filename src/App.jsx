import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import gambar4 from "./assets/gambar4.jpeg";
import gambar5 from "./assets/gambar5.jpeg";
import gambar6 from "./assets/gambar6.jpeg";
import gambar7 from "./assets/gambar7.jpeg";
import gambar8 from "./assets/gambar8.jpeg";
import gambar9 from "./assets/gambar9.jpeg";
import gambar10 from "./assets/gambar10.jpeg";
import gambar11 from "./assets/gambar11.jpeg";
import gambar12 from "./assets/gambar12.jpeg";
import gambar13 from "./assets/gambar13.jpeg";
import gambar14 from "./assets/gambar14.jpeg";
import gambar15 from "./assets/gambar15.jpeg";
import gambar16 from "./assets/gambar16.jpeg";
import team1 from "./assets/team1.jpg";




function App() {
  return (
    <div>
      
      {/* HEADER */}
        <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom container">
        {/* Logo */}
        <a href="#home" className="d-flex align-items-center mb-2 mb-md-0 text-decoration-none">
          <i className="fa-solid fa-book fa-2xl me-2" style={{ color: "#366aadff" }}></i>
          <span className="fs-4 fw-bold">BookStore</span>
        </a>

        {/* Nav */}
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#home" className="nav-link px-3">Home</a></li>
          <li><a href="#book" className="nav-link px-3">Book</a></li>
          <li><a href="#team" className="nav-link px-3">Team</a></li>
          <li><a href="#contact" className="nav-link px-3">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </header>



      {/* CONTTENT */}
      <div className="container my-5"> 
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"> 
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3"> 
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Filosofi Terras: Henry Manamping</h1> 
            <p className="lead">"Filosofi Teras" mengajarkan cara menghadapi overthinking, emosi, dan masalah hidup dengan tenang melalui ajaran filsafat Stoik.</p> 
            
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"> 
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button> <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button> 
            </div> 
          </div> 
          
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg"> 
            <img className="rounded-lg-3" src={gambar4} alt="Buku" width="400" />
          </div> 
        </div> 
      </div>




      {/* PRODUK LIST */}
      <div>
        <section id="book" className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                “Koleksi pilihan buku terpopuler yang paling banyak dicari pembaca. Temukan kisah seru, inspiratif, dan tak terlupakan dari penulis favoritmu di sini!”
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">View</a>
                <a href="#" className="btn btn-secondary my-2">Other Book</a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar5}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Laut Bercerita" karya Leila S. Chudori menggambarkan kisah pilu aktivis era Orde Baru yang hilang diculik, dituturkan dengan penuh emosi dan kemanusiaan.
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar6}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Tentang Kamu" karya Tere Liye adalah novel penuh misteri dan emosi tentang perjalanan hidup seorang perempuan luar biasa yang terungkap lewat investigasi hukum warisan."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar7}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Dunia Sophie adalah novel filsafat yang mengisahkan perjalanan seorang remaja memahami sejarah pemikiran manusia."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar8}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Buku self-improvement tentang seni memilih hal penting dan mengabaikan hal remeh."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 5 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar9}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Novel Tere Liye tentang cinta, kehilangan, dan harapan di tengah bencana alam."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 6 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar10}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Kisah inspiratif empat perempuan muda yang menaklukkan dunia teknologi dengan keberanian dan ambisi."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 7 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar11}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Kisah Alaia tentang perjuangan, luka, dan keberanian menemukan arti hidup."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 8 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar12}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Lanjutan perjalanan Alaia menghadapi rahasia, luka, dan harapan baru dalam hidupnya."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 9 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar13}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Buku Dilan 1990 menceritakan kisah cinta remaja Milea dan Dilan yang manis, penuh kenangan, dan gaya bahasa jenaka khas anak muda."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 10 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar14}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Hujan karya Tere Liye adalah kisah tentang cinta, kehilangan, dan perjuangan hidup di tengah bencana besar."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>

                {/* Card 11 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar15}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "‘Septihan’ karya Poppi Pertiwi menceritakan perjuangan cinta dan persahabatan remaja antara Septian yang dingin dan Jihan yang pantang menyerah di bangku SMA."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              
                {/* Card 12 */}
                <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={gambar16}
                    className="card-img-top"
                    alt="Buku Filosofi Teras"
                    width={300}
                    style={{ objectFit: "cover", height: "225px"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <p className="card-text flex-grow-1">
                      "Galaksi berkisah tentang perjalanan Galaksi Aldebaran, ketua geng Ravispa yang keras kepala, dalam menemukan makna persahabatan, cinta, dan perubahan hidup di bangku SMA."
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary m-1">View</button>
                        <button type="button" className="m-1 btn btn-sm btn-outline-secondary">Edit</button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* TEAM */}
      <div id="team" className="container marketing">
        <h1 className="text-center mb-4">Contact Us</h1>
        <div className="row text-center">
          {/* Member 1 */}
          <div className="col-lg-4">
            <img
              src={team1} 
              alt="Ghabriella Auranizza Fransrico"
              className="bd-placeholder-img rounded-circle"
              width={180}
              height={180}
            />
            <h2 className="fw-normal mt-3">Ghabriella Auranizza Fransrico</h2>
            <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur"</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>

          {/* Member 2 */}
          <div className="col-lg-4">
            <img
              src={team1} 
              alt="Dyah Inkud Daifatur Rahma"
              className="bd-placeholder-img rounded-circle"
              width={180}
              height={180}
            />
            <h2 className="fw-normal mt-3">Dyah Inkud Daifatur Rahma</h2>
            <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>

          {/* Member 3 */}
          <div className="col-lg-4">
            <img
              src={team1} 
              alt="Feomita Ramadhany"
              className="bd-placeholder-img rounded-circle"
              width={180}
              height={180}
            />
            <h2 className="fw-normal mt-3">Feomita Ramadhany</h2>
            <p>Mahasiswa aktif Prodi Informatika Fakultas Ilmu Komputer UPN "Veteran Jawa Timur</p>
            <p><a className="btn btn-secondary" href="#">View details »</a></p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="container my-5"></section>
      <div className="container mt-5">
            <h1 className="text-center mb-4">Contact Us</h1>

        <div className="row g-4">
          {/* Form Contact */}
          <div className="col-md-6">
            <div className="card shadow-sm p-4">
              <h4 className="mb-3">Kirim Pesan</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nama</label>
                  <input type="text" className="form-control" id="name" placeholder="Masukkan nama Anda" />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Masukkan email Anda" />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Pesan</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Kirim
                </button>
              </form>
            </div>
          </div>

        {/* Info Contact + Maps */}
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4">
            <h4 className="mb-3">Info Kontak</h4>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="fa-solid fa-location-dot me-2 text-primary"></i>
                Surabaya, Jawa Timur
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-envelope me-2 text-primary"></i>
                ghabriellafransrico@gmail.com
              </li>
              <li className="mb-3">
                <i className="fa-solid fa-phone me-2 text-primary"></i>
                +6288991306216
              </li>
            </ul>

            <h5 className="mt-4">Ikuti Kami</h5>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-primary btn-sm">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-outline-danger btn-sm">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="btn btn-outline-info btn-sm">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="card shadow-sm">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.1795614693174!2d112.78832469999999!3d-7.333721199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab87edcad15%3A0xb26589947991eea1!2sUniversitas%20Pembangunan%20Nasional%20%22Veteran%22%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1758863722774!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>


      {/* FOOTER */}
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#book" className="nav-link px-2 text-body-secondary">Book</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 Ghabriella Auranizza Fransrico</p>
        </footer>
      </div>


    </div>
  )
}

export default App